// @ts-check

import { readFileSync } from 'fs';
import { join } from 'path';
import { getClient, getCollection } from './client.mjs';
import { assetsFolder } from './constants.mjs';

console.log('Starting seed...');

async function seedTable() {
  const collection = await getCollection('celebrities');

  // import data.json to the collection
  const { data } = JSON.parse(
    readFileSync(join(assetsFolder, 'data.json')).toString()
  );
  console.log({ data });
  await collection.insertMany(data);
  console.log('Inserted data');
}

async function main() {
  const client = await getClient();

  await seedTable();

  return client;
}

main()
  .then((client) => client.close())
  .catch(console.error);
