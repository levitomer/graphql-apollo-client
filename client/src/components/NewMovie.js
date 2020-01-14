import React, { useState } from 'react';
import Select from 'react-select';

const options = [
	{ value: 'ACTION', label: 'Action' },
	{ value: 'ADVENTURE', label: 'Adventure' },
	{ value: 'COMEDY', label: 'Comedy' },
	{ value: 'CRIME', label: 'Crime' },
	{ value: 'DRAMA', label: 'Drama' },
	{ value: 'FANTASY', label: 'Fantasy' },
	{ value: 'HISTORICAL', label: 'Historical' },
	{ value: 'HORROR', label: 'Horror' },
	{ value: 'MYSTERY', label: 'Mystery' },
	{ value: 'ROMANCE', label: 'Romance' },
	{ value: 'FICTION', label: 'Fiction' },
	{ value: 'CARTOON', label: 'Cartoon' },
	{ value: 'WESTERN', label: 'Western' }
];

export default function NewMovie({ onSubmit, onCancel }) {
	const [ type, setType ] = useState(options[0]);
	const [ name, setName ] = useState('');

	const activeOption = options.find(o => o.value === type);

	const submit = e => {
		e.preventDefault();
		onSubmit({ name, type });
	};

	const cancel = e => {
		e.preventDefault();
		onCancel();
	};

	return (
		<div className="new-movie page">
			<h1>New Movie</h1>
			<div>
				<form onSubmit={submit}>
					<Select
						value={activeOption}
						defaultValue={options[0]}
						onChange={e => setType(e.value)}
						options={options}
					/>

					<input
						className="input"
						type="text"
						placeholder="movie name"
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
					<a className="error button" onClick={cancel}>
						cancel
					</a>
					<button type="submit" name="submit">
						add movie
					</button>
				</form>
			</div>
		</div>
	);
}
