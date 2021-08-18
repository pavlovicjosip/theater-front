import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useHeaderStyles } from '../styles/HeaderStyle';

export default function Header({ signedIn, onSignOut }) {
	const classes = useHeaderStyles();

	const onClick = () => {
		if (signedIn && onSignOut) {
			onSignOut();
		}
	};

	return (
		<React.Fragment>
			<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" color="inherit" noWrap component={RouterLink} to="/">
						Theater
					</Typography>
					<Button
						variant="contained"
						color="primary"
						className={classes.link}
						component={RouterLink}
						to={signedIn ? '/' : '/auth/signin'}
						onClick={onClick}
					>
						{signedIn ? 'Logout' : 'Login'}
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
