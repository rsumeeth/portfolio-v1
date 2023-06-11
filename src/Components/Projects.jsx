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

export default function Projects() {
  return (
    <Box sx={largeTile}>
      <div style={{ color: "#94A3B8" }}>
        <h4 style={{ marginTop: "0px", padding: " 2px", fontSize: "12.5px" }}>
          2020 JUN - 2021 FEB
        </h4>
      </div>
      <div>
        <div style={{ margin: "0px", padding: "0px" }}>
          <h3 style={{ margin: "0px" }}>oakwoodinternationalschool.com</h3>
        </div>
        <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
          Building a school website
        </div>
        <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
          Built and setup the store from scratch with React Js, Tailwind for
          Frontend using Shopify Hosting and migrated to WordPress.
        </div>
        <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
          Achieved page load time speed of less than 1.5 seconds on Shopify
        </div>
        <div style={{ color: "#94A3B8", marginBottom: "10px" }}>
          Conversion rate was increased from 4% to 10.5%. Grew the audience
          following from 0 to 200k followers on Pinterest in less than an year
          by effective branding and organic marketing
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
  );
}
