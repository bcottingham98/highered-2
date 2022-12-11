import type { MongoClient } from 'mongodb';

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var mongoClientPromise: Promise<MongoClient>;
  // eslint-disable-next-line vars-on-top, no-var
  var mongoose: {
    conn: null;
    promise: any | null;
  };
}

export {};
