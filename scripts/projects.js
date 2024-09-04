document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Load balancer for a website",
            description: "Implementation of a load balancer to handle traffic and send it across different webservers, to ensure the stability of the website.",
            link: "https://github.com/moiravs/LoadBalancer",
            technologies: ["nginx", "php", "mysql", "python"]
        },
        {
            title: "Breakthrough game",
            description: "Simplified chess game with Minimax and Monte-Carlo algorithms to play against AI.",
            technologies: ["qt", "python"]
        },
        {
            title: "TinyDB and SmallDB",
            description: "Implementation of a C/C++ database with processes and threads for handling search queries with filters.",
            link: "https://github.com/moiravs/TinyDB",
            technologies: ["bash", "c", "cplusplus", "mysql"]
        },
        {
            title: "Sokoban game",
            description: "Implementation of the Sokoban game in Object-Oriented C++.",
            link: "https://github.com/moiravs/Sokoban",
            technologies: ["fltk", "cplusplus"]
        },
        {
            title: "Patients' information database",
            description: "Creation of a database containing patient informations, such as their doctor and pharmacist, to insure proper care following.",
            link: "https://github.com/andriusezerskis/ProjetBDD",
            technologies: ["php", "mysql", "python"]
        },
        {
            title: "2D Ecosystem simulation",
            description: "Simulation of a 2D environment containing animals, humans and different plants interacting with each other in a stochastic manner.",
            link: "https://github.com/andriusezerskis/proj3-gr2b",
            technologies: ["qt", "python"]
        }
    ];

    // Extract unique technologies
    const technologies = new Set();
    projects.forEach(project => {
        project.technologies.forEach(tech => technologies.add(tech));
    });

    const filterButtonsContainer = document.getElementById('filter-buttons');
    const carouselInner = document.getElementById('carousel-inner');
    let activeTech = '';

    // Generate filter buttons
    technologies.forEach(tech => {
        const button = document.createElement('button');
        button.className = 'btn btn-secondary btn-toggle m-1';
        button.innerText = tech;
        button.addEventListener('click', () => toggleFilter(tech, button));
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
        filterButtonsContainer.appendChild(button);
    });

    // Function to toggle filter
    function toggleFilter(tech, button) {
        if (activeTech === tech) {
            // If the same button is clicked again, show all projects
            activeTech = '';
            filterProjects('');
        } else {
            // If a different button is clicked, filter projects
            activeTech = tech;
            filterProjects(tech);
        }
    }

    // Function to filter projects
    function filterProjects(tech) {
        carouselInner.innerHTML = ''; // Clear existing projects
        if (tech !== '') {
            var filteredProjects = projects.filter(project => project.technologies.includes(tech));
        } else { var filteredProjects = projects; }
        filteredProjects.forEach((project, index) => {
            const isActive = index === 0 ? 'active' : '';
            const technologies = project.technologies.map(tech => `<i class="devicon-${tech}-plain"></i>`).join(' ');
            const projectCard = `
                <div class="carousel-item ${isActive}">
                    <div class="card mb-4 white-shadow bg-dark-gray text-light">
                        <div class="card-body">
                            <h5 class="card-title text-hover">${project.title} ${project.link ? `<a href="${project.link}" target="_blank" class="bi bi-github"></a>` : ''}</h5>
                            <p class="card-text">${project.description}</p>
                            <div class="technologies">${technologies}</div>
                        </div>
                    </div>
                </div>
            `;
            carouselInner.insertAdjacentHTML('beforeend', projectCard);
        });
    }

    projects.forEach((project, index) => {
        const isActive = index === 0 ? 'active' : '';
        const technologies = project.technologies.map(tech => {
            if (tech === 'fltk') {
                return '<a>fltk</a>';
            } else {
                return `<i class="devicon-${tech}-plain"></i>`;
            }
        }).join(' ');
        const projectCard = `
            <div class="carousel-item ${isActive}">
                <div class="card mb-4 white-shadow bg-dark-gray text-light">
                    <div class="card-body">
                        <h5 class="card-title text-hover">${project.title} ${project.link ? `<a href="${project.link}" target="_blank" class="bi bi-github"></a>` : ''}</h5>
          
                        <p class="card-text">${project.description}</p>
                        <div class="technologies">${technologies}</div>
                    </div>
                </div>
            </div>
        `;

        carouselInner.insertAdjacentHTML('beforeend', projectCard);
    });

    // Initially display all projects
    filterProjects('');
});