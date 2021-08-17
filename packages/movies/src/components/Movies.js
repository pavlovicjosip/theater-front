import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { getGenres, getTopRatedMovies } from '../services/movies.service';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: 'hidden',
		justifyContent: 'center',
		marginTop: 30,
	},
	filterContainer: {
		backgroundColor: 'grey',
	},
	movieCard: {
		color: 'red',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		backgroundColor: 'white',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

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

	const classes = useStyles();

	return (
		<React.Fragment>
			{/* <Container className={classes.filterContainer}>
				<FormControl variant="filled" className={classes.formControl}>
					<InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
					<Select
						labelId="demo-simple-select-filled-label"
						id="demo-simple-select-filled"
						value={filter}
						onChange={handleChange}
					>
						<MenuItem value={10}>Popularity</MenuItem>
						<MenuItem value={20}>Test</MenuItem>
						<MenuItem value={30}>Test2</MenuItem>
					</Select>
				</FormControl>
			</Container> */}

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
