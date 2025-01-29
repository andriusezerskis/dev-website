document.addEventListener("DOMContentLoaded", () => {
	const education = [
		{
			degree: "Master of Science in Computer Science",
			institution: "University of Brussels",
			period: "2024 - Present",
			details: "Specialization in AI and data science",
		},
		{
			degree: "Bachelor of Science in Computer Science",
			institution: "University of Brussels",
			period: "2021 - Present",
			details: "3 courses left",
		},
	];

	const timelineContainer = document.getElementById("timeline-container");

	if (!timelineContainer) return;

	education.forEach((item) => {
		// Timeline item wrapper (right aligned)
		const timelineItem = document.createElement("div");
		timelineItem.className =
			"relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full items-end";

		const date = document.createElement("div");
		date.className =
			"flex-shrink-0 text-center bg-green-500 text-white rounded-full p-4 font-semibold w-32 h-32 flex items-center justify-center shadow-md relative";
		date.textContent = item.period;

		const content = document.createElement("div");
		content.className =
			"flex flex-col bg-white border border-gray-300 p-6 rounded-lg shadow-md w-full max-w-3xl text-left";

		// Degree Title
		const degree = document.createElement("h4");
		degree.className = "text-blue-600 font-bold text-xl mb-2";
		degree.textContent = item.degree;

		// Institution Name
		const institution = document.createElement("p");
		institution.className = "text-gray-500 font-medium text-sm mb-1";
		institution.textContent = item.institution;

		// Education details
		const details = document.createElement("p");
		details.className = "text-gray-600 text-sm";
		details.textContent = item.details;

		content.appendChild(degree);
		content.appendChild(institution);
		content.appendChild(details);

		timelineItem.appendChild(date);
		timelineItem.appendChild(content);

		timelineContainer.appendChild(timelineItem);
	});
});
