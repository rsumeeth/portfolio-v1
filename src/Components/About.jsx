import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Grid, Typography } from "@mui/material";

const listItemStyle = {
  display: "flex",
  alignItems: "center",
};

const arrowIconStyle = {
  marginRight: "5px",
};

const technologies = [
  "JavaScript (ES6+)",
  "React",
  "Express",
  "Node.js",
  "MySQL",
  "TypeScript",
  "API Development",
  "GIT",
];

export default function About() {
  return (
    <Grid pt={15}>
      <Typography sx={{ color: "#94A3B8", paddingBottom: "5%" }}>
        My main focus these days is building products for our clients at{" "}
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://accenture.com"
        >
          Accenture
        </a>
        . Accomplished 3 years of professional experience in the Design,
        Development & Integration of Web Applications.
      </Typography>

      <Typography sx={{ color: "#94A3B8", paddingBottom: "5%" }}>
        I develop exceptional websites, web apps, and tools that provide
        intuitive, pixel-perfect user interfaces with efficient and modern
        backends.
      </Typography>

      <Typography sx={{ color: "#94A3B8", paddingBottom: "5%" }}>
        Currently looking out for a challenging opportunity in an organization
        that offers a stimulating environment, personal development, and career
        growth.
      </Typography>

      <Typography sx={{ color: "#94A3B8" }}>
        Here are a few technologies I've been working with recently:
      </Typography>

      <ul
        style={{
          color: "#94A3B8",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
          fontSize: "14px",
          listStyle: "none",
          paddingInlineStart: "0px",
        }}
      >
        {technologies.map((tech, index) => (
          <li key={index} style={listItemStyle}>
            <ArrowRightIcon sx={arrowIconStyle} />
            {tech}
          </li>
        ))}
      </ul>
    </Grid>
  );
}
