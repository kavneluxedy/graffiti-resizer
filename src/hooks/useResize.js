import download from "downloadjs";
import { useEffect, useState, useRef } from "react";
import FileResizer from "react-image-file-resizer";
import useOriginal from "./useOriginal.js";

const useResize = () => {
  const fileInput = useRef();
  const { file } = useOriginal();
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [modifiedImg, setModifiedImg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log(file, width, height);
    if (file && width && height) {
      resize(file, width, height);
    }
  }, [file, width, height]);

  const resize = (file, width, height) => {
    setLoading(true);
    if (file) {
      try {
        FileResizer.imageFileResizer(
          file, // * file
          width, // * maxWidth in pixel
          height, // * maxHeight in pixel
          file.type, // * compressFormat
          100, // * quality
          0, // * rotation
          (uri) => {
            // * responseUriFunction
            if (localStorage.getItem("src")) {
              localStorage.removeItem("src");
            }
            localStorage.setItem("src", uri);
            setModifiedImg({
              src: uri,
              modifiedSizeMB: parseFloat(
                file.size * Math.pow(1024, -2)
              ).toFixed(2),
              modifiedSizeKB: parseFloat(file.size / 1024).toFixed(2),
            }),
              "base64"; // * outputType
          }
        );

        download(modifiedImg.src, "newFile.jpg", "image/jpg");
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setError(false);
      }
    } else {
      console.log("File Reset");
    }
  };

  return {
    file,
    width,
    setWidth,
    setHeight,
    modifiedImg,
    setModifiedImg,
    loading,
    error,
    fileInput,
  };
};

export default useResize;
