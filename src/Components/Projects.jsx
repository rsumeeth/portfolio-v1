import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import oakwood from "../assets/oakwoodinternationalschool.jpg";
import saptagiri from "../assets/saptagiri-hospital.jpg";
import studioniche from "../assets/studioniche.jpg";
import moderntrendystore from "../assets/moderntrendystore.jpg";

const miniTilesStyle = {
  fontSize: "12px",
  color: "rgb(94 234 212)",
  background: "rgba(45,212,191,.1)",
  padding: "5px 10px 5px 10px",
  borderRadius: "10px",
};

const largeTile = {
  "&:hover": {
    background: "rgb(191 190 193 / 6%)",
  },
  padding: "10px",
  borderRadius: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(140px, auto))",
  gap: "10px",
  fontSize: "14px",
  marginBottom: "30px",
};

export default function Projects() {
  return (
    <Grid container style={{ wordBreak: "break-word" }}>
      <Box sx={{ display: { md: "none", lg: "none" } }}>
        <h3
          style={{
            margin: "0px",
            padding: "0px",
            marginBottom: "10px",
          }}
        >
          PROJECTS
        </h3>
      </Box>

      <Box sx={largeTile}>
        <div
          style={{
            color: "#94A3B8",
            marginTop: "0px",
            padding: " 2px",
            fontSize: "12.5px",
          }}
        >
          <img
            src={oakwood}
            alt="oakwood international school"
            width={120}
            style={{
              borderRadius: "5px",
              border: "2px solid white",
              marginTop: "5px",
            }}
          />
        </div>
        <div>
          <h3
            style={{
              margin: "0px",
              padding: "0px",
              marginBottom: "10px",
            }}
          >
            oakwoodinternationalschool.com
          </h3>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Design, develop and maintain the school website.
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Built out the website from scratch for a school in Hyderabad, IN
            using Wordpress and custom theme built on top of React and Tailwind
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Performed On-page and off-page SEO optimization, and link building
            activities to improve the website's visibility on search engines.
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Optimized the site for lead generation and physical visits to the
            location.
          </div>
          <div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                margin: "0px, 10px, 10px, 0px",
                padding: "0px",
              }}
            >
              <li style={miniTilesStyle}>Wordpress</li>
              <li style={miniTilesStyle}>React</li>
              <li style={miniTilesStyle}>Tailwind</li>
              <li style={miniTilesStyle}>MySQL</li>
            </ul>
          </div>
        </div>
      </Box>

      <Box sx={largeTile}>
        <div
          style={{
            color: "#94A3B8",
            marginTop: "0px",
            padding: " 2px",
            fontSize: "12.5px",
          }}
        >
          <img
            src={moderntrendystore}
            alt="oakwood international school"
            width={120}
            style={{
              borderRadius: "5px",
              border: "2px solid white",
              marginTop: "5px",
            }}
          />
        </div>
        <div>
          <div style={{ margin: "0px", padding: "0px", marginBottom: "10px" }}>
            <h3 style={{ margin: "0px" }}>moderntrendystore.com</h3>
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Built out a static website for a local hospital.
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Built and setup the website from scratch with HTML, CSS, Javascript
            and Bootstrap.
          </div>

          <div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                margin: "0px, 10px, 10px, 0px",
                padding: "0px",
              }}
            >
              <li style={miniTilesStyle}>HTML</li>
              <li style={miniTilesStyle}>CSS</li>
              <li style={miniTilesStyle}>Javascript</li>
              <li style={miniTilesStyle}>Bootstrap</li>
            </ul>
          </div>
        </div>
      </Box>
      <Box sx={largeTile}>
        <div
          style={{
            color: "#94A3B8",
            marginTop: "0px",
            padding: " 2px",
            fontSize: "12.5px",
          }}
        >
          <img
            src={saptagiri}
            alt="oakwood international school"
            width={120}
            style={{
              borderRadius: "5px",
              border: "2px solid white",
              marginTop: "5px",
            }}
          />
        </div>
        <div>
          <div style={{ margin: "0px", padding: "0px", marginBottom: "10px" }}>
            <h3 style={{ margin: "0px" }}>saptagirihospital.com</h3>
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Built out a static website for a local hospital.
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Built and setup the website from scratch with HTML, CSS, Javascript
            and Bootstrap.
          </div>

          <div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                margin: "0px, 10px, 10px, 0px",
                padding: "0px",
              }}
            >
              <li style={miniTilesStyle}>HTML</li>
              <li style={miniTilesStyle}>CSS</li>
              <li style={miniTilesStyle}>Javascript</li>
              <li style={miniTilesStyle}>Bootstrap</li>
            </ul>
          </div>
        </div>
      </Box>
      <Box sx={largeTile}>
        <div style={{ color: "#94A3B8" }}>
          <div
            style={{
              color: "#94A3B8",
              marginTop: "0px",
              padding: " 2px",
              fontSize: "12.5px",
            }}
          >
            <img
              src={studioniche}
              alt="oakwood international school"
              width={120}
              style={{
                borderRadius: "5px",
                border: "2px solid white",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ margin: "0px", padding: "0px", marginBottom: "10px" }}>
            <h3 style={{ margin: "0px" }}>studio-niche.in</h3>
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Built out a static website for a local hospital.
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Built and setup the website from scratch with HTML, CSS, Javascript
            and Bootstrap.
          </div>

          <div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                margin: "0px, 10px, 10px, 0px",
                padding: "0px",
              }}
            >
              <li style={miniTilesStyle}>HTML</li>
              <li style={miniTilesStyle}>CSS</li>
              <li style={miniTilesStyle}>Javascript</li>
              <li style={miniTilesStyle}>Bootstrap</li>
            </ul>
          </div>
        </div>
      </Box>
    </Grid>
  );
}
