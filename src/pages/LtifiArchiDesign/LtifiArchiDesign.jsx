import React from "react";
import Page from "../Page";
import "./LtifiArchiDesign.scss";

const LtifiArchiDesign = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Hello , I'm Saoussen !",
          quote: "Founder and president of LtifiArchi-Design",
          content: [
            "At LtifiArchi-Design , we believe architecture is more than just form—it’s an experience. Our studio exists to bridge the gap between design and technology, helping architects bring their visions to life through stunning visuals and interactive digital experiences. Whether it’s minimalist conceptual renderings, immersive real-time environments, or parametric design solutions, we craft every project with precision, emotion, and a deep respect for spatial storytelling.",
          ],
        }}
        imageSrc={"LtifiArchi-Design/images/macscreen.webp"}
      />
    </>
  );
};

export default LtifiArchiDesign;


