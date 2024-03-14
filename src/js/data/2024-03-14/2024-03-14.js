import { towaAAA } from './vtubers/towaAAA.js'
import { animeOpenings } from "./misc/animeOps.js";
import { animeEndings } from "./misc/animeEds.js";
import { animeInserts } from "./misc/animeIns.js";
import { nonAniSongs } from "./misc/nonAni.js";

dataSetVersion = "2024-03-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by vtubers or miscellaneous",
        key: "singer",
        tooltip: "Check this to show songs containing these vtubers",
        checked: true,
        sub: [
            { name: "Tokoyami Towa", key: "Towa", checked: false },
            { name: "Hoshimachi Suisei", key: "Suisei", checked: false },
            { name: "Minato Aqua", key: "Aqua", checked: false },
            { name: "Anime Openings", key: "AnimeOps", checked: false },
            { name: "Anime Endings", key: "AnimeEds", checked: false },
            { name: "Anime Inserts", key: "AnimeIns", checked: false },
            { name: "Non ani songs", key: "NonAniSongs", checked: true }
        ]
    }
];

dataSet[dataSetVersion].characterData = [
    ...towaAAA,
    ...animeOpenings,
    ...animeEndings,
    ...animeInserts,
    ...nonAniSongs
];
