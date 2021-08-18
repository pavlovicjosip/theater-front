import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useMovieCardStyles = makeStyles((theme) => ({
	root: {
		width: 250,
		minHeight: 450,
		display: 'grid',
	},
	title: {
		fontSize: '.5rem',
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
		backgroundSize: 'contain', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));
