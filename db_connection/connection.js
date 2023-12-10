import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

mongoose.set('strictQuery', false);

const URI = process.env.MONGODB_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const connection = mongoose.connect(URI, options);


export default connection;