import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	paper: {
		background: "rgba(255,255,255,0.1)",
		padding: "1rem"
	}
})

const About = () => {
	const classes = useStyles()
	return (
		<Grid item xs={6} sm={6} md={6}>
			<Box justifyContent="center" flexDirection="column" display="flex">
				<Paper color="primary" className={classes.paper}>
					<Typography color="primary">
						I'm Alex, a junior software engineer.
					</Typography>
					<br/>
					<Typography color="primary">
						My path on the developer road started in the early days of my fine-art cursus.
						Back then, I was playing with Processing and Arduino. I've been eager to learn software engineering, which is why I chose to dive into this (hello) world.
					</Typography>
					<br/>
					<Typography color="primary">
						The term "software craftmanship" inspires me. As I have a fine-arts background, I measure the importance of detail and consistency. I like to make sure my projects follow guidelines derived from "clean code", "clean architecture", etc...
					</Typography>
					<br/>
					<Typography color="primary">
						Cheers !
					</Typography>
				</Paper>
			</Box>
		</Grid>
	);
};

export default About;
