import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";
import { makeStyles } from "@mui/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("md")]: {
      padding: "0px",
      margin: "0px",
    },
    // [theme.breakpoints.down("sm")]: {

    //   padding: "50px, 30px, 30px, 30px",
    // },
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      style={{
        fontFamily: "roboto",
        background: "rgb(15, 23, 42)",
        color: "white",
        minHeight: "100vh",
        gap: "2em",
      }}
      spacing={2}
      className={classes.container}
    >
      <Grid item xs={12} sm={6} md={4}>
        <LeftSide />
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <RightSide />
      </Grid>
    </Grid>
  );
}
