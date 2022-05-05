import FileResizer from "react-image-file-resizer";
import download from "downloadjs";
import { useEffect, useRef } from "react";

const SizeChoice = ({
	src,
	setSrc,
	copyEvent,
	setCopyEvent,
	copyEvent: { target },
}) => {
  const fileToDL = useRef(<img />); 
	const resizeFile = (file) =>
  // console.log(file);
		new Promise((resolve) => {
			FileResizer.imageFileResizer(
				copyEvent[0].target.files[0],
				420,
				copyEvent[0].target.files[0].height,
				"JPG",
				100,
				0,
				(uri) => {
					resolve(uri);
				},
				"base64"
			);
		});

	const onClick = async (event) => {
    setCopyEvent(event);

		// Evènement provenant du clic de choix de taille d'image
		try {
			const file = event.target;
			console.log(file);
			const image = await resizeFile(file);
			setSrc(image);
      downloadFile();
		} catch (err) {
			console.log(err);
		}
	};

	const downloadFile = async (file) => {
		if (copyEvent) {
      console.log(copyEvent.name)
			var oldName = copyEvent.name;
			var newName = oldName.replace(/.jpeg|.jpg|.png|.gif/gi, "");
			console.warn(newName);
		}
		download(src, newName + "_" + fileToDL.current.classList[1], "image/jpg");
	};

	return (
		<div className="container">
			{/* LANDSCAPE */}

			<div width="800" className="choice landscape800">
				<img
					className="choice landscape800"
					src={src}
					// onClick={(e) => clickHandler1(e)}
					alt="Txt Alt"
          ref={fileToDL}
				/>
			</div>

			<div className="choice landscape400">
				<img
					className="choice landscape400"
					src={src}
					onClick={(e) => onClick(e)}
          alt="New Resized Image"
          ref={fileToDL}
				/>
			</div>

			{/* 
            <div className="choice landscape80">
            <img
            className="choice landscape80"
            src={src}
            onClick={(e) => clickHandler3(e)}
          />
        </div>
  */}

			{/* PORTRAIT */}
			{/* 
      <div className="choice portrait1200">
        <img
          className="choice portrait1200"
          src={src}
          onClick={(e) => clickHandler4(e)}
        />
      </div>
      <div className="choice portrait800">
        <img
          className="choice portrait800"
          src={src}
          onClick={(e) => clickHandler5(e)}
        />
      </div>
      <div className="choice portrait400">
        <img
          className="choice portrait400"
          src={src}
          onClick={(e) => clickHandler6(e)}
        />
      </div>
      <div className="choice portrait80">
        <img
          className="choice portrait80"
          src={src}
          onClick={(e) => clickHandler7(e)}
        />
      </div>
  */}
			{/* SQUARE */}
			{/*
      <div className="choice square1200">
        <img
          className="choice square1200"
          src={src}
          onClick={(e) => clickHandler8(e)}
        />
      </div>
      <div className="choice square800">
        <img
          className="choice square800"
          src={src}
          onClick={(e) => clickHandler8(e)}
          />
          </div>
          <div className="choice square400">
          <img
          className="choice square400"
          src={src}
          onClick={(e) => clickHandler9(e)}
          />
          </div>
          <div className="choice square80">
          <img
          className="choice square80"
          src={src}
          onClick={(e) => clickHandler10(e)}
          />
          </div>
        */}
		</div>
	);
};

// const clickHandler3 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       80,
//       copyEvent.height,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler4 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       copyEvent.width,
//       1200,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler5 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       copyEvent.width,
//       800,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler6 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       copyEvent.width,
//       400,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler7 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       copyEvent.width,
//       80,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler8 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       1200,
//       1200,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler9 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       800,
//       800,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler10 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       400,
//       400,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

// const clickHandler11 = (e) => {
//   try {
//     FileResizer.imageFileResizer(
//       copyEvent,
//       80,
//       80,
//       "PNG",
//       100,
//       0,
//       (uri) => {
//         setSrc(uri);
//       },
//       "base64"
//     );
//   } catch (err) {
//     console.warn(err);
//   }
//   let event = {
//     ...e,
//   };
//   downloadFile(event);
// };

export default SizeChoice;
