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
  "React.js (TypeScript)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Material-UI",
  "Bootstrap",
  "Node.js & Express.js",
  "Ruby on Rails",
  "Java (Spring Boot)",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "Jest & React Testing Library",
];

export default function About() {
  return (
    <Grid pt={15}>


      <Typography sx={{ color: "#94A3B8", paddingBottom: "1.5rem" }}>
        Full Stack Developer with 4+ years of experience building scalable,
        maintainable web applications. I specialize in React with TypeScript,
        Node.js, Express, and modern backend architectures with both SQL and
        NoSQL databases.
      </Typography>

      <Typography sx={{ color: "#94A3B8", paddingBottom: "1.5rem" }}>
        I am passionate about designing efficient architectures, writing clean
        code, and delivering business-ready SaaS products. Currently, I work on
        enterprise logistics platforms, driving modern frontend and backend
        improvements that improve performance, maintainability, and user
        experience.
      </Typography>

      <Typography sx={{ color: "#94A3B8", paddingBottom: "2rem" }}>
        I am seeking roles that blend technical depth, strong problem solving,
        and long-term product ownership.
      </Typography>

      <Typography sx={{ color: "#94A3B8", paddingBottom: "1rem" }}>
        Here are a few technologies I have been working with recently:
      </Typography>

      <ul
        style={{
          color: "#94A3B8",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(140px, 220px))",
          gap: "0.5rem 1rem",
          fontSize: "14px",
          listStyle: "none",
          paddingInlineStart: "0px",
          margin: 0,
        }}
      >
        {technologies.map((tech, index) => (
          <li key={index} style={listItemStyle}>
            <ArrowRightIcon sx={arrowIconStyle} fontSize="small" />
            {tech}
          </li>
        ))}
      </ul>
    </Grid>
  );
}
