const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI
// const URI = "mongodb+srv://bikashchaudhary007:ObWFUGg7Hn22cawE@cluster0.rznewld.mongodb.net/mern_admin?retryWrites=true&w=majority";



// mongoose.connect(URI);
const  connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connecting successful to database");
        
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};


module.exports = connectDB