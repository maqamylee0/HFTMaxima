import React from "react";
import {
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Customized } from "./Customized";
export default function Card({
  image,
  text,
  title,
  textTitle,
  textSubtitle,
  ...others
}) {
  const classes = useStyles();
  return (
    <MuiCard className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia image={image} title={title} {...others} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            align="center"
            style={{ color: "#fff" }}
          >
            {textTitle}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="center"
            style={{ color: "#97979d" }}
          >
            {textSubtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid className={classes.cardButton}>
          <Customized.Button text={text} />
        </Grid>
      </CardActions>
    </MuiCard>
  );
}