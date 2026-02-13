// Initialization
import app from './app.js';
import mongoose from 'mongoose';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// Routes
app.get('/', (_req, res) => {
    res.send("Splitwise backend.");
});

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
  } finally {
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
}

run().catch(console.dir);

// Starting the server in a port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at PORT: ${process.env.PORT}`);
});