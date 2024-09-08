function loadHTML(url, elementId, callback) {
	fetch(url)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(elementId).innerHTML = data;
			if (callback) callback();
		})
		.catch((error) => console.error("Error loading HTML:", error));
}

document.addEventListener("DOMContentLoaded", function () {
	/*
        // Import header
        fetch("main_header.html")
            .then((response) => response.text())
            .then((data) => {
                document.getElementById("header-placeholder").innerHTML = data;
                // Import header JS
                const script = document.createElement("script");
                script.src = "../scripts/main_header.js";
                document.head.appendChild(script);
            });
    */

	// Load the navigation bar into the placeholder div
	loadHTML("main_header.html", "header-placeholder", function () {
		// This code runs after the HTML content is loaded
		const script = document.createElement("script");
		script.src = "../scripts/main_header.js";
		script.defer = true;
		document.body.appendChild(script);
	});
});
