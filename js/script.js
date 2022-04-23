const faq = document.getElementById("faq");
const faqContainerAll = Array.from(document.querySelectorAll(".faq-container"));

faq.addEventListener("click", (event) => {
	const faqContainer = event.target.closest(".faq-container");

	faqContainerAll.forEach((container) => {
		if (container !== faqContainer) {
			container.classList.remove("active");
		}
	});

	if (faqContainer) {
		faqContainer.classList.toggle("active");
	}
});
