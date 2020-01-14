const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
	type Movie {
		name: String!
		type: String!
		img: String
	}

	enum Genre {
		ACTION
		ADVENTURE
		COMEDY
		CRIME
		DRAMA
		FANTASY
		HISTORICAL
		HORROR
		MYSTERY
		ROMANCE
		FICTION
		CARTOON
		WESTERN
	}

	input MovieInput {
	}

	type NewMovie {
		name: String!
		type: Genre!
	}

	type Query {
		movies: [Movie]!
	}

	type Mutation {
		createMovie(newMovie: MovieInput!): NewMovie!
	}
`;

module.exports = typeDefs;
