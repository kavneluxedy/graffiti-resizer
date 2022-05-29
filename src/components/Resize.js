import React from "react";
import ChoiceImage from "./ChoiceImage.js";

const Resize = (props) => {
  return (
    <div>
      {props.originalImg && (
        <div className="sub-container">
          <div className="row">
            <h3>Choisissez la taille d'image que vous souhaitez obtenir</h3>
          </div>
          <div className="col-33">
            <ChoiceImage srcOrigin={props.originalImg.src} file={props.file} />
          </div>

          <div className="col">
            <br />
            Original Image Size (MB): <b>{props.originalImg.originalSizeMB}</b>
            <br />
            Original Image Size (KB): <b>{props.originalImg.originalSizeKB}</b>
          </div>

          {/* HIDDEN ORIGINAL IMG */}
          <img
            src={props.originalImg.src}
            style={{ display: "none", width: "100%" }}
          />
          {/* HIDDEN */}
        </div>
      )}

      {props.modifiedImg && (
        <div className="col">
          <ChoiceImage srcModif={props.modifiedImg.src} file={props.file} />
          <br />
          New Image Size (MB): <b>{props.modifiedImg.modifiedSizeMB}</b>
          <br />
          New Image Size (KB): <b>{props.originalImg.modifiedSizeKB}</b>
        </div>
      )}
    </div>
  );
};
export default Resize;
