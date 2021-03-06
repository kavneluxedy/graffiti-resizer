import React, { useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import coffee from "../../assets/img/coffee.png";

const Header = () => {
	
	const [theme, setTheme] = useState('Light');

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
		<div className="container">
			<div className="header">
			
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
						<Nav.Link href="/home">Accueil</Nav.Link>
						<Nav.Link href="/choice">Redimensionner une image</Nav.Link>
						<Nav.Link href="/output">Votre nouvelle image</Nav.Link>
						<Nav.Link href="/help">Besoin d'aide ?</Nav.Link>
					</Nav>
		
					<div id="theme-switch">
						<Form.Check 
						type="switch"
						id="id"
						onClick={ () => handleTheme() }
					/>
					</div>
				</Navbar>
		
			</div>
		</div>
	);
}

export default Header;