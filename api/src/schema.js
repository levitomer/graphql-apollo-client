const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
	type Movie {
		name: String
		img: String
	}

	type Query {
		movies: [Movie]
	}
`;

module.exports = typeDefs;
