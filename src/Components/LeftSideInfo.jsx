import React from "react";
import { Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LeftSideInfo() {
  return (
    <Grid item>
      <Typography
        style={{
          fontWeight: "700",
          fontSize: "45px",
          paddingTop: "20%",
          paddingBottom: "15px",
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
  );
}
