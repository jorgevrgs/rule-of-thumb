import type { ReadStream } from 'fs';
import { createReadStream } from 'fs';

export default function getPictureStream(
  pictureName: string
): Promise<ReadStream> {
  return new Promise((resolve) => {
    const pictureStream: ReadStream = createReadStream(
      `assets/pictures/${pictureName}`
    );

    pictureStream
      .on('error', (error) => {
        console.error({ error });
        resolve(createReadStream('assets/images/not-found.png'));
      })
      .on('open', () => {
        resolve(pictureStream);
      });
  });
}
