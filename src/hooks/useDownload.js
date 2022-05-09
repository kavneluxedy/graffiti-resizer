import download from "downloadjs";
import { useEffect } from "react";
import useResize from "../hooks/useResize";
import useOriginal from "./useOriginal";

const Download = () => {
  localStorage.clear();

  const { modifiedImg } = useResize();
  const { file } = useOriginal();

  useEffect(() => {
    console.log(file);
    console.log(modifiedImg);
    downloadHandler(modifiedImg, 'filename', 'image/jpg');
  }, [modifiedImg, file]);

  const downloadHandler = (file, filename = "filename", type) => {
    new Promise(
      () => {
        if (file) {
          download(file, filename, type);
        }
      },
      () => {
        console.error("Promise Rejected");
      }
    );
  };
  return { downloadHandler };
};

export default Download;