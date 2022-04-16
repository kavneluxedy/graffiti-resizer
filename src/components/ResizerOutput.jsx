import React from "react";
import FileResizer from "react-image-file-resizer";

const ResizerOutput = (props) => {

  return (
    <div className="container">
        <img className="children" src={props.newImageURI} alt="New Resized Image" />
    </div>
  );
};

export default ResizerOutput;
