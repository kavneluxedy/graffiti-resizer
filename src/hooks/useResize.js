import { useEffect, useState } from "react";
import download from "downloadjs";
import FileResizer from "react-image-file-resizer";

const useResize = () => {
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState(null);
  const [heigth, setHeight] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [newData, setNewData] = useState(null);
  const [originalImg, setOriginalImg] = useState(null);
  const [modifiedImg, setModifiedImg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    makeOriginal(file);
    resize(file, width, heigth);
}, [file, width, heigth]);

  function makeOriginal(file) {
    if (file) {
      setLoading(true);
      try {
        FileResizer.imageFileResizer(
          file, // * file
          file.width, // * maxWidth in pixel
          file.heigth, // * maxHeight in pixel
          file.type, // * compressFormat
          100, // * quality
          0, // * rotation
          (uri) => {
            // * responseUriFunction
            if (uri.length != 0) {
              let x = encodeURI(uri);
              let url = decodeURI(x);
              setOriginalImg(url);
              setOriginalData({originalSize: parseInt(file.size / 1024)}); // * Conversion de l'octet en Kilo octet
            }
          },
          "base64" // * outputType
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setError(false);
      }
    } else {
      console.log("Please choose one file");
    }
  }

  function resize(originalImg, width, heigth) {
    setLoading(true);
    try {
      FileResizer.imageFileResizer(
        originalImg, // * file
        width, // * maxWidth in pixel
        heigth, // * maxHeight in pixel
        file.type, // * compressFormat
        100, // * quality
        0, // * rotation
        (uri) => {
          if (uri.length != 0) {
            let x = encodeURI(uri);
            let url = decodeURI(x);
            setModifiedImg(url);
          }
        },
        "base64" // * outputType
      );
      download(modifiedImg, fileName, originalImg.type);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setError(false);
    }
  }

  return {
    setFile,
    setWidth,
    setHeight,
    originalData,
    setOriginalData,
    originalImg,
    modifiedImg,
    loading,
    error,
  };
};

export default useResize;
