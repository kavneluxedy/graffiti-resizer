import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { StrictMode } from "react";
import useResize from "./hooks/useResize";
import Header from "./components/templates/Header";

const App = () => {
  const {
    setFile,
    setWidth,
    setHeight,
    originalData,
    setOriginalData,
    newData,
    setNewData,
    originalImg,
    modifiedImg,
    loading,
    error,
  } = useResize();

  const onClick = (width, height = "auto") => {
    setWidth(width);
    setHeight(height);
  };

  return (
    <StrictMode>
      <div className="container">
        <Header />
        <div className="choice">
          <a
            // ! ATTRIBUTES[0] MUST BE A STRING (Value in pixel)
            value="1920"
            className="button"
            href="#"
            onClick={(e) =>
              onClick(parseFloat(e.target.attributes[0].textContent))
            }
          >
            Paysage | 1920 pixels
          </a>

          <br />

          <a
            value="1600"
            className="button"
            href="#"
            onClick={(e) =>
              onClick(parseFloat(e.target.attributes[0].textContent))
            }
          >
            Paysage | 1600 pixels
          </a>
          <br />

          <a
            value="1200"
            className="button"
            href="#"
            onClick={(e) =>
              onClick(parseFloat(e.target.attributes[0].textContent))
            }
          >
            Paysage | 1200 pixels
          </a>
          <br />

          <a
            value="800"
            className="button"
            href="#"
            onClick={(e) =>
              onClick(parseFloat(e.target.attributes[0].textContent))
            }
          >
            Paysage | 800 pixels
          </a>
          <br />

          <a
            value="400"
            className="button"
            href="#"
            onClick={(e) =>
              onClick(parseFloat(e.target.attributes[0].textContent))
            }
          >
            Paysage | 400 pixels
          </a>
          <br />

          <a
            value="80"
            className="button"
            href="#"
            onClick={(e) =>
              onClick(parseFloat(e.target.attributes[0].textContent))
            }
          >
            Paysage Miniature | 80 pixels
          </a>
        </div>

        <div className="container">
          <input onChange={(e) => setFile(e.target.files[0])} type="file" />
        </div>

        <div className="container">
          {loading && <span className="loadingAnimation">Loading ...</span>}
          {error && <span>Error</span>}

          {originalData && (
            <div className="container">
              Original Image Size : {originalData.originalSize} octets
            </div>
          )}

          {modifiedImg && (
            <img
              id="resizedImg"
              src={modifiedImg}
              onLoad={(e) => setNewData({ newSize: e.target.size })}
            />
          )}

          <br />

          {originalImg && (
            <img
              className="originalImg"
              // style={{ display: "none" }}
              id="originalImg"
              src={originalImg}
              onLoad={(e) => setOriginalData({ originalSize: e.target.size })}
            />
          )}
        </div>
      </div>
    </StrictMode>
  );
};

export default App;
