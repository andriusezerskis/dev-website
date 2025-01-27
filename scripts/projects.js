fetch("/json/projects.json")
	.then((response) => response.json())
	.then((projects) => {
		const projectGrid = document.getElementById("project-grid");

		projects.forEach((project) => {
			const card = document.createElement("div");
			card.className =
				"bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg";

			const title = document.createElement("h3");
			title.className = "text-xl font-semibold text-yellow-500 mb-2";
			title.textContent = project.title;

			const description = document.createElement("p");
			description.className = "text-gray-300 mb-4";
			description.textContent = project.description;

			const techList = document.createElement("ul");
			techList.className = "flex flex-wrap gap-2 mb-4";
			project.technologies.forEach((tech) => {
				const techItem = document.createElement("li");
				techItem.className =
					"px-2 py-1 bg-gray-700 text-sm text-gray-100 rounded-md";
				techItem.textContent = tech;
				techList.appendChild(techItem);
			});

			const link = document.createElement("a");
			link.className =
				"inline-block mt-auto px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-600 transition";
			link.href = project.link || "#";
			link.textContent = project.link ? "View Project" : "No Link";
			link.target = "_blank";
			link.rel = "noopener noreferrer";

			card.appendChild(title);
			card.appendChild(description);
			card.appendChild(techList);
			card.appendChild(link);

			projectGrid.appendChild(card);
		});
	})
	.catch((error) => console.error("Error loading projects.json:", error));
