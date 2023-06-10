import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LeftSide() {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        margin: "0px",
        padding: "0px",
      }}
    >
      <div>
        <div
          style={{
            fontWeight: "700",
            fontSize: "45px",
            paddingTop: "20%",
            paddingBottom: "15px",
          }}
        >
          Sumeeth Regonda
        </div>
        <div style={{ fontWeight: "500", paddingBottom: "10px" }}>
          Software Engineer at Accenture
        </div>

        <div style={{ color: "#94A3B8", paddingBottom: "15%" }}>
          I build accessible, inclusive products and digital experiences for the
          web.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#94A3B8",
            paddingBottom: "5px",
            margin: "0px",
          }}
        >
          <KeyboardDoubleArrowRightIcon />
          <h5 style={{ fontWeight: "500", margin: "0px" }}>ABOUT</h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#94A3B8",
            paddingBottom: "5px",
            margin: "0px",
          }}
        >
          <KeyboardDoubleArrowRightIcon />
          <h5 style={{ fontWeight: "500", margin: "0px" }}>EXPERIENCE</h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#94A3B8",
          }}
        >
          <KeyboardDoubleArrowRightIcon />
          <h5 style={{ fontWeight: "500", margin: "0px" }}>PROJECTS</h5>
        </div>

        <div style={{ fontWeight: "500", paddingBottom: "10px" }}>
          <p>sumeeth.regonda@gmail.com</p>
        </div>
      </div>
      <div
        style={{
          paddingBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            maxWidth: "250px",
          }}
        >
          <GitHubIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}
