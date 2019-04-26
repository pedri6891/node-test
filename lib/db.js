
let configDatabase = (cb) => {
	let mongoose = require('mongoose');
	let Promise = require('bluebird');
	
	mongoose.Promise = global.Promise;

	let mongoseServerConf = {
		auto_reconnect: true,
		poolSize: 50,
		socketOptions: {keepAlive: 1}
	};
	
	let mongooseDb = mongoose.connection;
	
	mongooseDb.on('connecting', () => {
		console.log('Connecting to MongoDB...');
	});
	
	mongooseDb.on('error', (error) => {
		console.error('Error in MongoDb connection: ' + error);
		global.config.mongoConnection = false;
		mongoose.disconnect();
	});
	
	mongooseDb.on('connected', () => {
		global.config.mongoConnection = true;
		if (cb)
			cb(mongoose);
		
		console.log('MongoDB connected!');
	});
	
	mongooseDb.once('open', () => {
		console.log('MongoDB connection opened!');
	});
	
	mongooseDb.on('reconnected', () => {
		console.log('MongoDB reconnected!');
	});
	
	mongooseDb.on('disconnected', () => {
		console.log('MongoDB disconnected!');
		mongoose.connect(config.mongoUrl, {server: mongoseServerConf});
	});
	
	mongoose.connect(process.env.MONGO_DB_URL || config.mongoUrl, {server: mongoseServerConf});
	
	global.db = {
		mongoose: mongoose,
		
		// Put models here
		Customer: require('../app/models/customerModel')(mongoose),
		Employee: require('../app/models/employeeModel')(mongoose),
		File: require('../app/models/fileModel')(mongoose),
		User: require('../app/models/userModel')(mongoose),

	};
};

module.exports = configDatabase;