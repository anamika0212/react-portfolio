import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/anamika0212"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github-logo.png").default}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://linkedin.com/in/jha-anamika"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png").default}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;