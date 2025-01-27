function loadHTML(url, elementId) {
	fetch(url)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(elementId).innerHTML = data;
			const copyButton = document.getElementById("copy-btn");
			if (copyButton) {
				copyButton.addEventListener("click", copyToClipboard);
			}
		})
		.catch((error) => console.error("Error loading HTML:", error));
}

function copyToClipboard() {
	// Get the text field
	const copyText = document.getElementById("discord-info-modal");
	const copyButton = document.getElementById("copy-btn");

	if (copyText && copyButton) {
		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.innerText).then(() => {
			copyButton.innerHTML = '<i class="fas fa-check text-green-500"></i>'; // Tailwind-compatible styling
		});
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Load the navigation bar into the placeholder div
	loadHTML("main_header.html", "header-placeholder");
});
