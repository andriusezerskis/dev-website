document.addEventListener("DOMContentLoaded", () => {
	const education = [
		{
			degree: "Master of Science in Computer Science",
			institution: "University of Brussels",
			period: "2024 - Present",
			details: "Specialization in AI and Web",
		},
		{
			degree: "Bachelor of Science in Computer Science",
			institution: "University of Brussels",
			period: "2021 - Present",
			details: "3 courses left",
		},
	];

	const skills = {
		"Web development": [
			{ name: "JavaScript", icon: "fab fa-js-square", level: 50 },
			{ name: "HTML", icon: "fab fa-html5", level: 70 },
			{ name: "CSS", icon: "fab fa-css3-alt", level: 50 },
			{ name: "PHP", icon: "fab fa-php", level: 50 },
		],
		"Programming languages": [
			{ name: "SQL", icon: "fas fa-database", level: 75 },
			{ name: "Python", icon: "fab fa-python", level: 90 },
			{ name: "C++", icon: "fab fa-cuttlefish", level: 95 },
			{ name: "Java", icon: "fab fa-java", level: 90 },
		],
		"Tools and frameworks": [
			{ name: "NGinx", level: 30 },
			{ name: "FLTK", level: 30 },
			{ name: "Bootstrap", level: 50 },
			{ name: "Git", level: 60 },
			{ name: "Docker", level: 50 },
		],
	};

	const experience = [
		{
			title: "Solution Architect Assistant",
			company: "AXA Insurance",
			period: "July 2023",
			responsibilities: [
				"Assisting solution architects in gathering and documenting requirements on SharePoint.",
				"Collaborate with solution architects to create and maintain architectural designs using Sparx Enterprise Architect.",
				"Cleaning diagrams, models, and documentation to illustrate the structure, behavior, and interactions of system components.",
			],
			technologies: ["SharePoint", "Sparx Enterprise Architect", "ArchiMate"],
		},
	];

	const generateEducation = () =>
		education
			.map(
				(item) => `
        <div class="timeline-item ${
					item.degree.includes("Master") ? "left" : "right"
				}">
            <div class="timeline-icon"></div>
            <div class="timeline-content bg-dark-gray">
                <h5 class="text-warning">${item.degree}</h5>
                <p>${item.institution}, ${item.period}</p>
                <p>${item.details}</p>
            </div>
        </div>
    `
			)
			.join("");

	const generateSkills = () =>
		Object.entries(skills)
			.map(
				([category, skillList]) => `
        <li>
            <h3 class="text-warning">${category}</h3>
            <div class="row">
                ${skillList
									.map(
										(skill) => `
                    <div class="col-md-6 mb-3">
                        <div class="skill">
                            <h4>${skill.name} ${
											skill.icon ? `<i class="${skill.icon}"></i>` : ""
										}</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${
																	skill.level
																}%;" aria-valuenow="${
											skill.level
										}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                `
									)
									.join("")}
            </div>
        </li>
    `
			)
			.join("");

	const generateExperience = () =>
		experience
			.map(
				(item) => `
        <div class="card experience-card bg-dark-gray mb-4">
            <div class="card-body">
                <h5 class="text-warning">${item.title}</h5>
                <p>${item.company} - ${item.period}</p>
                <p>Responsibilities:</p>
                <ul>
                    ${item.responsibilities
											.map((responsibility) => `<li>${responsibility}</li>`)
											.join("")}
                </ul>
                <p>Technologies used:</p>
                <ul>
                    ${item.technologies
											.map((tech) => `<li>${tech}</li>`)
											.join("")}
                </ul>
            </div>
        </div>
    `
			)
			.join("");

	document.querySelector(".skills ul").innerHTML = generateSkills();
	document.querySelector(".timeline").innerHTML = generateEducation();
	document.querySelector(".experience").innerHTML = generateExperience();
});
