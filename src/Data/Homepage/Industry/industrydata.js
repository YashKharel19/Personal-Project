const Nlp = require("../../../assets/nlp.svg");
const Stock = require("../../../assets/stock.svg");
const Tele = require("../../../assets/tele.svg");
const Media = require("../../../assets/media.svg");
const Government = require("../../../assets/government.svg");
const Vision = require("../../../assets/vision.svg");

export const IndustryData =
[
  {
    "id": 1,
    "title": "Natural Language Processing",
    "description":"Language understanding, voluminous text processing, Searching, Pattern Identification, Sentiment Analysis",
    "url": `${Nlp}`,
  },
  {
    "id": 2,
    "title": "Stock Market data",
    "description":"Analysis, Predictions, Trends, Visualization",
    "url": `${Stock}`,
  },
  {
    "id": 3,
    "title": "Computer Vision",
    "description":"Image processing, object detection, Optical Characters Recognition (OCR)",
    "url": `${Vision}`,
  },
  {
    "id": 4,
    "title": "Telecommunications",
    "description":"Big data analysis, data patten identification, Usage Analysis",
    "url": `${Tele}`,
  },
  {
    "id": 5,
    "title": "Media",
    "description":"Online news and social media content analysis and expert system design, Autometic chat bot design, Content Archieving",
    "url": `${Media}`,
  },
  {
    "id": 6,
    "title": "Government/Public Sector",
    "description":"Content digitisation and migration to a knowledge based system, enterprise solutions, Document archiving, Document Management and work flow",
    "url": `${Government}`,
  },
];
