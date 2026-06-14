const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongoURI');
const db = require('dotenv').config();

const connectDB = async () => {
  console.log(`Hello ${process.env.MongoURI}`);
  try {
    // Removed the unsupported options object completely
    await mongoose.connect(process.env.MongoURI);
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    // exit process with a failure code
    process.exit(1);
  }
};

module.exports = connectDB;

//OLD Deprecated CODE
// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async() => {
//   try{
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });
//     console.log('MongoDB connected successfully!');
//   } catch(err) {
//     console.log(err.message);
//     // exit process with a failure code
//     process.exit(1);
//   }
// }

// module.exports = connectDB;