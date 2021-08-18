import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../services/movies.service';
import MovieCard from './MovieCard';
import { useMovieStyles } from '../styles/MoviesStyle';

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [filter, setFilter] = React.useState('');

	const handleChange = (event) => {
		setFilter(event.target.value);
	};

	useEffect(() => {
		let mounted = true;
		getTopRatedMovies().then((movies) => {
			if (mounted) {
				console.log(movies);
				setMovies(movies.results);
			}
		});
		return () => (mounted = false);
	}, []);

	const classes = useMovieStyles();

	return (
		<React.Fragment>
			<Grid className={classes.root} container spacing={3} direction="row">
				{movies.map((movie) => (
					<Box m={2} key={movie.id}>
						<MovieCard
							image={movie.backdrop_path}
							title={movie.title}
							date={movie.release_date}
							content={movie.overview}
							className={classes.movieCard}
						></MovieCard>
					</Box>
				))}
			</Grid>
		</React.Fragment>
	);
}
