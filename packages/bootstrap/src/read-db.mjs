// @ts-check
import { getClient, getCollection } from './client.mjs';

async function main() {
  const client = await getClient();

  const collection = await getCollection('celebrities');
  const data = await collection.find({}).toArray();
  console.log(JSON.stringify({ data }, null, 2));

  return client;
}

main()
  .then((client) => client.close())
  .catch(console.error);
