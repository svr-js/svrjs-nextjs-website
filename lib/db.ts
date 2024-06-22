import { MongoClient } from "mongodb";

// Ensure the environment variable is set
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  // Add any SSL/TLS options if needed, for example:
  // ssl: true,
  // tlsAllowInvalidCertificates: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
