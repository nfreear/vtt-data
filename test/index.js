/**
 * Basic unit tests - using the "node:assert" library.
 */
import { strict as assert } from 'node:assert';
// import { MetaVttParser } from 'audio-describe';
import { DATA, findVideo } from '../index.js';

// console.log('Parser:', MetaVttParser);

testFound();
testAll();

function testFound () {
  const found = findVideo('mux:coffee');
  const foundES = findVideo('mux:cafe.es');

  assert.ok(found, 'Expecting a found object (en)');
  assert.ok(foundES, 'Expecting a found object (es)');
  assert.equal(typeof found.mediaUrl, 'string', 'Expecting a mediaUrl');
  assert.equal(typeof found.trackUrl, 'string', 'Expecting a trackUrl');
  assert.equal(found.language, 'en', 'Expecting english (en)');
  assert.equal(foundES.language, 'es', 'Expecting spanish (es)');

  console.log('✅ Test found passed OK');
}

function testAll () {
  assert.equal(DATA.length, 5, 'Expecting 5 videos in array');
  // Was: console.assert(DATA.length === 5, 'Expecting 4 videos in array');

  DATA.forEach((it) => {
    const mediaURL = new URL(it.mediaUrl);

    assert.equal(typeof it.mediaUrl, 'string', 'Expecting a mediaUrl (all)');
    assert.equal(typeof it.trackUrl, 'string', 'Expecting a trackUrl (all)');
    assert.match(mediaURL.host, /(youtube|vimeo|mux)\.com$/, 'Expecting a mediaUrl (all)');
    assert.match(it.trackUrl, /[\w-\.]+\.(en|es)\.vtt/, 'Expecting a trackUrl (all)')
    assert.match(it.language, /en|es/, 'Expecting multi-lang (en, es) (all)');
  });
  console.log('✅ Test all passed OK');
}
