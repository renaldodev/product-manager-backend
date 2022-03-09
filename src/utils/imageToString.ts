import fs from 'fs';
export async function imageToString64(imgPath: any) {
  const value = await fs.promises
    .readFile(imgPath, 'base64')
    .then((response) => response);
  return value;
}

export function imageBufferToString64(buffer: Buffer) {
  return buffer.toString('base64');
}
