/**
 * Demo videos with WebVTT audio description tracks.
 */
const DATA = [
  {
    id: 'yt:vbde2',
    title: 'Christmas at a Downton Abbey Filming Location',
    rights: '© VisitBritain 2026. All rights reserved.',
    mediaUrl: 'https://www.youtube.com/watch?v=HgHj3g68Tr4',
    trackUrl: import.meta.resolve('./tracks/visit-britain-downton-v2.ext-ad.en.vtt'),
    note: 'Background music. Some spoken audio.',
    extendedADRequired: true,
    duration: '01:39',
    provider: 'youtube'
  }, {
    id: 'yt:vbdex',
    title: 'Christmas at …',
    rights: '© VisitBritain 2026. All rights reserved.',
    mediaUrl: 'https://www.youtube.com/watch?v=HgHj3g68Tr4',
    trackUrl: import.meta.resolve('./tracks/visit-britain-downton.ext-ad.en.vtt'),
    duration: '01:39',
    provider: 'youtube'
  }, {
    id: 'yt:stgb',
    title: 'Starring GREAT Britain - the movie (en)',
    rights: '© VisitBritain 2026. All rights reserved.',
    mediaUrl: 'https://www.youtube.com/watch?v=ezrfJus7f3g',
    trackUrl: import.meta.resolve('./tracks/starring-gb.ext-ad.en.vtt'),
    duration: '04:08',
    provider: 'youtube'
  }, {
    id: 'mux:coffee',
    title: 'Mux: Pouring coffee into a cup.',
    rights: 'unknown',
    mediaUrl: 'https://stream.mux.com/OfjbQ3esQifgboENTs4oDXslCP5sSnst/high.mp4',
    trackUrl: import.meta.resolve('./tracks/mux-pour-coffee.ext-ad.en.vtt'),
    note: 'Continuous background music. No spoken audio.',
    extendedADRequired: true,
    duration: '01:49',
    provider: 'video'
  }
];

function findVideo (query) {
  return DATA.find((it) => it.id === query);
}

export { DATA, findVideo };

export default DATA;
