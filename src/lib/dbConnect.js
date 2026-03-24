const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const db_name = process.env.DBNAME;
export const collections = {
  PRODUCTS: "products",
  USERS: "users",
  CART: "cart",
  ORDER: "order",
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cname) => {
  return client.db(db_name).collection(cname);
};
