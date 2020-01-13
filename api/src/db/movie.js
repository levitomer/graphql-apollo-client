const nanoid = require('nanoid');

const createMovieModel = db => {
	return {
		findMany(filter) {
			return db.get('movie').filter(filter).value();
		},

		findOne(filter) {
			return db.get('movie').find(filter).value();
		},

		create(movie) {
			const newMovie = { id: nanoid(), createdAt: Date.now(), ...movie };

			db.get('movie').push(newMovie).write();

			return newMovie;
		}
	};
};

module.exports = createMovieModel;
