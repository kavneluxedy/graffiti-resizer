import React from "react";
import FileResizer from "react-image-file-resizer";
import { useNavigate, useOutletContext } from "react-router-dom";

const Resizer = (props) => {
  const { src: uri, setSrc: setUri } = useOutletContext();
  var file = e.target.files[0];
  console.log(file);

  const Resize = FileResizer.imageFileResizer;

  try {
    Resize(e, 900, 450, "jpeg", 100, 0, "base64");
    console.log("hello");
  } catch (err) {
    console.log(err);
  }

  return <img src={src} />;
};

export default Resizer;
