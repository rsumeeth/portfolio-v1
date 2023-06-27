import { Grid, Typography } from "@mui/material";
import LeftSideInfo from "./LeftSideInfo";
import { makeStyles } from "@mui/styles";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    paddingTop: "5rem",
    [theme.breakpoints.down("md")]: {
      position: "static",
    },
    [theme.breakpoints.down("sm")]: {
      position: "static",
      padding: "50px, 30px, 30px, 30px",
    },
  },
}));

export default function LeftSide() {
  const classes = useStyles();

  return (
    <Grid container wrap="nowrap" spacing={2} className={classes.container}>
      <Grid item xs={12} md={4}>
        <Typography
          style={{
            fontWeight: "700",

            paddingBottom: "15px",
            fontSize: "2.7rem",
          }}
        >
          Sumeeth Regonda
        </Typography>

        <Typography style={{ fontWeight: "500", paddingBottom: "10px" }}>
          Software Engineer at Accenture
        </Typography>

        <Typography
          style={{
            color: "#94A3B8",
            paddingBottom: "15%",
          }}
        >
          I build accessible, inclusive products and digital experiences for the
          web.
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#94A3B8",
            paddingBottom: "5px",
            margin: "0",
          }}
        >
          <KeyboardDoubleArrowRightIcon />
          <h5 style={{ fontWeight: "500", margin: "0" }}>ABOUT</h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#94A3B8",
            paddingBottom: "5px",
            margin: "0",
          }}
        >
          <KeyboardDoubleArrowRightIcon />
          <h5 style={{ fontWeight: "500", margin: "0" }}>EXPERIENCE</h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#94A3B8",
          }}
        >
          <KeyboardDoubleArrowRightIcon />
          <h5 style={{ fontWeight: "500", margin: "0" }}>PROJECTS</h5>
        </div>
        <div style={{ fontWeight: "500", paddingBottom: "10px" }}>
          <p>sumeeth.regonda@gmail.com</p>
        </div>
        <div
          style={{
            paddingBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: "250px",
              gap: "20px",
            }}
          >
            <GitHubIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
