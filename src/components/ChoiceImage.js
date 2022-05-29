import download from "downloadjs";
import React, { useEffect, useLayoutEffect } from "react";
import useOriginal from "../hooks/useOriginal.js";
import useResize from "../hooks/useResize.js";

const ChoiceImage = ({ srcOrigin, srcModif, file }) => {
  const { setFile } = useOriginal();
  const { width, height, setWidth, setHeight, originalImgRef, loading, error } =
    useResize();

  const onClickPaysage = (e, w, h) => {
    setFile(file);
    setWidth(w);
    setHeight(h);
    // download(file, "filename.jpg", "image/jpeg");
  };

  //   const onClickPortrait = (h, w = "auto") => {
  //     setWidth(w);
  //     setHeight(h);
  //     // download(file, "filename.jpg", "image/jpeg");
  //   };

  useEffect(() => {
    setWidth(width);
    setHeight(height);
    setFile(file);
    // let name = file.name.replace(/.jpeg|.jpg|.png|.gif/gi, "");
    // var toAdd = "_";
    // let ext = file.type.replace("image/", ".");
    // let fileName = name + toAdd + ext;
  }, [file, width, height]);

  return (
    <div>
      {srcOrigin && (
        <div className="row">
          <div className="choices">
            <h4>1600 pixels</h4>
            <img
              value="1600"
              src={srcOrigin}
              alt="Origin Img"
              onClick={(e) => {
                onClickPaysage(e, 1600, "auto");
              }}
              ref={originalImgRef}
            />
          </div>
          <div className="choices">
            <h4>1200 pixels</h4>
            <img
              value="1200"
              src={srcOrigin}
              alt="Origin Img"
              onClick={() => {
                onClickPaysage(1200, "auto");
              }}
            />
          </div>
          <div className="choices">
            <h4>800 pixels</h4>
            <img
              value="800"
              src={srcOrigin}
              alt="Origin Img"
              onClick={() => {
                onClickPaysage(800, "auto");
              }}
            />
          </div>
          <div className="choices">
            <h4>400 pixels</h4>
            <img
              value="400"
              src={srcOrigin}
              alt="Origin Img"
              onClick={() => {
                onClickPaysage(400, "auto");
              }}
            />
          </div>
          <div className="choices">
            <h4>80 pixels</h4>
            <img
              value="80"
              src={srcOrigin}
              alt="Origin Img"
              onClick={() => {
                onClickPaysage(80, "auto");
              }}
            />
          </div>
        </div>
      )}

      {srcModif && (
        <div>
          <img src={srcModif} />
        </div>
      )}
    </div>
  );
};

export default ChoiceImage;
