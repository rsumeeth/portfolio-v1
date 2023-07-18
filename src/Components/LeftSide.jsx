import { Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import "./Leftside.css";
import { useSelector } from "react-redux";

export default function LeftSide({ aboutRef, experienceRef, projectsRef }) {
  const activeSection = useSelector(
    (state) => state.currentState.activeSection
  );
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid
      sx={{
        wrap: "nowrap",
        margin: {},
        position: "sticky",
        top: 0,
        paddingLeft: { xs: "40px" },
      }}
    >
      <Typography
        pt={15}
        style={{
          fontWeight: "700",
          paddingBottom: "2rem",
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

      <a
        href="#about"
        onClick={() => scrollToSection(aboutRef)}
        className={`link ${activeSection === "about" ? "active" : ""}`}
        style={{
          textDecoration: "none",
          paddingBottom: "5px",
          margin: "0",
          outline: "none",
        }}
      >
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
      </a>

      <a
        href="#experience"
        onClick={() => scrollToSection(experienceRef)}
        className={`link ${activeSection === "experience" ? "active" : ""}`}
        style={{
          textDecoration: "none",
          paddingBottom: "5px",
          margin: "0",
          outline: "none",
        }}
      >
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
      </a>

      <a
        href="#projects"
        onClick={() => scrollToSection(projectsRef)}
        className={`link ${activeSection === "projects" ? "active" : ""}`}
        style={{
          textDecoration: "none",
          paddingBottom: "5px",
          margin: "0",
          outline: "none",
        }}
      >
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
          <h5 style={{ fontWeight: "500", margin: "0" }}>PROJECTS</h5>
        </div>
      </a>

      <div style={{ fontWeight: "500", paddingBottom: "10px" }}>
        <p>sumeeth.regonda@gmail.com</p>
      </div>

      <div style={{ paddingBottom: "30px" }}>
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
