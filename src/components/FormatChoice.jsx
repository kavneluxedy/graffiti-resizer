import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import SVGComponent1 from "../assets/img/svg/SVGComponent1";
import SVGComponent2 from "../assets/img/svg/SVGComponent2";
import ThemeContext from "./Provider/ThemeContext";
import FormatChoiceContext from "./Provider/FormatChoiceContext";

const FormatChoice = () => {
  const {theme, updateTheme} = useContext(ThemeContext);
  const {chosenFormat, updateChosenFormat} = useContext(FormatChoiceContext);

  const handleChosenFormat = (e, choice) => {
    e.preventDefault();
    updateChosenFormat(choice);
    console.log(choice, chosenFormat);
  }

  return (
    <div className="container">

      <div className="page-title">
        <h3>Choisissez le format d'image que vous souhaitez obtenir </h3>
      </div>
      
        {/* <button
          className={resetClicked || 'visible'}
          onClick={handleResetClick}
          >
          Reset
        </button> */}

      {/* <div className="choice-button">
        <button className="button">Landscape</button>
        <button className="button">Portrait</button>
        <button className="button">Square</button>
      </div> */}

      <div className="choice">
        <button className="button">Landscape</button>
        <SVGComponent1
          // className={largeClicked || "visible"}
          width="220px"
          height="220px"
          // onClick={(e) => handleLargeClick(e, 'lanscape')}
        />
      </div>


      <div className="choice">
        <button className="button">Portrait</button>
        <SVGComponent2
          // className={tallClicked || "visible"}
          width="220px"
          height="220px"
          // onClick={(e) => handleTallClick(e, 'portrait')}
          />  
      </div>

      <div className="choice">
        <button className="button">Square</button>
        <SVGComponent1
          // className={squareClicked || "visible"}
          width="220px"
          height="220px"
          // onClick={(e) => handleSquareClick(e, 'square')}
          />
      </div>

    </div>
  );
};

export default FormatChoice;
