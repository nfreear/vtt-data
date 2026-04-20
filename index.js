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
    id: 'mx:cof',
    title: 'Mux: Pouring coffee into a cup.',
    rights: 'unknown',
    mediaUrl: 'https://stream.mux.com/OfjbQ3esQifgboENTs4oDXslCP5sSnst/high.mp4',
    trackUrl: import.meta.resolve('./tracks/mux-pour-coffee.ext-ad.en.vtt'),
    duration: '01:41',
    provider: 'video'
  }
];

export function findVideo (query) {
  return DATA.find((it) => it.id === query);
}

export default DATA;
