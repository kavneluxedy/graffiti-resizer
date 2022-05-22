import SvgTitle from "./assets/img/svg/SvgTitle";
import Header from "./components/templates/Header";
import { useEffect, useLayoutEffect } from "react";
import useOriginal from "./hooks/useOriginal";
import useResize from "./hooks/useResize";
import useDownload from "./hooks/useDownload";
import { Link } from "react-router-dom";

const App = () => {
  const { file, setFile, originalImg, originalImgRef } = useOriginal();
  const { setWidth, setHeigth, modifiedImg, fileInput, loading, error } =
    useResize();
  const { downloadHandler } = useDownload();

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

  const LandscapeChoice = () => {
    return (
      <div className="container">
        {originalImg && (
          <div className="choice" value="landscape1920">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="1920" className="choiceButton">
                {/* <img src={originalImg.src} width="50" /> */}
                Paysage | 1920 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="choice">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="1600" className="choiceButton l1600">
                {/* <img src={originalImg.src} width="50" /> */}
                Paysage | 1600 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="1200" className="choiceButton l1200">
                {/* <img src={originalImg.src} width="50" /> */}
                Paysage | 1200 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="800" className="choiceButton l800">
                {/* <img src={originalImg.src} width="50" /> */}
                Paysage | 800 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="400" className="choiceButton l400">
                {/* <img src={originalImg.src} width="50" /> */}
                Paysage | 400 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="80" className="choiceButton l80">
                {/* <img src={originalImg.src} width="50" /> */}
                Paysage Miniature | 80 pixels
              </button>
            </a>
          </div>
        )}
      </div>
    );
  };

  const PortraitChoice = () => {
    return (
      <div className="container">
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="1080" className="choiceButton p1080">
                {/* <img src={originalImg.src} width="50" /> */}
                Portrait | 1080 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="800" className="choiceButton p800">
                {/* <img src={originalImg.src} width="50" /> */}
                Portrait | 800 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="400" className="choiceButton p400">
                {/* <img src={originalImg.src} width="50" /> */}
                Portrait | 400 pixels
              </button>
            </a>
          </div>
        )}
        <br />
        {originalImg && (
          <div className="container">
            <a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
              <button value="80" className="choiceButton p80">
                {/* <img src={originalImg.src} width="50" /> */}
                Portrait Miniature | 80 pixels
              </button>
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Header />

      <div className="container">
        <div className="sub-container">
          <h3>
            Pariatur elit cillum velit esse proident ut aute ut aute proident.
          </h3>
          <p>
            Consequat fugiat aute ipsum labore. Deserunt eiusmod enim et
            deserunt velit veniam do id nostrud. Officia consectetur elit
            nostrud quis ex irure culpa minim nulla ut commodo in. Est magna do
            Lorem minim ipsum anim elit ipsum. Eu officia ullamco amet ipsum
            sunt. Pariatur pariatur reprehenderit sint nostrud excepteur velit
            eu consequat ut.
          </p>
        </div>
        <div className="sub-container">
          <label className="label">
            <input
              type="file"
              className="user-file"
              ref={fileInput}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>
      </div>
      <div className="container">
        <div className="img-container">
          <div className="col">
            {originalImg && (
              <img
                id="modifiedImg"
                src={originalImg.src}
                alt="Modified Img"
                ref={originalImg}
              />
            )}
          </div>
          <div className="col">
            {originalImg && (
              <img
                id="modifiedImg"
                src={originalImg.src}
                alt="Modified Img"
                ref={originalImg}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
