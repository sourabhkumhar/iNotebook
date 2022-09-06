const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://vercel-admin-user:sourabh123@cluster0.ma1ciqx.mongodb.net/iNotebook?retryWrites=true&w=majority";

const connectToMongo = async() => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;