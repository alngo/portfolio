import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
	footer: {
		top: 'auto',
		bottom: 0,
	},
	grow: {
		flexGrow: 1,
	},
})

const Footer = () => {
	const classes = useStyles()

	return (
		<AppBar position="fixed" color="transparent" className={classes.footer}>
			<Toolbar>
				<div className={classes.grow} />
				<IconButton
					color="primary"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/alex-ngo-b7853a164/"
				>
					<LinkedInIcon />
				</IconButton>
				<IconButton
					color="primary"
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/alngo"
				>
					<GitHubIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Footer;
