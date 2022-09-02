// @ts-check

import { resolve } from 'path';
import { fileURLToPath } from 'url';

// load environment variables from .env file

export const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const assetsFolder = resolve(__dirname, '../', 'assets');
