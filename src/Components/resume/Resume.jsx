import React from "react";
import resume from "../../Images/resume.png";
import "./Resume.scss";

const Resume = () => {
	return (
		<div className="resume-main">
			<div className="resume-image">
				<img src={resume} alt={resume} />
			</div>
		</div>
	);
};

export default Resume;
