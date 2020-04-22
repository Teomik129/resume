import "sanitize.css";
import "sanitize.css/typography.css";
import "sanitize.css/forms.css";

import React from "react";

import { Font, PDFViewer } from "@react-pdf/renderer";
import useWindowSize from "@rooks/use-window-size";

import LatoBold from "./fonts/Lato/Lato-Bold.ttf";
import Lato from "./fonts/Lato/Lato-Regular.ttf";
import OpenSansLight from "./fonts/Open_Sans/OpenSans-Light.ttf";
import OpenSans from "./fonts/Open_Sans/OpenSans-Regular.ttf";
import resume from "./resume.yml";
import { ResumePDF } from "./ResumePDF";

[
  ["Open Sans", OpenSans],
  ["Open Sans Light", OpenSansLight],
  ["Lato", Lato],
  ["Lato Bold", LatoBold],
].forEach(([family, src]) => Font.register({ family, src }));

const App: React.FC = () => {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <PDFViewer height={innerHeight as number} width={innerWidth as number}>
      <ResumePDF resume={resume} />
    </PDFViewer>
  );
};

export default App;
