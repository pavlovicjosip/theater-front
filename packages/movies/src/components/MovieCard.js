import React from 'react';
import { IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useMovieCardStyles } from '../styles/MovieCardStyle';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function MovieCard(props) {
	const classes = useMovieCardStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				titleTypographyProps={{ variant: 'h6' }}
				className={classes.title}
				title={props.title}
				subheader={props.date}
			/>
			<CardMedia
				className={classes.media}
				image={'https://image.tmdb.org/t/p/w500/' + props.image}
				title={props.title}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.content.slice(0, 70) + '...'}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Overview:</Typography>
					<Typography paragraph>{props.content}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
