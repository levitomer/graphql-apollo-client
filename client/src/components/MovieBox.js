import React from 'react';

const MovieBox = ({ movie }) => {
	console.log(movie);
	return (
		<React.Fragment>
			<img className="figure-img" src={movie.image} alt="" />
			<div className="movie">
				<div className="movie-name">{movie.name}</div>
				<div className="movie-type">{movie.type}</div>
			</div>
		</React.Fragment>
	);
};

export default MovieBox;
