import React from 'react';
import photo from "../../assets/images/Anamika-profile.jpeg";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={photo}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					
					Hey there! My name is Anamika. I'm a QA Engineer, and making this portfolio as part of UC Berkeley's Coding Bootcamp.
					I am a full stack web developer looking to build a more
					intuitive user experience on the web. I recently developed
					skills in JavaScript, CSS, React.js, and responsive web
					design. I am known as an innovative problem solver
					passionate about developing apps, with a focus on
					mobile-first design and development. With each project,
					my aim is to best engage my audience for an impactful
					user experience.
				</p>
				
			</div>
		</section>
	);
}

export default About;