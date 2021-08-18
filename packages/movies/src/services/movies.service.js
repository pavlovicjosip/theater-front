export function getGenres() {
	return fetch(
		'https://api.themoviedb.org/3/genre/movie/list?api_key=41f5089313405dd26504221f6ab241c6&language=en-US'
	).then((data) => data.json());
}

export function getTopRatedMovies() {
	return fetch(
		'https://api.themoviedb.org/3/movie/top_rated?api_key=41f5089313405dd26504221f6ab241c6&language=en-US&page=1'
	).then((data) => data.json());
}
