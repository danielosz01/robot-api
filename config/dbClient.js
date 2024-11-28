import { query } from 'express';
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

class dbClient {

    constructor() {
        this.connectBaseDatos();
    }

    async connectBaseDatos() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/greystone?tls=true&retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
        console.log('Connected to the database');
    }

    // Disconnect from the database
    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('Disconnected from the database');
        } catch (error) {
            console.error('Error disconnecting from the database:', error);
        }
    }

}

export default new dbClient();