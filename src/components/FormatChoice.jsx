import React, { useState } from "react";
import { Link } from "react-router-dom";
import SVGComponent1 from "../assets/img/svg/SVGComponent1";
import SVGComponent2 from "../assets/img/svg/SVGComponent2";

const FormatChoice = () => {
  const [largeClicked, setLargeClicked] = useState("true");
  const [tallClicked, setTallClicked] = useState("false");
  const [squareClicked, setSquareClicked] = useState("false");
  const [resetClicked, setResetClicked] = useState(false);

  const [choice1200, setChoice1200] = useState("true");
  const [choice800, setChoice800] = useState("false");
  const [choice400, setChoice400] = useState("false");
  const [choice80, setChoice80] = useState("false");

  const handleLargeClick = (e) => {
    e.preventDefault();
    largeClicked ? setTallClicked("hidden") : setLargeClicked("active");
    tallClicked ? setSquareClicked("hidden") : setTallClicked("active");
  };

  const handleTallClick = (e) => {
    e.preventDefault();
    tallClicked ? setLargeClicked("hidden") : setTallClicked("active");
    tallClicked ? setSquareClicked("hidden") : setTallClicked("active");
  };

  const handleSquareClick = (e) => {
    e.preventDefault();
    squareClicked ? setLargeClicked("hidden") : setSquareClicked("active");
    squareClicked ? setTallClicked("hidden") : setSquareClicked("active");
  };

  const handleResetClick = (e) => {
    e.preventDefault();
    resetClicked ? setLargeClicked("hidden") : setLargeClicked("visible");
    resetClicked ? setTallClicked("hidden") : setTallClicked("visible");
    resetClicked ? setSquareClicked("hidden") : setSquareClicked("visible");
  };

  const handleChoice = (e, size) => {
    e.preventDefault();
    switch (size) {
      case "1200":
        choice1200 ? setChoice1200("active") : setChoice1200("active");
        choice800 ? setChoice800("false") : console.log();
        choice400 ? setChoice400("false") : console.log();
        choice80 ? setChoice80("false") : console.log();
        break;

      case "800":
        choice800 ? setChoice800("active") : setChoice800("active");
        choice1200 ? setChoice1200("false") : console.log();
        choice400 ? setChoice400("false") : console.log();
        choice80 ? setChoice80("false") : console.log();
        console.log("800");
        break;

      case "400":
        choice400 ? setChoice400("active") : setChoice400("active");
        choice1200 ? setChoice1200("false") : console.log();
        choice800 ? setChoice800("false") : console.log();
        choice80 ? setChoice80("false") : console.log();
        console.log("400");
        break;

      case "80":
        choice80 ? setChoice80("active") : setChoice80("active");
        choice1200 ? setChoice1200("false") : console.log();
        choice800 ? setChoice800("false") : console.log();
        choice400 ? setChoice400("false") : console.log();
        console.log("80");
        break;

      default:
        return "Default (switch case)";
    }
  };

  // const DisplaySizeChoices = () => {
  //   return (
  //     <div>
  //       <div className="container">
  //         <Link to="/resizer-options">Options</Link>

  //         <div className="col" onClick={(e) => handleChoice(e, "1200")}>
  //           <Link to="resizer-options">
  //             <SVGComponent1
  //               className={choice1200 || "visible"}
  //               name="1200"
  //               width="250px"
  //               height="250px"
  //             />
  //           </Link>
  //         </div>

  //         <div className="col">
  //           <a href="#">
  //             <SVGComponent2
  //               className={choice800 || "visible"}
  //               value="800"
  //               width="250px"
  //               height="250px"
  //               onClick={(e) => handleChoice(e, "800")}
  //             />
  //           </a>
  //         </div>

  //         <div className="col">
  //           <a href="#">
  //             <SVGComponent1
  //               className={choice400 || "visible"}
  //               value="400"
  //               width="250px"
  //               height="250px"
  //               onClick={(e) => handleChoice(e, "400")}
  //             />
  //           </a>
  //         </div>

  //         <div className="col">
  //           <a href="#">
  //             <SVGComponent1
  //               className={choice80 || "visible"}
  //               value="80"
  //               width="250px"
  //               height="250px"
  //               onClick={(e) => handleChoice(e, "80")}
  //             />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="container">

      <div className="container-title">
        <h3>Choisissez le format d'image que vous souhaitez obtenir </h3>
      </div>

      <div className="children">

        <button
          className={resetClicked || "visible"}
          onClick={handleResetClick}
        >
          Reset
        </button>
        <SVGComponent1
          className={largeClicked || "visible"}
          width="250px"
          height="250px"
          onClick={(e) => handleLargeClick(e)}
        />

        <SVGComponent2
          className={tallClicked || "visible"}
          width="250px"
          height="250px"
          onClick={(e) => handleTallClick(e)}
        />

        <SVGComponent1
          className={squareClicked || "visible"}
          width="250px"
          height="250px"
          onClick={(e) => handleSquareClick(e)}
        />
      </div>

    </div>
  );
};

export default FormatChoice;
