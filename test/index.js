/**
 * Basic unit tests - using the "node:assert" library.
 *
 * @see https://nodejs.org/api/assert.html
 */
import { strict as assert } from 'node:assert';
import parseVttFile from './parseVttFile.js';
import { DATA, findVideo } from '../index.js';

testFound();
testAll();
// testParser();

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

async function testAll () {
  assert.equal(DATA.length, 5, 'Expecting 5 videos in array');
  // Was: console.assert(DATA.length === 5, 'Expecting 4 videos in array');

  const promises = await DATA.map(async (it, idx) => {
    const mediaURL = new URL(it.mediaUrl);
    const { entries } = await parseVttFile(it.trackUrl);

    console.log('>', idx, it.title, entries.length);

    assert.equal(typeof it.mediaUrl, 'string', 'Expecting a mediaUrl (all)');
    assert.equal(typeof it.trackUrl, 'string', 'Expecting a trackUrl (all)');
    assert.match(mediaURL.host, /(youtube|vimeo|mux)\.com$/, 'Expecting a mediaUrl (all)');
    assert.match(it.trackUrl, /[\w-\.]+\.(en|es)\.vtt/, 'Expecting a trackUrl (all)')
    assert.match(it.language, /en|es/, 'Expecting multi-lang (en, es) (all)');
    assert.ok(entries.length > 1, 'Expecting multiple VTT entries (all)')
  });
  await Promise.all(promises);

  console.log('✅ Test all passed OK');
}

export async function testParser () {
  const found = findVideo('mux:coffee');
  const { entries } = await parseVttFile(found.trackUrl);
  console.log('VTT entries - mux:coffee:', entries.length);
}
