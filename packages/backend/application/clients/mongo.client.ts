// @ts-check
import { logger } from '@app/shared';
import type {
  Collection,
  CollectionOptions,
  Document,
  GridFSBucketOptions,
  GridFSBucketReadStreamOptionsWithRevision,
  MongoClientOptions,
} from 'mongodb';
import { GridFSBucket, MongoClient } from 'mongodb';
import { IMAGES_COLLECTION } from '../../domain';

let client: MongoClient;
let collection: Record<string, Collection<Document>> = {};
let bucket: Record<string, GridFSBucket> = {};

const mongoDbUrl = process.env.NEXT_MONGO_URL;

export async function getMongoClient(options?: MongoClientOptions) {
  // Connection URL

  // Use connect method to connect to the server
  if (!client) {
    if (!mongoDbUrl) {
      throw new Error(
        'Mongo URL is not defined, use NEXT_MONGO_URL environment variable'
      );
    }

    logger.info('Creating MongoClient');

    client = new MongoClient(mongoDbUrl, options);
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

  if (!collection[tableName]) {
    logger.info(`Getting collection for ${tableName}`);

    collection[tableName] = client.db().collection(tableName, options);
  }

  return collection[tableName];
}

export async function getBucket(
  bucketName: string,
  options?: GridFSBucketOptions
) {
  if (!client) {
    client = await getMongoClient();
  }

  if (!bucket[bucketName]) {
    logger.info(`Creating GridFSBucket for ${bucketName}`);

    // create a gridfs bucket
    bucket[bucketName] = new GridFSBucket(client.db(), {
      ...options,
      bucketName,
    });
  }

  return bucket[bucketName];
}

export async function getPictureStream(
  pictureName: string,
  options?: GridFSBucketReadStreamOptionsWithRevision
) {
  if (!bucket[IMAGES_COLLECTION]) {
    bucket[IMAGES_COLLECTION] = await getBucket(IMAGES_COLLECTION);
  }

  return bucket[IMAGES_COLLECTION].openDownloadStreamByName(
    pictureName,
    options
  );
}
