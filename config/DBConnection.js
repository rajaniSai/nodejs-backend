const mongoose = require("mongoose");


const config = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const connectDB = async () => {
    console.log("in db connection")
    try {

        const connect = await mongoose.connect(process.env.CONNECTION_STRING, config);
        console.log("MongoDB connected... ", connect.connection.host, connect.connection.name);

    } catch (err) {
        console.log("Connection to MongoDB failed.." + err)
    }
}

module.exports = connectDB;