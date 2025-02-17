const apiDocumentation = {
   generalInfo: {
      baseUrl: "https://hianime-api-psi.vercel.app/api/v1",
      documentationUrl: "https://github.com/yahyaMomin/hianime-API/blob/main/README.md",
   },
   endpoints: [
      {
         name: "Home",
         endpoint: "/home",
         hasParams: false,
         hasQueries: false,
         example: "/home",
         description:
            "Fetches the homepage content of hianime such as spotlight, top Airing, trending, mostPopular, mostFavorite, newAdded, latest Updated, top10 and genres.",
      },
      {
         name: "A-Z List",
         endpoint: "/animes/az-list/:letter?",
         hasParams: true,
         hasQueries: true,
         paramsList: ["a , b , c ...", "0-9", "other", "all"],
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/az-list/a?page=2",
         description: "Retrieves anime titles based on alphabetical and numerical filters.",
      },
      {
         name: "Top Airing",
         endpoint: "/animes/top-airing",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/top-airing?page=3",
         description: "Fetches a list of the top currently airing anime.",
      },
      {
         name: "Most Popular",
         endpoint: "/animes/most-popular",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/most-popular?page=3",
         description: "Fetches a list of the most popular anime.",
      },
      {
         name: "Most Favorite",
         endpoint: "/animes/most-favorite",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/most-favorite?page=3",
         description: "Fetches a list of the most favorite anime.",
      },
      {
         name: "Completed",
         endpoint: "/animes/completed",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/completed?page=3",
         description: "Fetches a list of completed anime series.",
      },
      {
         name: "Recently Added",
         endpoint: "/animes/recently-added",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/recently-added?page=3",
         description: "Fetches a list of recently added anime.",
      },
      {
         name: "Recently Updated",
         endpoint: "/animes/recently-updated",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/recently-updated?page=3",
         description: "Fetches a list of recently updated anime.",
      },
      {
         name: "Top Upcoming",
         endpoint: "/animes/top-upcoming",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/top-upcoming?page=3",
         description: "Fetches a list of the top upcoming anime.",
      },
      {
         name: "Genre",
         endpoint: "/animes/genre/:genre",
         hasParams: true,
         hasQueries: true,
         queriesList: ["page"],
         paramsList: ["genre"],
         validParams: [
            "action",
            "adventure",
            "cars",
            "comedy",
            "dementia",
            "demons",
            "drama",
            "ecchi",
            "fantasy",
            "game",
            "harem",
            "historical",
            "horror",
            "isekai",
            "josei",
            "kids",
            "magic",
            "martial arts",
            "mecha",
            "military",
            "music",
            "mystery",
            "parody",
            "police",
            "psychological",
            "romance",
            "samurai",
            "school",
            "sci-fi",
            "seinen",
            "shoujo",
            "shoujo ai",
            "shounen",
            "shounen ai",
            "slice of life",
            "space",
            "sports",
            "super power",
            "supernatural",
            "thriller",
            "vampire",
         ],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/genre/action?page=3",
         description: "Fetches anime based on specific genres.",
      },

      {
         name: "Subbed Anime",
         endpoint: "/animes/subbed-anime",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/subbed-anime?page=3",
         description: "Fetches a list of subbed anime.",
      },
      {
         name: "Dubbed Anime",
         endpoint: "/animes/dubbed-anime",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/dubbed-anime?page=3",
         description: "Fetches a list of dubbed anime.",
      },
      {
         name: "Movie",
         endpoint: "/animes/movie",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/movie?page=3",
         description: "Fetches a list of anime movies.",
      },
      {
         name: "TV",
         endpoint: "/animes/tv",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/tv?page=3",
         description: "Fetches a list of anime TV series.",
      },
      {
         name: "OVA",
         endpoint: "/animes/ova",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/ova?page=3",
         description: "Fetches a list of anime OVAs.",
      },
      {
         name: "ONA",
         endpoint: "/animes/ona",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/ova?page=3",
         description: "Fetches a list of anime ONAs.",
      },
      {
         name: "Special",
         endpoint: "/animes/special",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/special?page=3",
         description: "Fetches a list of anime specials.",
      },
      {
         name: "Events",
         endpoint: "/animes/events",
         hasParams: false,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/animes/events?page=3",
         description: "Fetches a list of anime events.",
      },
      {
         name: "information",
         endpoint: "/anime/:id",
         hasParams: true,
         hasQueries: false,
         example: "/anime/one-piece-100",
         description: "fetches complete information of anime based on id.",
      },
      {
         name: "search",
         endpoint: "/search",
         hasParams: false,
         hasQueries: true,
         queriesList: ["keyword", "page"],
         defaultQueries: {
            page: 1,
         },
         example: "/search?keyword=death+note&page=2",
         description: "fetches animes based on keyword.",
      },
      {
         name: "recommendation",
         endpoint: "/recommendation/:id",
         hasParams: true,
         hasQueries: false,
         example: "/recommendation/one-piece-100",
         description: "fetches recommended animes based on id.",
      },
      {
         name: "related",
         endpoint: "/related/:id",
         hasParams: true,
         hasQueries: false,
         example: "/related/one-piece-100",
         description: "fetches related animes based on id.",
      },
      {
         name: "characters",
         endpoint: "/characters/:id",
         hasParams: true,
         hasQueries: true,
         queriesList: ["page"],
         defaultQueries: {
            page: 1,
         },
         example: "/characters/one-piece-100",
         description: "fetches characters of anime based on id.",
      },
      {
         name: "character",
         endpoint: "/character/:characterId",
         hasParams: true,
         hasQueries: false,
         example: "/character/roronoa-zoro-7",
         description: "fetches character information based on id.",
      },
      {
         name: "actor",
         endpoint: "/actor/:actorId",
         hasParams: true,
         hasQueries: false,
         example: "/actor/kana-hanazawa-1",
         description: "fetches actor information based on id.",
      },
      {
         name: "episodes",
         endpoint: "/episodes/:id",
         hasParams: true,
         hasQueries: false,
         example: "/episodes/one-piece-100",
         description: "fetches all episodes of anime based on id.",
      },
      {
         name: "servers",
         endpoint: "/servers",
         hasParams: false,
         hasQueries: true,
         queriesList: ["episodeId"],
         defaultQueries: {},
         example: "/servers?episodeId=/watch/steinsgate-3?ep=213",
         description: "fetches servers of episode based on id.",
      },
      {
         name: "sources",
         endpoint: "/sources",
         hasParams: false,
         hasQueries: true,
         queriesList: ["episodeId", "audio", "server"],
         defaultQueries: { audio: "sub", server: 4 },
         example: "/sources?episodeId=/watch/steinsgate-3?ep=213&audio=dub&server=1",
         description: "fetches episode source based on episode id.",
      },
   ],
};
export default apiDocumentation;
