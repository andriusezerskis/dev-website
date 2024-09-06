const carouselInner = document.getElementById("carousel-inner");
let activeTechs = [];

// Function to filter projects
function filterProjects(activeTechs) {
	carouselInner.innerHTML = ""; // Clear existing projects
	if (activeTechs.length > 0) {
		var filteredProjects = projects.filter((project) => {
			return project.technologies.some((tech) => activeTechs.includes(tech));
		});
	} else {
		var filteredProjects = projects;
	}

	filteredProjects.forEach((project, index) => {
		const isActive = index === 0 ? "active" : "";
		const technologies = project.technologies
			.map((tech) => `<i class="devicon-${tech}-plain"></i>`)
			.join(" ");
		const projectCard = `
        <div class="carousel-item ${isActive}">
            <div class="card mb-4 white-shadow bg-dark-gray text-light">
                <div class="card-body">
                    <h5 class="card-title text-hover">${project.title} ${
			project.link
				? `<a href="${project.link}" target="_blank" class="bi bi-github"></a>`
				: ""
		}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="technologies">${technologies}</div>
                </div>
            </div>
        </div>
    `;
		carouselInner.insertAdjacentHTML("beforeend", projectCard);
	});
}

// Function to clear all filters
function clearFilters() {
	activeTechs = [];
	const buttons = document.querySelectorAll(".dropdown-item");
	buttons.forEach((button) => {
		button.classList.remove("active");
	});

	filterProjects(activeTechs);
}

// Function to toggle filter
function toggleFilter(tech, button) {
	if (activeTechs.includes(tech)) {
		// If the same button is clicked again, remove it from the list of active techs
		activeTechs = activeTechs.filter((t) => t !== tech);
		button.classList.remove("active"); // Untoggle active class
	} else {
		// If a different button is clicked, add it to the list of active techs
		activeTechs.push(tech);
		button.classList.toggle("active"); // Toggle active class
	}
	filterProjects(activeTechs);
}

// Function to setup project card
function setupProjectCards(projects) {
	projects.forEach((project, index) => {
		const isActive = index === 0 ? "active" : "";
		const technologies = project.technologies
			.map((tech) => {
				if (tech === "fltk") {
					console.log("FLTK detected");
					return `<span class="tech-label">FLTK</span>`;
				} else {
					return `<i class="devicon-${tech}-plain"></i>`;
				}
			})
			.join(" ");
		const projectCard = `
                    <div class="carousel-item ${isActive}">
                        <div class="card mb-4 white-shadow bg-dark-gray text-light">
                            <div class="card-body">
                                <h5 class="card-title text-hover">${
																	project.title
																} ${
			project.link
				? `<a href="${project.link}" target="_blank" class="bi bi-github"></a>`
				: ""
		}</h5>
                
                                <p class="card-text">${project.description}</p>
                                <div class="technologies">${technologies}</div>
                            </div>
                        </div>
                    </div>
                `;

		carouselInner.insertAdjacentHTML("beforeend", projectCard);
	});
}

function mapFilters() {
	const filtersMapping = {};
	projects.forEach((project) => {
		project.technologies.forEach((tech, index) => {
			filtersMapping[tech] = project.filters[index];
		});
	});

	return filtersMapping;
}

// Generate filter buttons as dropdown items
function dropdownMenuSetup(technologies) {
	const dropdown = document.createElement("div");
	const filterButtonsContainer = document.getElementById("filter-buttons");
	dropdown.className = "dropdown d-inline-block";

	const dropdownButton = document.createElement("button");
	dropdownButton.className = "btn btn-secondary dropdown-toggle";
	dropdownButton.type = "button";
	dropdownButton.id = "dropdownMenuButton";
	dropdownButton.setAttribute("data-bs-toggle", "dropdown");
	dropdownButton.setAttribute("aria-expanded", "false");
	dropdownButton.innerHTML = '<i class="bi bi-funnel"></i>';

	const dropdownMenu = document.createElement("ul");
	dropdownMenu.className = "dropdown-menu";
	dropdownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");
	filtersMap = mapFilters();

	technologies.forEach((tech) => {
		const dropdownItem = document.createElement("li");
		const button = document.createElement("button");
		button.className = "dropdown-item";
		button.innerText = filtersMap[tech];
		button.addEventListener("click", () => {
			toggleFilter(tech, button);
		});
		dropdownItem.appendChild(button);
		dropdownMenu.appendChild(dropdownItem);
	});

	const divider = document.createElement("div");
	divider.className = "dropdown-divider";
	dropdownMenu.appendChild(divider);

	// Create and append the "Clear Filters" button
	const clearButton = document.createElement("button");
	clearButton.className =
		"btn text-danger sm-3 dropdown-item d-flex justify-content-center align-items-center";
	clearButton.innerHTML = '<i class="bi bi-trash"></i>';
	clearButton.addEventListener("click", () => {
		clearFilters();
	});
	clearButton.addEventListener("touchstart", () => {
		clearFilters();
	});
	dropdownMenu.appendChild(clearButton);
	dropdown.appendChild(dropdownButton);
	dropdown.appendChild(dropdownMenu);
	filterButtonsContainer.appendChild(dropdown);
}

document.addEventListener("DOMContentLoaded", () => {
	fetch("../json/projects.json")
		.then((response) => response.json())
		.then((data) => {
			globalThis.projects = data;

			// Extract unique technologies
			const technologies = new Set();
			projects.forEach((project) => {
				project.technologies.forEach((tech) => technologies.add(tech));
			});

			dropdownMenuSetup(technologies);
			setupProjectCards(projects);

			// Initially display all projects
			filterProjects([]);
		});
});
