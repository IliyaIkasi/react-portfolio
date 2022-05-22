import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";

function Navbar() {
	useEffect(() => {
		var previous = window.pageYOffset;
		window.onscroll = function () {
			var current = window.pageYOffset;
			if (previous > current) {
				document.getElementById("navbar").style.top = "0";
			} else {
				document.getElementById("navbar").style.top = "-70px";
			}
			previous = current;
		};
	}, []);

	return (
		<div>
			<nav
				id="navbar"
				className="navbar fixed-top navbar-expand-lg navbar-light"
			>
				<div className="container">
					<Link to="" className="navbar-brand">
						Navbar
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto">
							<HashLink to="/#about" className="nav-link">
								About
							</HashLink>
							<HashLink to="/#experience" className="nav-link">
								Experience
							</HashLink>
							<HashLink to="/#projects" className="nav-link">
								Projects
							</HashLink>
							<HashLink to="/#contact" className="nav-link">
								Contact
							</HashLink>
							<HashLink to="/#resume" className="nav-link resume">
								Resume
							</HashLink>
						</div>
					</div>
				</div>
			</nav>
			<script src="navFunc.js"></script>
		</div>
	);
}

export default Navbar;
