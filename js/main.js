function changeTheme() {
	const toggle = $("#lightmode").get(0);
	const body = document.querySelector("body");

	toggle.addEventListener("click", function() {
		this.classList.toggle("bi-brightness-high-fill");
		if (this.classList.toggle("bi-moon-fill")) {
			$("#theme-light").prop("disabled", false);
			$("#theme-dark").prop("disabled", true);
		} else {
			$("#theme-light").prop("disabled", true);
			$("#theme-dark").prop("disabled", false);
		}
	})
}