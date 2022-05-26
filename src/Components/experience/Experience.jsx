import "./Experience.scss";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";

const Experience = ({ experience }) => {
	const [jobs, setJobs] = useState(experience);

	const selectJob = (e) => {
		const value = e.target.id;
		const filterJob =
			value === "Apple"
				? experience
				: experience.filter((item) => item.org === value);
		setJobs(filterJob);
	};
	const job = jobs[0];

	return (
		<div className="experience-section">
			<div className="experience-title">
				<h2>Where I've Worked On</h2>
				<hr />
			</div>

			<div className="experience-content">
				<div className="job-name">
					{experience.map((item) => (
						<div
							className="job-title"
							id={item.org}
							onClick={selectJob}
							key={item.id}
						>
							<span>{item.org}</span>
						</div>
					))}
				</div>
				<div className="job-desc">
					<div className="role">
						<h3>
							{job.role} <span>@ {job.org}</span>
						</h3>
					</div>
					<div className="duration">
						<h6>
							{job.sDate} - {job.eDate}
						</h6>
					</div>
					<div className="desc">
						<div className="desc-item">
							<FaCaretRight className="desc-icon" />
							{job.desc}
						</div>
						<div className="desc-item">
							<FaCaretRight className="desc-icon" />
							{job.desc}
						</div>
						<div className="desc-item">
							<FaCaretRight className="desc-icon" />
							{job.desc}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
