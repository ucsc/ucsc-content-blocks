const expandCollapses = document.querySelectorAll('.expand-collapse');
if (expandCollapses) expandCollapses.forEach((expandCollapse) => {
	expandCollapse.addEventListener('click', () => {
		const currentAction = expandCollapse.getAttribute("id");
		if (currentAction === 'expand') {
			expandCollapse.setAttribute("id", 'collapse');
			expandCollapse.innerHTML = "Collapse All";
		} else {
			expandCollapse.setAttribute("id", 'expand');
			expandCollapse.innerHTML = "Expand All";
		}

		expandCollapse.parentElement.querySelectorAll('details').forEach((accItem, i) => {
			if (currentAction === 'expand') {
				accItem.setAttribute("open", true);
			} else {
				accItem.removeAttribute("open");
			}
		});
	});
});

const details = document.querySelectorAll(".accordion-wrapper details");
if (details) details.forEach((detail) => {
	detail.addEventListener("toggle", (e) => {
		const currentAccWrapper = e.target.parentElement.parentElement;
		const expandCollapse = currentAccWrapper.querySelector('.expand-collapse');
		const currentAction = expandCollapse.getAttribute("id");

		if (currentAction === "expand") {
			if (allOpen(currentAccWrapper)) {
				expandCollapse.setAttribute("id", 'collapse');
				expandCollapse.innerHTML = "Collapse All";
			}
		} else {
			if (allClosed(currentAccWrapper)) {
				expandCollapse.setAttribute("id", 'expand');
				expandCollapse.innerHTML = "Expand All";
			}
		}
	});
})

function allOpen(currentAccWrapper) {
	let allOpenRet = true;
	currentAccWrapper.querySelectorAll("details").forEach((detail) => {
		if (!detail.open) allOpenRet = false;
	});
	return allOpenRet;
}

function allClosed(currentAccWrapper) {
	let allClosedRet = true;
	currentAccWrapper.querySelectorAll("details").forEach((detail) => {
		if (detail.open) allClosedRet = false;
	});
	return allClosedRet;
}
