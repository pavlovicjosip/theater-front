import { makeStyles } from '@material-ui/core/styles';

export const useMovieStyles = makeStyles((theme) => ({
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
