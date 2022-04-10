const questionContainer = Array.from(document.querySelectorAll(".faq-question-container"));

questionContainer.forEach((container) => {
	container.addEventListener("click", (event) => {
		event.target.parentElement.parentElement.classList.toggle("active");
	});
});
