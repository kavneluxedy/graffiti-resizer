import React, { useContext, useEffect, useState } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import coffee from "../assets/img/coffee.png";
import FormatChoice from "./FormatChoice";
import ThemeContext from "./Provider/ThemeContext";
import ResizerOutput from "./ResizerOutput";

const Header = () => {
	
	// const { theme, updateTheme } = useContext(ThemeContext);
	const [theme, setTheme] = useState('Light');
	const [chosenFormat, setChosenFormat] = useState('large');

	const handleTheme = () => {
	  switch (theme) {
		case 'Light':
			setTheme('Dark');
			document.querySelector('#root').style.backgroundColor = "#370073";
			document.querySelector('#root').style.color = "#555";
		break;
  
		case 'Dark':
			setTheme('Light');
			document.querySelector('#root').style.backgroundColor = "#FFF";
			document.querySelector('#root').style.color = "#22406e";
		break;
  
		default:
			setTheme('Light');
	  }
	}

	return (
		<>
			<Navbar className="header" variant="dark">

				<Navbar.Brand href="/home">
					<img
						src={coffee}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>

				<Nav fill className="me-auto">
					<Nav.Link href="format">Accueil</Nav.Link>
					<Nav.Link href="options">Redimensionner une image</Nav.Link>
					<Nav.Link href="help">Besoin d'aide ?</Nav.Link>
				</Nav>

				<div id="theme-switch">
					<Form.Check 
					type="switch"
					id="id"
					onClick={ () => handleTheme() }
				/>
				</div>
				Switch theme

			</Navbar>

			<ThemeContext.Provider value={ThemeContext}>
				<FormatChoice theme={theme} updateTheme={setTheme} />
				<ResizerOutput theme={theme} updateTheme={setTheme} />
			</ThemeContext.Provider>

		</>
	);
}

export default Header;