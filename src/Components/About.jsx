import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Grid, Typography } from "@mui/material";
let x = { alignItems: "center", display: "flex" };

export default function About() {
  return (
    <Grid pt={15} sx={{ wordBreak: "wordbreak" }}>
      <div style={{ color: "#94A3B8", paddingBottom: "5%" }}>
        My main focus these days is building products for our clients at{" "}
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="accenture.com"
        >
          Accenture
        </a>
        . Accomplished 2+ years of professional experience in the Design,
        Development & Integration of Web Applications.
      </div>
      <div style={{ color: "#94A3B8", paddingBottom: "5%" }}>
        I develop exceptional websites, web apps and tools that provide
        intuitive, pixel-perfect user interfaces with efficient and modern
        backends.
      </div>
      <div style={{ color: "#94A3B8", paddingBottom: "5%" }}>
        Currently looking out for a challenging opportunity in an organization
        that offers a stimulating environment, personal development, and career
        growth.
      </div>
      <div
        style={{
          color: "#94A3B8",
        }}
      >
        Here are a few technologies I've been working with recently:
      </div>
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
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>JavaScript (ES6+)</div>
        </li>
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>React</div>
        </li>
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>Express</div>
        </li>
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>Node Js</div>
        </li>
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>MySQL</div>
        </li>
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>Typescript</div>
        </li>
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>API Development</div>
        </li>
        <li style={x}>
          <div>
            <ArrowRightIcon />
          </div>
          <div>GIT</div>
        </li>
      </ul>
    </Grid>
  );
}
