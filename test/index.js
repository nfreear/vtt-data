/**
 * Basic tests.
 */
import { DATA, findVideo } from '../index.js';

test();

function test () {
  const found = findVideo('mux:coffee');

  console.assert(DATA.length === 3, 'Expecting 3 items in array');
  console.assert(found, 'Expecting a found object');
  console.assert(typeof found.mediaUrl === 'string', 'Expecting a mediaUrl');
  console.assert(typeof found.trackUrl === 'string', 'Expecting a trackUrl');
}
