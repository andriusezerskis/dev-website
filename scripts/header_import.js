function loadHTML(url, elementId) {
	fetch(url)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(elementId).innerHTML = data;
			var copyButton = document.getElementById("copy-btn");
			copyButton.addEventListener("click", copyToClipboard);
		})
		.catch((error) => console.error("Error loading HTML:", error));
}

function copyToClipboard() {
	// Get the text field
	var copyText = document.getElementById("discord-info-modal");
	var copyButton = document.getElementById("copy-btn");

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.innerText).then(() => {
		copyButton.innerHTML = '<i class="fas fa-check green-checkmark"></i>';
	});
}

document.addEventListener("DOMContentLoaded", function () {
	// Load the navigation bar into the placeholder div
	loadHTML("main_header.html", "header-placeholder");
});
