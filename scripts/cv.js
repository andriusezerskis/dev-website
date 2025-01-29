document.addEventListener("DOMContentLoaded", () => {
	const skills = {
		"Programming Languages": [
			{ name: "SQL", icon: "fas fa-database", level: 75 },
			{ name: "Python", icon: "fab fa-python", level: 85 },
			{ name: "C++", icon: "fas fa-code", level: 75 },
			{ name: "Java", icon: "fab fa-java", level: 75 },
			{ name: "Rust", icon: "fab fa-rust", level: 50 },
		],
		"Web Development": [
			{ name: "JavaScript", icon: "fab fa-js-square", level: 50 },
			{ name: "HTML", icon: "fab fa-html5", level: 70 },
			{ name: "CSS", icon: "fab fa-css3-alt", level: 50 },
			{ name: "PHP", icon: "fab fa-php", level: 50 },
		],
		"Tools and Frameworks": [
			{ name: "NGinx", level: 30 },
			{ name: "FLTK", level: 30 },
			{ name: "Tailwind", level: 50 },
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

	// Generate Skills Section
	const generateSkills = () => {
		const skillsContainer = document.querySelector(".skills ul");
		if (!skillsContainer) return;

		Object.entries(skills).forEach(([category, skillList]) => {
			const listItem = document.createElement("li");

			// Category Title
			const categoryTitle = document.createElement("h4");
			categoryTitle.className =
				"text-blue-600 font-bold text-2xl mb-6 text-center uppercase";
			categoryTitle.textContent = category;

			// Skills Grid
			const skillGrid = document.createElement("div");
			skillGrid.className =
				"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

			skillList.forEach((skill) => {
				// Skill Card
				const skillCard = document.createElement("div");
				skillCard.className =
					"group flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300";

				// Skill Title
				const skillTitle = document.createElement("h4");
				skillTitle.className =
					"text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2";
				skillTitle.innerHTML = `${skill.name} ${
					skill.icon
						? `<i class="${skill.icon} text-green-500 text-xl"></i>`
						: ""
				}`;

				// Stars
				const starsContainer = document.createElement("div");
				starsContainer.className =
					"flex gap-1 mt-2 justify-center text-yellow-400";

				const maxStars = 5;
				const numStars = Math.round((skill.level / 100) * maxStars);

				for (let i = 0; i < maxStars; i++) {
					const star = document.createElement("i");
					star.className =
						i < numStars ? "fas fa-star text-lg" : "far fa-star text-lg";
					starsContainer.appendChild(star);
				}

				// Append Skill Title and Stars
				skillCard.appendChild(skillTitle);
				skillCard.appendChild(starsContainer);

				// Add to Grid
				skillGrid.appendChild(skillCard);
			});

			// Append Category Title and Skill Grid
			listItem.appendChild(categoryTitle);
			listItem.appendChild(skillGrid);
			skillsContainer.appendChild(listItem);
		});
	};

	// Generate Professional Experience Section
	const generateExperience = () => {
		const experienceContainer = document.querySelector(".experience");
		if (!experienceContainer) return;

		experience.forEach((item) => {
			// Experience Card
			const card = document.createElement("div");
			card.className =
				"bg-white border border-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col";

			// Title
			const title = document.createElement("h5");
			title.className = "text-blue-600 font-bold text-xl mb-4";
			title.textContent = item.title;

			// Company and Period
			const company = document.createElement("p");
			company.className = "text-gray-500 text-sm mb-4";
			company.textContent = `${item.company} - ${item.period}`;

			// Responsibilities
			const responsibilitiesTitle = document.createElement("p");
			responsibilitiesTitle.className =
				"text-gray-500 font-medium text-sm mt-2 mb-1";
			responsibilitiesTitle.textContent = "Responsibilities:";

			const responsibilitiesList = document.createElement("ul");
			responsibilitiesList.className =
				"list-disc list-inside text-gray-600 text-sm";
			item.responsibilities.forEach((responsibility) => {
				const li = document.createElement("li");
				li.textContent = responsibility;
				responsibilitiesList.appendChild(li);
			});

			// Technologies
			const technologiesTitle = document.createElement("p");
			technologiesTitle.className =
				"text-gray-500 font-medium text-sm mt-2 mb-1";
			technologiesTitle.textContent = "Technologies used:";

			const technologiesList = document.createElement("ul");
			technologiesList.className =
				"list-disc list-inside text-gray-600 text-sm";
			item.technologies.forEach((tech) => {
				const li = document.createElement("li");
				li.textContent = tech;
				technologiesList.appendChild(li);
			});

			// Append Elements to Card
			card.appendChild(title);
			card.appendChild(company);
			card.appendChild(responsibilitiesTitle);
			card.appendChild(responsibilitiesList);
			card.appendChild(technologiesTitle);
			card.appendChild(technologiesList);

			// Add Card to Container
			experienceContainer.appendChild(card);
		});
	};

	// Generate Sections
	generateSkills();
	generateExperience();
});
