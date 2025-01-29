fetch("/json/projects.json")
	.then((response) => response.json())
	.then((projects) => {
		const projectGrid = document.getElementById("project-grid");

		projects.forEach((project) => {
			// Create Project Card
			const card = document.createElement("div");
			card.className =
				"bg-white border border-gray-300 rounded-lg p-6 shadow-md flex flex-col h-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";

			// Project Title
			const title = document.createElement("h3");
			title.className = "text-xl font-semibold text-blue-600 mb-2";
			title.textContent = project.title;

			// Project Description
			const description = document.createElement("p");
			description.className = "text-gray-700 mb-4";
			description.textContent = project.description;

			// Technology List
			const techList = document.createElement("ul");
			techList.className = "flex flex-wrap gap-2 mb-4";

			project.technologies.forEach((tech) => {
				const techItem = document.createElement("li");
				techItem.className =
					"flex items-center gap-2 px-2 py-1 bg-gray-200 text-xs text-gray-800 rounded-md";

				// Ensure tech is an object with name & icon
				if (typeof tech === "object" && tech.name && tech.icon) {
					const icon = document.createElement("i");
					icon.className = `${tech.icon} text-lg text-gray-600`;
					techItem.appendChild(icon);

					const techName = document.createElement("span");
					techName.textContent = tech.name;
					techItem.appendChild(techName);
				} else {
					// If tech is a string, just display text
					techItem.textContent = tech;
				}

				techList.appendChild(techItem);
			});

			// Button stays at the bottom by wrapping everything inside a flex-grow div
			const contentWrapper = document.createElement("div");
			contentWrapper.className = "flex flex-col flex-grow";
			contentWrapper.appendChild(title);
			contentWrapper.appendChild(description);
			contentWrapper.appendChild(techList);
			card.appendChild(contentWrapper);

			// Button Container (Only if link exists)
			if (project.link) {
				const buttonContainer = document.createElement("div");
				buttonContainer.className = "mt-auto flex justify-center";

				// View Project Button with Hover Effect
				const link = document.createElement("a");
				link.className =
					"inline-block px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg";
				link.href = project.link;
				link.textContent = "View project";
				link.target = "_blank";
				link.rel = "noopener noreferrer";

				buttonContainer.appendChild(link);
				card.appendChild(buttonContainer);
			}

			// Append Card to Grid
			projectGrid.appendChild(card);
		});
	})
	.catch((error) => console.error("Error loading projects.json:", error));
