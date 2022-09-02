// @ts-check
import { logger } from '@app/shared';
import {
  CollectionOptions,
  GridFSBucket,
  GridFSBucketOptions,
  MongoClient,
  MongoClientOptions,
} from 'mongodb';
import { IMAGES_COLLECTION } from '../domain';

let client: MongoClient;

export async function getMongoClient(
  url = process.env.NEXT_MONGO_URL,
  options?: MongoClientOptions
) {
  // Connection URL
  logger.info('Creating MongoClient', url);

  // Use connect method to connect to the server
  if (!client) {
    if (!url) {
      throw new Error(
        'Mongo URL is not defined, use NEXT_MONGO_URL environment variable'
      );
    }

    client = new MongoClient(url, options);
    await client.connect();
    logger.info('Connected successfully to server');
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

  const dbName = client.options.dbName;

  return client.db(dbName).collection(tableName, options);
}

export async function getBucket(
  bucketName: string,
  options?: GridFSBucketOptions
) {
  logger.info('Creating GridFSBucket', bucketName);

  if (!client) {
    client = await getMongoClient();
  }

  const dbName = client.options.dbName;

  logger.info('Selecting db', dbName);

  // create a gridfs bucket
  return new GridFSBucket(client.db(dbName), {
    ...options,
    bucketName,
  });
}

export async function getPictureStream(pictureName: string) {
  const bucket = await getBucket(IMAGES_COLLECTION);

  return bucket.openDownloadStreamByName(pictureName);
}
