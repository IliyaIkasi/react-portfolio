import "./Home.scss";
import me from "../../Images/cherry.png";
import React, { useRef } from "react";
import Projects from "../project/Projects";
import Resume from "../resume/Resume";
import Contact from "../contact/Contact";
import { projects, experience } from "../../data";
import { IconContext } from "react-icons";
import {
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaEnvelope,
	FaLinkedin,
	FaPhone,
	FaFacebookF,
} from "react-icons/fa";
import About from "../about/About";
import Experience from "../experience/Experience";

const Home = () => {
	const viewRef = useRef();

	const viewMore = (count) => {
		let distance = viewRef.current.getBoundingClientRect().x - 50;
	};

	return (
		<div className="homepage-main">
			<div className="section-one">
				<nav className="sidebar-content">
					<div className="sidebar-text">
						<IconContext.Provider value={{ size: "1.3rem" }}>
							<div className="social-icons">
								<a href="http://">
									<FaInstagram />
								</a>
							</div>
							<div className="social-icons">
								<a href="https://github.com/IliyaIkasi">
									<FaGithub />
								</a>
							</div>
							<div className="social-icons">
								<a href="http://">
									<FaTwitter />
								</a>
							</div>
							<div className="social-icons">
								<a href="mailto:iliyaikasi@gmail.com">
									<FaEnvelope />
								</a>
							</div>
							<div className="social-icons">
								<a href="https://www.linkedin.com/in/iliya-ikasi-a30a02217/">
									<FaLinkedin />
								</a>
							</div>
							<div className="social-icons">
								<a href="tel:+234-9122515984">
									<FaPhone />
								</a>
							</div>
							<div className="social-icons">
								<a href="https://">
									<FaFacebookF />
								</a>
							</div>
						</IconContext.Provider>
					</div>
				</nav>
			</div>
			<div className="section-two">
				<div className="main-container">
					<div className="split-center">
						<div className="header-content">
							<div className="header-name">
								<h2>Hi!!!</h2>
								<h2>I'm Iliya Ikasi Ephraim</h2>
							</div>
							<div className="header-text">
								<h5>A junior web developer based in Kaduna, Nigeria. </h5>
							</div>
						</div>
						<div className="tech-section">
							<div className="tech-header-text">
								<h5>Technologies In Use: </h5>
							</div>
							<div className="tech-list">
								<div className="tech-wrapper">
									<div className="tech-item">JAVA</div>
									<div className="tech-item">HTML</div>
									<div className="tech-item">CSS</div>
									<div className="tech-item">JAVASCRIPT</div>
									<div className="tech-item">NODE JS</div>
									<div className="tech-item">TYPESCRIPT</div>
									<div className="tech-item">REACT</div>
									<div className="tech-item">SQL</div>
								</div>
							</div>
						</div>
					</div>
					<div className="split-right">
						<div className="homepage-image"></div>
						<img className="me-img" src={me} alt={me} />
					</div>
				</div>
				<div id="about" className="about-container">
					<div className="about-main">
						<About />
					</div>
				</div>
				<div id="experience" className="experience-container">
					<div className="experience-main">
						<Experience experience={experience} />
					</div>
				</div>
				<div id="projects" className="projects-container">
					<div className="projects-main">
						<Projects projects={projects} />
						{/* <div className="view-btn">
							<input type="button" value="View More" />
						</div> */}
					</div>
				</div>
				{/* <div id="resume" className="resume-container">
					<div className="resume-main">
						<div className="resume-header">
							<h2>Resume</h2>
						</div>
						<div className="resume-content">
							<Resume />
						</div>
					</div>
				</div> */}
				<div id="contact" className="contact-container">
					<div className="contact-form">
						<div className="contact-header">
							<div className="contact-title">
								<h2>Contact Us</h2>
								<hr />
							</div>
							<div className="contact-text">
								<hr />
								<h5>For further information </h5>
							</div>
						</div>
						<div className="form-section">
							<Contact />
						</div>
					</div>
				</div>
				<footer className="footer-container">
					<div className="header-text">
						<a href="https://github.com/IliyaIkasi">
							Designed & Built <span>by</span> Iliya Ikasi Ephraim
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Home;
