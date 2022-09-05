// @ts-check
import { GridFSBucket, MongoClient } from 'mongodb';

/** @type {import('mongodb').MongoClient} */
let client;

export async function getClient() {
  // Use connect method to connect to the server
  if (!client) {
    let url = process.env.NEXT_MONGO_URL;

    if (!url) {
      throw new Error(
        'Mongo URL is not defined, use NEXT_MONGO_URL environment variable'
      );
    }

    console.log('starting getClient...', {
      database: process.env.MONGO_INITDB_DATABASE,
      url: process.env.NEXT_MONGO_URL,
    });

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
  const dbName = client.options.dbName;
  const db = client.db(dbName);

  return db.collection(table);
}

/**
 *
 * @param {string} bucketName name of the bucket to get data from
 */
export async function getBucket(bucketName) {
  const dbName = client.options.dbName;
  const db = client.db(dbName);

  // create a gridfs bucket
  return new GridFSBucket(db, {
    bucketName,
    chunkSizeBytes: 1024,
  });
}
