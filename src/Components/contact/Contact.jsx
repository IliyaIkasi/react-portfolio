import React from "react";
import "./Contact.scss";

const Contact = () => {
	const submitForm = (e) => {
		e.preventDefault();
		alert("Database Temporarily Unavailable");
	};
	return (
		<div>
			<section>
				<form className="form">
					<div className="form-group">
						<div className="form-text">
							<div className="form-textbox">
								<label>Name: </label>
								<input type="text" name="name" id="name" placeholder="Name" />
							</div>
							<div className="form-textbox">
								<label>Email: </label>
								<input
									type="text"
									name="email"
									id="email"
									placeholder="email@email.com"
								/>
							</div>
						</div>
						<div className="form-msgbox">
							<label>Message: </label>
							<textarea
								placeholder="Text Message..."
								name="message"
								id="message"
								// cols="40"
								// rows="5"
							></textarea>
						</div>
					</div>
					<div className="form-btn register-btn">
						<button type="submit" onClick={submitForm}>
							Submit
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default Contact;
