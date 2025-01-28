fetch("/json/projects.json")
	.then((response) => response.json())
	.then((projects) => {
		const projectGrid = document.getElementById("project-grid");

		projects.forEach((project) => {
			// Create Project Card
			const card = document.createElement("div");
			card.className =
				"bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col";

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
			techList.className = "flex flex-wrap gap-2 mb-4"; // Smaller gap
			project.technologies.forEach((tech) => {
				const techItem = document.createElement("li");
				techItem.className =
					"flex items-center gap-1 px-2 py-1 bg-gray-700 text-xs text-gray-100 rounded-md shadow"; // Smaller font and padding

				// Add Icon
				if (tech.icon) {
					const icon = document.createElement("i");
					icon.className = `${tech.icon} text-sm`; // Smaller icon size
					techItem.appendChild(icon);
				}

				// Add Technology Name
				const techName = document.createElement("span");
				techName.textContent = tech.displayName;
				techName.className = "font-medium";
				techItem.appendChild(techName);

				techList.appendChild(techItem);
			});

			// Button Container (to position the button at the bottom)
			const buttonContainer = document.createElement("div");
			buttonContainer.className = "mt-auto flex justify-center";

			// View Project Button
			const link = document.createElement("a");
			link.className =
				"inline-block px-4 py-2 bg-green-400 text-white font-bold rounded hover:bg-green-500 transition";
			link.href = project.link || "#";
			link.textContent = project.link ? "View Project" : "No Link";
			link.target = "_blank";
			link.rel = "noopener noreferrer";

			// Append Elements
			buttonContainer.appendChild(link); // Button container
			card.appendChild(title); // Title
			card.appendChild(description); // Description
			card.appendChild(techList); // Technologies
			card.appendChild(buttonContainer); // Add button container to card

			// Append Card to Grid
			projectGrid.appendChild(card);
		});
	})
	.catch((error) => console.error("Error loading projects.json:", error));
