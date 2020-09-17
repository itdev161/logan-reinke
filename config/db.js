import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURL');

const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log("MongoDB connection ready - started server on http://localhost:3000");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDatabase;