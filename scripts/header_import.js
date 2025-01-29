function loadHTML(url, elementId) {
	fetch(url)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(elementId).innerHTML = data;
			initializeEventListeners(); // Ensure all event listeners are re-applied
		})
		.catch((error) => console.error("Error loading HTML:", error));
}

function initializeEventListeners() {
	console.log("Initializing event listeners...");

	// Mobile Menu
	const menuButton = document.getElementById("mobile-menu-button");
	const mobileMenu = document.getElementById("mobile-menu");

	menuButton.addEventListener("click", function (event) {
		event.stopPropagation(); // Prevents event bubbling
		mobileMenu.classList.toggle("hidden");
		mobileMenu.classList.toggle("opacity-100");
		mobileMenu.classList.toggle("scale-100");
	});

	// Close menu when clicking outside
	document.addEventListener("click", function (event) {
		if (
			!menuButton.contains(event.target) &&
			!mobileMenu.contains(event.target)
		) {
			mobileMenu.classList.add("hidden");
		}
	});

	// Discord Modal
	const discordButton = document.getElementById("discord-icon");
	const discordModal = document.getElementById("discordModal");
	const closeButton = document.getElementById("close-btn");
	const copyButton = document.getElementById("copy-btn");

	discordButton.addEventListener("click", function () {
		discordModal.classList.remove("hidden");
		discordModal.classList.add("opacity-100", "scale-100");
	});

	closeButton.addEventListener("click", function () {
		discordModal.classList.add("hidden");
		discordModal.classList.remove("opacity-100", "scale-100");
	});

	copyButton.addEventListener("click", function () {
		navigator.clipboard.writeText("lemonbrownie").then(() => {
			copyButton.classList.replace("bg-green-500", "bg-gray-500");
			copyButton.innerHTML = `<i class="fas fa-check text-white"></i> Copied!`;

			setTimeout(() => {
				copyButton.classList.replace("bg-gray-500", "bg-green-500");
				copyButton.innerHTML = `<i class="fas fa-copy"></i> Copy to Clipboard`;
			}, 1500);
		});
	});

	console.log("Event listeners initialized.");
}

// Ensure the header is loaded
document.addEventListener("DOMContentLoaded", () => {
	loadHTML("/html/main_header.html", "header-placeholder");
});
