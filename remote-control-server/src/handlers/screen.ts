import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const screenHandler = async () => {
  const { x, y } = await mouse.getPosition();
  const screenRegion = new Region(x, y, 200, 200);
  const picture = await screen.grabRegion(screenRegion);
  const invertedImage = await picture.toRGB();
  const image = new Jimp(invertedImage);
  const base64data = await image.getBase64Async(Jimp.MIME_PNG);
  const prefix = 'data:image/png;base64,';

  return `prnt_scrn ${base64data.slice(prefix.length)}`;
};