// RightSide.jsx
import { Grid } from "@mui/material";
import ExpCard2 from "./ExpCard2";
import ExperienceCard from "./ExperienceCard";
import About from "./About.jsx";
import Projects from "./Projects";
import FooterInfo from "./FooterInfo";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSection } from "../activeSlice";

export default function RightSide() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 40;
      const windowHeight = window.innerHeight;

      const aboutOffset = document.getElementById("about").offsetTop;
      const experienceOffset = document.getElementById("experience").offsetTop;
      const projectsOffset = document.getElementById("projects").offsetTop;

      if (scrollPosition >= aboutOffset && scrollPosition < experienceOffset) {
        dispatch(setActiveSection("about"));
      } else if (
        scrollPosition >= experienceOffset &&
        scrollPosition < projectsOffset
      ) {
        dispatch(setActiveSection("experience"));
      } else if (scrollPosition >= projectsOffset - windowHeight) {
        dispatch(setActiveSection("projects"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid container>
      <section id="about">
        <About />
      </section>
      <section id="experience" style={{ paddingTop: "150px" }}>
        <ExperienceCard />
        <ExpCard2 />
      </section>

      <section id="projects" style={{ paddingTop: "150px" }}>
        <Projects />
      </section>

      <FooterInfo />
    </Grid>
  );
}
