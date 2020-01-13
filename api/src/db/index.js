const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('api/src/db/db.json');
const db = low(adapter);

const createMovieModel = require('./movie');
const createUserModel = require('./user');

module.exports = {
	models: {
		Movie: createMovieModel(db),
		User: createUserModel(db)
	},
	db
};
