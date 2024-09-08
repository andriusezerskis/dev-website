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
	document
		.querySelectorAll(".dropdown-item")
		.forEach((button) => button.classList.remove("active"));
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
			.map((tech) =>
				tech === "fltk"
					? `<span class="tech-label">FLTK</span>`
					: `<i class="devicon-${tech}-plain"></i>`
			)
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

function mapFilters() {
	const filtersMapping = {};
	projects.forEach((project) => {
		project.technologies.forEach((tech, index) => {
			filtersMapping[tech] = project.filters[index];
		});
	});

	return filtersMapping;
}

function createElement(tag, className, attributes = {}, innerHTML = "") {
	const element = document.createElement(tag);
	if (className) element.className = className;
	Object.keys(attributes).forEach((attr) =>
		element.setAttribute(attr, attributes[attr])
	);
	element.innerHTML = innerHTML;
	return element;
}

function dropdownMenuSetup(technologies) {
	const filterButtonsContainer = document.getElementById("filter-buttons");
	const dropdown = createElement("div", "dropdown d-inline-block");
	const dropdownButton = createElement(
		"button",
		"btn btn-secondary dropdown-toggle",
		{
			type: "button",
			id: "dropdownMenuButton",
			"data-bs-toggle": "dropdown",
			"aria-expanded": "false",
		},
		'<i class="bi bi-funnel"></i>'
	);

	const dropdownMenu = createElement("ul", "dropdown-menu", {
		"aria-labelledby": "dropdownMenuButton",
	});

	const filtersMap = mapFilters();

	technologies.forEach((tech) => {
		const button = createElement(
			"button",
			"dropdown-item",
			{},
			filtersMap[tech]
		);
		button.addEventListener("click", () => toggleFilter(tech, button));
		const dropdownItem = createElement("li");
		dropdownItem.appendChild(button);
		dropdownMenu.appendChild(dropdownItem);
	});

	const divider = createElement("div", "dropdown-divider");
	dropdownMenu.appendChild(divider);

	const clearButton = createElement(
		"button",
		"btn text-danger sm-3 dropdown-item d-flex justify-content-center align-items-center",
		{},
		'<i class="bi bi-trash"></i>'
	);
	clearButton.addEventListener("click", clearFilters);
	clearButton.addEventListener("touchstart", clearFilters);
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
