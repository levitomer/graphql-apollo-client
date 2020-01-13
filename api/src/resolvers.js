/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
	Query: {},
	// Mutation: {},
	Movie: {
		img(movie) {
			return `https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png`;
		}
	}
	// User: {}
};
