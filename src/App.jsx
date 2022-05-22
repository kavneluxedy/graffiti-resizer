import SvgTitle from "./assets/img/svg/SvgTitle";
import Header from "./components/templates/Header";
import { useEffect, useLayoutEffect, useState } from "react";
import useOriginal from "./hooks/useOriginal";
import useResize from "./hooks/useResize";
import useDownload from "./hooks/useDownload";
import { Link, useNavigate } from "react-router-dom";
import Resize from "./components/Resize";

const App = () => {
  const { file, setFile, originalImg, originalImgRef } = useOriginal();
  const { setWidth, setHeigth, modifiedImg, fileInput, loading, error } =
    useResize();
  const { downloadHandler } = useDownload();
  const [resizeFlag, setResizeFlag] = useState(false);

  const onClick = (width = "auto", height = "auto") => {
    setWidth(width);
    setHeigth(height);
  };

  const detectRatio = (width, height) => {
    if (width > height) {
      console.log(width, height, "paysage");
    } else if (height > width) {
      console.log("Portrait");
    }
  };

  useEffect(() => {
    if (file) {
      let name = file.name.replace(/.jpeg|.jpg|.png|.gif/gi, "");
      var toAdd = "_";
      let ext = file.type.replace("image/", ".");
      let fileName = name + toAdd + ext;
      downloadHandler(modifiedImg, fileName, file.type);
    }
  }, [modifiedImg]);

  useLayoutEffect(() => {
    if (originalImgRef.current) {
      detectRatio(originalImgRef.current.width, originalImgRef.current.height);
    }
  }, [file]);

  const nav = useNavigate();

  const fileChangedHandler = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setResizeFlag(true);
      console.log(e.target.files[0]);
    }
    // nav("/resize");
  };

  return (
    <>
      <Header />

      {!resizeFlag && (
        <>
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
                      onChange={(e) => fileChangedHandler(e)}
                      name="user-file"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </>
      )}
      {resizeFlag && (
        <Resize
          file={file}
          originalImg={originalImg}
          onClick={(e) => onClick(e.target.width, e.target.height)}
        />
      )}
    </>
  );
};

export default App;
