// @ts-check
import { GridFSBucket, MongoClient } from 'mongodb';

// load environment variables from .env file
import { config } from 'dotenv';
import { resolve } from 'path';
import { __dirname } from './constants.mjs';

config({
  path: resolve(__dirname, '..', '.env'),
});

// Database Name
const dbName = process.env.MONGO_INITDB_DATABASE;

/** @type {import('mongodb').MongoClient} */
let client;

export async function getClient() {
  // Connection URL

  // Use connect method to connect to the server
  if (!client) {
    const url = process.env.MONGO_URL;

    if (!url) {
      throw new Error(
        'Mongo URL is not defined, use MONGO_URL environment variable'
      );
    }

    client = new MongoClient(url);
    await client.connect();
    console.log('Connected successfully to server');
  }

  return client;
}

/**
 *
 * @param {string} table name of the table to get data from
 */
export async function getCollection(table) {
  const db = client.db(dbName);

  return db.collection(table);
}

/**
 *
 * @param {string} bucketName name of the bucket to get data from
 */
export async function getBucket(bucketName) {
  const db = client.db(dbName);

  // create a gridfs bucket
  return new GridFSBucket(db, {
    bucketName,
    chunkSizeBytes: 1024,
  });
}
