import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";

export default function portfolio() {
  return (
    <div
      style={{
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

          width: "850px",
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
