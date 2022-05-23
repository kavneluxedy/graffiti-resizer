import Header from "./components/templates/Header";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOriginal from "./hooks/useOriginal";
import useResize from "./hooks/useResize";
import useDownload from "./hooks/useDownload";
import Resize from "./components/Resize";

const App = () => {
  const { file, setFile, originalImg, originalImgRef, loading } = useOriginal();
  const { modifiedImg, fileInput } = useResize();
  const { downloadHandler } = useDownload();
  const [resizeFlag, setResizeFlag] = useState(false);

  // const detectRatio = (width, height) => {
  //   if (width > height) {
  //     console.log(width, height, "Paysage");
  //   } else if (height > width) {
  //     console.log("Portrait");
  //   }
  // };

  const fileChangedHandler = (e) => {
    if (e.target.files[0]) {
      localStorage.setItem("fileInput", e.target.files[0]);
      setTimeout(setFile(e.target.files[0]), 500);
      setResizeFlag(true);
    }
  };

  return (
    <>
      <Header />

      {loading && (
        <div className="loading">
          <span>
            {loading}
            {/* LOADING ... */}
          </span>
        </div>
      )}

      {!resizeFlag && (
        <div className="container">
          <div className="container">
            <div className="sub-container">
              <h3>Bienvenue sur GraffitiResize !</h3>
              <p>
                Cette application de bureau vous permet de redimensionner
                simplement toutes vos photos pour vos projets web !
              </p>
              <button className="help-button">
                <Link to="/help">En savoir plus sur cette app</Link>
              </button>
            </div>

            <div className="sub-container">
              <label htmlFor="user-file">
                <div className="user-file">
                  <input
                    type="file"
                    ref={fileInput}
                    name="user-file"
                    onChange={(e) => fileChangedHandler(e)}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      {resizeFlag && originalImg && (
        <div className="container">
          <Resize
            file={file}
            originalImg={originalImg}
            modifiedImg={modifiedImg}
            fileInput={fileInput}
          />
        </div>
      )}
    </>
  );
};

export default App;
