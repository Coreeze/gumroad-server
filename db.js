const mongoose = require("mongoose");

async function connectToDB() {
  console.log("Conntecting to DB..");
  try {
    const connectionURL = `mongodb+srv://${process.env.MONGOOSE_CREDENTIALS}@${process.env.MONGOOSE_CLUSTER}/gumroad?retryWrites=true&w=majority`;

    await mongoose.connect(connectionURL);

    console.log("Successfully connected to DB");
  } catch (error) {
    console.log("There was an error when connecting to DB");
    console.log(error);
  }
}

module.exports = { connectToDB };
