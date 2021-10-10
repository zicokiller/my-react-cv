import React from "react";
import "./App.css";
import User from "./components/User";
import Skills from "./components/Skills";
import Profil from "./components/Profil";
import FormationsExperiences from "./components/FormationsExperiences";
import DarkMode from "./components/DarkMode";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import * as html2Image from "html-to-image";

function App() {
  const handleGenerateCv = async () => {
    const data = document.getElementsByTagName("body");
    for (let i = 0; i < data.length; i++) {
      let png = await html2Image.toPng(data[i]);
      png = png.split("data:image/png;base64,")[1];
      const a = document.createElement("a");
      a.href = "data:image/png;base64," + png;
      a.download = "cv_richet.png";
      a.click();
    }
  };

  return (
    <div className="App">
      <div className="grid-container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
            <button onClick={handleGenerateCv}>
              <PictureAsPdfIcon />
            </button>
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
