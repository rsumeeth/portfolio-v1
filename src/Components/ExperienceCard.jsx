import React from "react";
import Box from "@mui/material/Box";

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

export default function ExperienceCard() {
  return (
    <>
      <Box sx={{ display: { md: "none", lg: "none" } }}>
        <h3
          style={{
            margin: "0px",
            padding: "0px",
            marginBottom: "10px",
          }}
        >
          EXPERIENCE
        </h3>
      </Box>
      <Box sx={largeTile}>
        <div style={{ color: "#94A3B8" }}>
          <h4 style={{ marginTop: "0px", padding: " 2px", fontSize: "12.5px" }}>
            2021 FEB - PRESENT
          </h4>
        </div>
        <div>
          <div style={{ margin: "0px", padding: "0px" }}>
            <h3 style={{ margin: "0px" }}>
              Software Engineer · Accenture Solutions Pvt Ltd
            </h3>
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Application Development Associate
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Responsible for creating efficient design development of UI screens
            & SPA to support complex Banking Web Application using React Js,
            Redux Toolkit.
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Created multiple reusable components on top of material UI. Worked
            with Redux Middleware Redux-Thunk for async operations.
          </div>
          <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
            Worked on Jest and react testing library in testing and performed
            Unit testing with 80% minimum code coverage.
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
              <li style={miniTilesStyle}>React</li>
              <li style={miniTilesStyle}>Javascript</li>
              <li style={miniTilesStyle}>Redux Toolkit</li>
              <li style={miniTilesStyle}>Material UI</li>
              <li style={miniTilesStyle}>MySQL</li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
}
