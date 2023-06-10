import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function portfolio() {
  return (
    <div
      style={{
        fontFamily: "roboto",
        display: "flex",
        justifyContent: "center",
        background: "rgb(15,23,42)",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",

          width: "1080px",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div style={{ width: "100%", height: "100%", alignContent: "center" }}>
          <LeftSide />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <RightSide />
        </div>
      </div>
    </div>
  );
}
