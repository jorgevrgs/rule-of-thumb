// @ts-check
import {
  CollectionOptions,
  GridFSBucket,
  GridFSBucketOptions,
  MongoClient,
  MongoClientOptions,
} from 'mongodb';

let client: MongoClient;

export async function getMongoClient(
  url = process.env.NEXT_MONGO_URL,
  options?: MongoClientOptions
) {
  // Connection URL

  // Use connect method to connect to the server
  if (!client) {
    if (!url) {
      throw new Error(
        'Mongo URL is not defined, use MONGO_URL environment variable'
      );
    }

    client = new MongoClient(url, options);
    await client.connect();
    console.log('Connected successfully to server');
  }

  return client;
}

export async function getCollection(
  tableName: string,
  options?: CollectionOptions
) {
  if (!client) {
    client = await getMongoClient();
  }

  const dbName = client.db.name;

  return client.db(dbName).collection(tableName, options);
}

export async function getBucket(
  bucketName: string,
  options?: GridFSBucketOptions
) {
  if (!client) {
    client = await getMongoClient();
  }

  const dbName = client.db.name;

  // create a gridfs bucket
  return new GridFSBucket(client.db(dbName), {
    ...options,
    bucketName,
  });
}
