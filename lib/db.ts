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

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable to ensure the client is not recreated
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
// In production mode, create a new client for each request
client = new MongoClient(uri, options);
clientPromise = client.connect();
// }

export default clientPromise;
