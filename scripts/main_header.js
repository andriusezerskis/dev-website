function copyToClipboard() {
	// Get the text field
	var copyText = document.getElementById("discord-info-modal");

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.innerText);
	console.log("Copied the text: " + copyText.innerText);
	// Alert the copied text
	alert("Copied the text: " + copyText.innerText);
}

document.addEventListener("DOMContentLoaded", function () {
	console.log("Loaded");
	copyButton = document.getElementById("copy-btn");
	copyButton.addEventListener("click", copyToClipboard);
});
