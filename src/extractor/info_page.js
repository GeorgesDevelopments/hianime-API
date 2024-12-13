import { load } from "cheerio";

export const extractInfoPage = (html) => {
  const $ = load(html);

  const obj = {
    title: null,
    alternativeTitle: null,
    japanese: null,
    id: null,
    poster: null,
    rating: null,
    type: null,
    episodes: {
      sub: null,
      dub: null,
      eps: null,
    },
    synopsis: null,
    synonyms: null,
    aired: {
      from: null,
      to: null,
    },
    premiered: null,
    duration: null,
    status: null,
    MAL_score: null,
    genres: [],
    studios: null,
    producers: [],
    moreSeasons: [],
  };

  const main = $("#ani_detail .anis-content");
  const moreSeasons = $("#main-content .block_area-seasons");

  obj.poster = main.find(".film-poster .film-poster-img").attr("src");

  const titleEl = main.find(".anisc-detail .film-name");
  obj.title = titleEl.text();
  obj.alternativeTitle = titleEl.attr("data-jname");

  const info = main.find(".film-stats .tick");

  obj.rating = info.find(".tick-pg").text();
  obj.episodes.sub = Number(info.find(".tick-sub").text());
  obj.episodes.dub = Number(info.find(".tick-dub").text());
  obj.episodes.eps = info.find(".tick-eps").length
    ? Number(info.find(".tick-eps").text())
    : Number(info.find(".tick-sub").text());

  obj.type = info.find(".item").first().text();

  const id = main.find(".film-buttons .btn");

  obj.id = id.length ? id.attr("href").split("/").at(-1) : null;

  const moreInfo = main.find(".anisc-info-wrap .anisc-info .item");

  moreInfo.each((i, el) => {
    const name = $(el).find(".item-head").text();

    switch (name) {
      case "Overview:":
        obj.synopsis = $(el).find(".text").text().trim();
        break;
      case "Japanese:":
        obj.japanese = $(el).find(".name").text();
        break;
      case "Synonyms:":
        obj.synonyms = $(el).find(".name").text();
        break;
      case "Aired:":
        const aired = $(el).find(".name").text().split("to");

        obj.aired.from = aired[0].trim();

        if (aired.length > 1) {
          const secondPart = aired[1].trim();
          obj.aired.to = secondPart === "?" ? null : secondPart; // Set to null if "?"
        } else {
          obj.aired.to = null; // Explicitly set to null if there's no second part
        }

        break;
      case "Premiered:":
        obj.premiered = $(el).find(".name").text();
        break;
      case "Duration:":
        obj.duration = $(el).find(".name").text();
        break;
      case "Status:":
        obj.status = $(el).find(".name").text();
        break;
      case "MAL Score:":
        obj.MAL_score = $(el).find(".name").text();
        break;
      case "Genres:":
        obj.genres = $(el)
          .find("a")
          .map((i, genre) => $(genre).text())
          .get();
        break;
      case "Studios:":
        obj.studios = $(el).find("a").text();
        break;
      case "Producers:":
        obj.producers = $(el)
          .find("a")
          .map((i, producer) => $(producer).attr("href").split("/").at(-1))
          .get();
        break;
      default:
        break;
    }
  });

  if (!moreSeasons.length) return obj;

  $(moreSeasons)
    .find(".os-list .os-item")
    .each((i, el) => {
      const innerObj = {
        title: null,
        alternativeTitle: null,
        id: null,
        poster: null,
        isActive: false,
      };
      innerObj.title = $(el).attr("title");
      innerObj.id = $(el).attr("href").split("/").pop();
      innerObj.alternativeTitle = $(el).find(".title").text();
      const posterEl = $(el).find(".season-poster").attr("style");

      const match = posterEl.match(/url\((['"])?(.*?)\1\)/);
      innerObj.poster = match ? match[2] : null;

      innerObj.isActive = $(el).hasClass("active");

      obj.moreSeasons.push(innerObj);
    });
  return obj;
};
