/**
 * Basic tests.
 */
import { strict as assert } from 'node:assert';
import { DATA, findVideo } from '../index.js';

test();

function test () {
  const found = findVideo('mux:coffee');

  assert.equal(DATA.length, 4, 'Expecting 4 videos in array');
  // Was: console.assert(DATA.length === 5, 'Expecting 4 videos in array');
  assert.ok(found, 'Expecting a found object');
  assert.equal(typeof found.mediaUrl, 'string', 'Expecting a mediaUrl');
  assert.equal(typeof found.trackUrl, 'string', 'Expecting a trackUrl');
}
