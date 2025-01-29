function loadHTML(url, elementId) {
	fetch(url)
		.then((response) => response.text())
		.then((data) => {
			const element = document.getElementById(elementId);
			if (element) {
				element.innerHTML = data;
				initializeEventListeners();
				initializeMobileMenu();
			}
		})
		.catch((error) => console.error("Error loading HTML:", error));
}

function initializeEventListeners() {
	// Get Discord elements
	const discordIcons = document.querySelectorAll(
		"#discord-icon, #discord-icon-mobile"
	);
	const discordModal = document.getElementById("discordModal");
	const closeButton = document.getElementById("close-btn");
	const copyButton = document.getElementById("copy-btn");
	const discordText = document.getElementById("discord-info-modal");

	// Open Discord Modal
	if (discordIcons.length && discordModal) {
		discordIcons.forEach((icon) => {
			icon.addEventListener("click", () => {
				discordModal.classList.remove("hidden");
			});
		});
	}

	// Close Modal
	if (closeButton) {
		closeButton.addEventListener("click", () => {
			discordModal.classList.add("hidden");
		});
	}

	// Copy Discord Tag
	if (copyButton && discordText) {
		copyButton.addEventListener("click", () => {
			navigator.clipboard.writeText(discordText.innerText).then(() => {
				copyButton.innerHTML =
					'<i class="fas fa-check text-green-500"></i> Copied!';
				setTimeout(() => {
					copyButton.innerHTML = "Copy";
				}, 2000);
			});
		});
	}
}

// Mobile Navigation Menu Toggle
function initializeMobileMenu() {
	const menuBtn = document.getElementById("menu-btn");
	const mobileMenu = document.getElementById("mobile-menu");

	if (menuBtn && mobileMenu) {
		menuBtn.addEventListener("click", () => {
			mobileMenu.classList.toggle("hidden");
		});
	}
}

document.addEventListener("DOMContentLoaded", () => {
	loadHTML("main_header.html", "header-placeholder");
});
