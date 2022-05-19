import React, { useState } from "react";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SvgHome from "assets/img/svg/SvgHome";

const Header = () => {
	const [theme, setTheme] = useState("Light");

	const handleTheme = () => {
		switch (theme) {
			case "Light":
				setTheme("Dark");
				document.querySelector("#root").style.backgroundColor = "#6a54b3";
				document.querySelector("#root").style.color = "#555";
				break;

			case "Dark":
				setTheme("Light");
				document.querySelector("#root").style.backgroundColor = "#062634";
				document.querySelector("#root").style.color = "#22406e";
				break;

			default:
				setTheme("Light");
		}
	};

	return (
		<Container>
			{[false].map((expand) => (
				<Navbar key={expand} expand={expand} className="mb-3" fixed="top">
					<Navbar.Brand href="/home">
						<SvgHome width="150px" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header
							closeButton
							style={{ backgroundColor: "#7a04c5" }}
						>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								Graffiti Resize
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body className="burger-menu">
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<span>
									<Link to="/app">Redimensionner une image</Link>
								</span>
								<span>
									<Link to="/about">A propos de nous</Link>
								</span>
								<span>
									<Link to="/help">Besoin d'aide ?</Link>
								</span>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Navbar>
			))}
		</Container>
	);
};

export default Header;
