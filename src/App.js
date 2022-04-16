import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import FileResizer from "react-image-file-resizer";
import { useState } from "react";

const App = () => {

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
    <div className="App">
      <Header />
    </div>
  );
}

export default App;