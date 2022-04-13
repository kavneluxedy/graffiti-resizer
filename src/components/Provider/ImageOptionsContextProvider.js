import React, { useState } from "react";
import FileResizer from "react-image-file-resizer";
import { Outlet } from "react-router-dom";
import { ImageOptionsContext } from "./ImageOptionsContext";

const ImageOptionsContextProvider = () => {
  const [newImageURI, setNewImageURI] = useState(undefined);
  const [newWidth, setNewWidth] = useState(250);

  const imageChangedHandler = (e) => {
    var fileInput = false;

    if (e.target.files[0]) {
      fileInput = true; // ? If an image has been downloaded by user

      if (fileInput) {
        try {
          FileResizer.imageFileResizer(
            e.target.files[0], // * file
            newWidth, // * maxWidth
            e.target.files[0].height, // * maxHeight
            "JPEG", // * compressFormat
            100, // * quality
            0, // * rotation
            (uri) => {
              // * responseUriFunc
              setNewImageURI(uri);
            },
            "base64" // * outputType
          );
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div>
      <ImageOptionsContext.Provider
        value={{
          ...newWidth, // ? spread the value you want to share
        }}
      >
      </ImageOptionsContext.Provider>

      <input
        className="active"
        name="fileSelectInput"
        type="file"
        onChange={(e) => imageChangedHandler(e)}
      />

      <div className="children">
        <img src={newImageURI} alt="Your New Image" />
      </div>
    </div>
  );
};
const ImageOptionsContextConsumer = ImageOptionsContext.Consumer;

export default { ImageOptionsContextConsumer, ImageOptionsContextProvider };
