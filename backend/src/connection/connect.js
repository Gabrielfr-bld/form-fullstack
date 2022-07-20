const mongoose = require('mongoose');

const MONGO_DATABASE_URL = 'mongodb://localhost:27017/';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DATABASE_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;