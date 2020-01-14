/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
	Mutation: {},
	Query: {},
	Movie: {
		type(movie) {
			return movie.type;
		},
		name(movie) {
			return movie.name;
		},
		img(movie) {
			return `https://rickandmortyapi.com/api/character/avatar/${movie.id}.jpeg`;
		}
	}
	// User: {}
};
