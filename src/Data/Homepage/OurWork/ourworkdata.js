const Spell = require('../../../assets/spell.svg');
const Dms = require('../../../assets/dms.svg');
const Online = require('../../../assets/online.svg');

export const OurWorkData =
[
  {
    "id": 1,
    "title": "DOCUMENT MANAGEMENT SYSTEM",
    "subheader":"Client:Prime Minister Office",
    "description":"With the increasing volume of documents the job of searching and retrieving the document from physical archive becomes tedious and time consuming. Digital archive without searching facility will be just anther pile of documents in the computer. Efficient and effective document archival management is only possible with digital storage and intelligent searching of the documents in the archive. Document Archival Management System is the best solution for managing information    more efficiently, accurately, and cost-effectively where there is large volume of document in the archive.                 We provide the software solution that creates digital surrogates of documents for facilitating aggregated storage, access and retrieval.",
    "url": `${Dms}`,
  },
  {
    "id": 2,
    "title": "ONLINE MEDIA MONITORING SYSTEM",
    "subheader":"Client:Press Council",
    "description":"This system captures all the news published in online by registered media in near real time. It manages the news sources, news content along with their original footprint and it has been embedded with flexible news searching system, which searches the news content by performing the morphological analysis of words.                               Online FM Radio Monitoring System captures all the available audio streams broadcasted by Nepalese FM radios in online and stores in the server. The recorded media can be searched with various parameters and played back. The system performs Noise filtering, protocol conversion, audio compression and audio enhancement while recording the audio streams. Currently the system has been implemented at Press Council Nepal (PCN). It captures all the audio streams available in the web in real time.",
    "url": `${Online}`,
  },
  {
    "id": 3,
    "title": "SPELLING CHECKER",
    "subheader":"Client: Kantipur",
    "description":"Spell Checking and suggestion system checks the cognitive and typographic error that may occur while writing. It flags the incorrect spelling and may suggest the closely matched correct word list.    NepSpell uses the state-of-art technology to check the spelling error and to look up for the suggestion, which gives the incomparable performance. It utilizes the standard developed by Nepal Academy for the word morphology and grammar rules.",
    "url": `${Spell}`,
  }
];
