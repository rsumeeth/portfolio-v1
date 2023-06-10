import ExpCard2 from "./ExpCard2";
import ExperienceCard from "./ExperienceCard";

export default function RightSide() {
  return (
    <>
      <div style={{ paddingBottom: "110px" }}>
        <div
          style={{ color: "#94A3B8", paddingTop: "20%", paddingBottom: "5%" }}
        >
          My main focus these days is building products for our clients at{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="accenture.com"
          >
            Accenture
          </a>
          . Accomplished 2+ years of professional experience in the Design,
          Development & Integration of Web Applications.
        </div>
        <div style={{ color: "#94A3B8", paddingBottom: "5%" }}>
          I develop exceptional websites, web apps and tools that provide
          intuitive, pixel-perfect user interfaces with efficient and modern
          backends.
        </div>
        <div style={{ color: "#94A3B8", paddingBottom: "5%" }}>
          Currently looking out for a challenging opportunity in an organization
          that offers a stimulating environment, personal development, and
          career growth.
        </div>
        <div
          style={{
            color: "#94A3B8",
          }}
        >
          Here are a few technologies I've been working with recently:
        </div>
        <ul
          style={{
            color: "#94A3B8",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
            fontSize: "14px",
          }}
        >
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Express</li>
          <li>Node Js</li>
          <li>My SQL</li>
          <li>Typescript</li>
          <li>API Development</li>
          <li>GIT</li>
        </ul>
      </div>
      <div>
        <ExperienceCard />
        <ExpCard2 />
      </div>
    </>
  );
}
