import React, { useState } from 'react';
import gql from 'graphql-tag';
import MovieBox from '../components/MovieBox';
import NewMovie from '../components/NewMovie';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Loader from '../components/Loader';

const GET_MOVIES = gql`
	query allMovies {
		movies: characters {
			results {
				id
				name
				image
			}
		}
	}
`;

export default function Movies() {
	const [ modal, setModal ] = useState(false);
	const { loading, error, data } = useQuery(GET_MOVIES);
	const onSubmit = input => {
		setModal(false);
	};

	if (loading) {
		return <Loader />;
	}

	if (error) {
		<p>Error</p>;
	}

	if (modal) {
		return (
			<div className="row center-xs">
				<div className="col-xs-8">
					<NewMovie onSubmit={onSubmit} onCancel={() => setModal(false)} />
				</div>
			</div>
		);
	}
	const moviesList = data.movies.results.map(movie => (
		<div className="col" key={movie.id}>
			<div className="box">
				<MovieBox movie={movie} />
			</div>
		</div>
	));
	return (
		<div className="page movies-page">
			<section>
				<div className="row betwee-xs middle-xs">
					<div className="col-xs-10">
						<h1>Movies</h1>
					</div>

					<div className="col-xs-2">
						<button onClick={() => setModal(true)}>new movie</button>
					</div>
				</div>
			</section>
			<div className="movie-list">{moviesList}</div>
		</div>
	);
}
