import { Grid } from "@mui/material";
import ExpCard2 from "./ExpCard2";
import ExperienceCard from "./ExperienceCard";
import About from "./About.jsx";
import Projects from "./Projects";
import FooterInfo from "./FooterInfo";

export default function RightSide() {
  return (
    <Grid container xs={12}>
      <About />
      <ExperienceCard />
      <ExpCard2 />
      <Projects />
      <FooterInfo />
    </Grid>
  );
}
