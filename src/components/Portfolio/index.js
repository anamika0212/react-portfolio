import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'mvc-tech-blog',
			description:
				'This is a tech blog that allows a user to post about whatever they wish.',
			image: 'mvc-home-page.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku',
			
			],
			github: 'https://github.com/anamika0212/mvc-tech-blog',
			deployed: 'https://anamika-mvc-tech-blog.herokuapp.com/',
		},
        {
			name: 'Progressive Web App - Budget tracker',
			description:
				'Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important.',
			image: 'budget-tracker.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & MongoDB',
				'Heroku',
				'React.js',
				'MERN Stack',
			],
			github: 'https://github.com/anamika0212/pwa-budget-tracker',
			deployed: 'https://anamika-budget-tracker.herokuapp.com/',
		},
        {
			name: 'Employee Tracker',
			description:
				'This Node application is for a business owner to be able to view and manage departments, roles, and employees in their company in order to organize and plan their business.',
			image: 'employee-tracker.jpeg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'inquirer',
				'Express & MySQL',
				'console.table'
				
			],
			github: 'https://github.com/anamika0212/employee-tracker',
			deployed: 'https://www.youtube.com/watch?v=qBAO-cD-ouc',
		},
        {
			name: 'Note taker',
			description:
				'This is a simple Note Taker application that allows users to add, view saved notes and also delete the notes if the user donot need that note anymore.',
			image: 'NoteTaker.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express',
				'Heroku',
				'uuid'
			],
			github: 'https://github.com/anamika0212/note-taker',
			deployed: 'https://note-taker-anamika.herokuapp.com/',
		}
      
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;