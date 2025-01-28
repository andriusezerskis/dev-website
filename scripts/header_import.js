function loadHTML(url, elementId) {
	fetch(url)
		.then((response) => response.text())
		.then((data) => {
			// Inject the fetched HTML into the target element
			const element = document.getElementById(elementId);
			if (element) {
				element.innerHTML = data;

				// Reapply event listeners after dynamic content is loaded
				initializeEventListeners();
			}
		})
		.catch((error) => console.error("Error loading HTML:", error));
}

function initializeEventListeners() {
	// Discord Icon - Open Modal
	const discordIcon = document.getElementById("discord-icon");
	if (discordIcon) {
		discordIcon.addEventListener("click", () => {
			const discordModal = document.getElementById("discordModal");
			if (discordModal) {
				discordModal.classList.remove("hidden");
			}
		});
	}

	// Close Modal
	const closeButton = document.getElementById("close-btn");
	if (closeButton) {
		closeButton.addEventListener("click", () => {
			const discordModal = document.getElementById("discordModal");
			if (discordModal) {
				discordModal.classList.add("hidden");
			}
		});
	}

	// Copy Discord Username
	const copyButton = document.getElementById("copy-btn");
	if (copyButton) {
		copyButton.addEventListener("click", () => {
			const discordText = document.getElementById("discord-info-modal");
			if (discordText) {
				navigator.clipboard.writeText(discordText.innerText).then(() => {
					copyButton.innerHTML = '<i class="fas fa-check text-green-500"></i>';
				});
			}
		});
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// Load the navigation bar into the placeholder div
	loadHTML("main_header.html", "header-placeholder");
});
