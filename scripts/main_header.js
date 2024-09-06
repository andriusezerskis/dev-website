document
	.getElementById("discord-icon")
	.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default action of the link
		const discordInfo = document.getElementById("discord-info");
		if (discordInfo.style.display === "none") {
			discordInfo.style.display = "block";
		} else {
			discordInfo.style.display = "none";
		}
	});
