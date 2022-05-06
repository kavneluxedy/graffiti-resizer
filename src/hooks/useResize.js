import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FileResizer from "react-image-file-resizer";

const useResize = () => {
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState(null);
  const [heigth, setHeight] = useState(null);
  const [modifiedImg, setModifiedImg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    resize(file, width, heigth);
  }, [file, width, heigth]);

  function resize(file, width, heigth) {
    setLoading(true);
    try {
      FileResizer.imageFileResizer(
        file, // * file
        width, // * maxWidth in pixel
        heigth, // * maxHeight in pixel
        "JPEG", // * compressFormat
        100, // * quality
        0, // * rotation
        (uri) => {
          if (uri.length != 0) {
            let x = encodeURI(uri);
            let url = decodeURI(x);
            setModifiedImg(url);
            localStorage.setItem("src", url); // * responseUriFunc
          }
        },
        "base64" // * outputType
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { setFile, setWidth, setHeight, modifiedImg, loading, error };
};

export default useResize;
