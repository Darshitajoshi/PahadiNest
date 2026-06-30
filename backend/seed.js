const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Homestay = require("./models/Homestay");
const homestays = require("./data/homestays");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Delete old data
    await Homestay.deleteMany();

    // Remove old id field before inserting
    const cleanedData = homestays.map(({ id, ...rest }) => rest);

    await Homestay.insertMany(cleanedData);

    console.log("✅ Homestays Imported Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();