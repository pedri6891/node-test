global.conection = false;

const mongoose = require('mongoose'),
    Bluebird = require('bluebird'),
    Models = require('./Models');

class Db{

    constructor(){

    }

    static Initialize(){

        return new Promise((resolve, reject) =>{
                let mongooseDb = mongoose.connection;
        mongoose.Promise = Bluebird;

        mongooseDb.on('error', (error) => {
            global.conection = false;
        mongoose.disconnect();
        reject(error);
    });

        mongooseDb.on('connected', () => {
            global.db = Models.Load(mongoose);
        console.info('MongoDB: Connected');
        global.conection = true;
        resolve(true);
    });

        mongooseDb.on('reconnected', () => {
            global.db = Models.Load(mongoose);
        resolve(true);
    });

        mongooseDb.on('disconnected', () => {
            console.error('MongoDB: Disconnected');
        mongoose.connect(config.development.mongoUrl);
    });

        mongoose.connect(config.development.mongoUrl);
    });
    }
}

module.exports = Db;
