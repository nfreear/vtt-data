import { readFile } from 'node:fs/promises';
import MetaVttParser from 'audio-describe/vtt-parser';

export default async function parseVttFile (filePath) {
  const path = filePath.replace('file:///', '/');
  const rawString = await readFile(path, { encoding: 'utf8' });

  const parser = new MetaVttParser();
  try {
    return parser.parse(rawString);
  } catch {
    console.error('Error. VTT Track:', filePath);
    throw(err);
  }
}
