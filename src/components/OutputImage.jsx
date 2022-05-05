import React, { useOutletContext } from "react";
import FileResizer from "react-image-file-resizer";

const OutputImage = ({fileInput}, src) => {

  const clickHandler = (e) => {
    try {
      FileResizer.imageFileResizer(
        fileInput,
        1200,
        fileInput.height,
        "JPEG",
        100,
        0,
        (uri) => {
            setSrc(uri);
        },
        "base64"
      );
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="container">
      <div className="choice landscape1200">
        <img
          className="choice landscape1200"
          src={src}
          onClick={(e) => clickHandler(e)}
        />
      </div>
    </div>
  );
};

export default OutputImage;
