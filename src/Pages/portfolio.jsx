import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid } from "@mui/material";
import { useRef } from "react";

export default function Portfolio() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <Grid
      container
      justifyContent="center"
      style={{
        fontFamily: "roboto",
        background: "rgb(15, 23, 42)",
        color: "white",
        minHeight: "100vh",
        gap: "2em",
      }}
      spacing={2}
    >
      <Grid
        item
        md={5}
        lg={3}
        xl={3}
        sx={{
          padding: { xs: "20px" },
          paddingTop: "0px",
        }}
      >
        <LeftSide
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
        />
      </Grid>
      <Grid
        item
        md={5}
        lg={3}
        xl={4}
        sx={{ margin: { xs: "20px", md: "10px" } }}
      >
        <RightSide />
      </Grid>
    </Grid>
  );
}
