import React from "react";
import "./About.scss";
import ikasi from "../../Images/ikasi.png";
import { FaCaretRight } from "react-icons/fa";

const About = () => {
	return (
		<div className="about-section">
			<div className="about-title">
				<h2>About Me</h2>
				<hr />
			</div>
			<div className="about-content">
				<div className="content-text">
					<p>
						Hello! My name is <b className="highlight">ILIYA IKASI EPHRAIM</b> a
						software developer with skills specific to Backend Web Development.
						I also do a bit of Frontend Web Development
					</p>
					<p>
						I would like to work for you to accomplish your organization goals.
						I am work oriented i.e I love to work on comlex projects and great
						at solving them.
					</p>
					<p>
						A little bit of what i've done or projects i've worked on. I have no
						on-hand/job experience but i've built myself by taking up projects
						that prove difficult.
					</p>
					<p>Technologies which I use most frequently are;</p>
					<div className="tech-list">
						<li className="list-item">
							<FaCaretRight className="tech-icon" />
							JavaScript
						</li>
						<li className="list-item">
							<FaCaretRight className="tech-icon" />
							Python
						</li>
						<li className="list-item">
							<FaCaretRight className="tech-icon" />
							React
						</li>
						<li className="list-item">
							<FaCaretRight className="tech-icon" />
							NodeJs
						</li>
						<li className="list-item">
							<FaCaretRight className="tech-icon" />
							Java
						</li>
						<li className="list-item">
							<FaCaretRight className="tech-icon" />
							TypeScript
						</li>
					</div>
				</div>
				<div className="content-image">
					<img src={ikasi} alt={ikasi} />
				</div>
			</div>
		</div>
	);
};

export default About;
