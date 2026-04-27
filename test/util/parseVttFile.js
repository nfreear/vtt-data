import { readFile } from 'node:fs/promises';
import MetaVttParser from 'audio-describe/vtt-parser';

/**
 * Utility to read a VTT file and run the parser.
 * @param {string} filePath — Local file-path.
 */
export default async function parseVttFile (filePath) {
  const path = filePath.replace('file:///', '/');
  const rawString = await readFile(path, { encoding: 'utf8' });

  const parser = new MetaVttParser();
  try {
    return parser.parse(rawString);
  } catch (err) {
    console.error('Error. VTT Track:', filePath);
    throw (err);
  }
}
