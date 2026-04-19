/**
 * Demo videos with WebVTT audio description tracks.
 */
const DATA = [
  {
    id: 'yt:vbde2',
    title: 'Christmas at …',
    rights: '© All rights reserved.',
    mediaUrl: 'https://www.youtube.com/watch?v=HgHj3g68Tr4',
    trackUrl: import.meta.resolve('./tracks/visit-britain-downton-v2.ext-ad.en.vtt'),
    provider: 'youtube'
  }, {
    id: 'yt:vbdex',
    mediaUrl: 'https://www.youtube.com/watch?v=HgHj3g68Tr4',
    trackUrl: import.meta.resolve('../tracks/visit-britain-downton.ext-ad.en.vtt'),
    provider: 'youtube'
  }
];

export function findVideo (query) {
  return DATA.find((it) => it.id === query);
}

export default DATA;
