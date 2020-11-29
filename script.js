const tabs = document.querySelectorAll("nav.tabs a.tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", (evt) => {
    evt.target.classList.add("active");
  });
});
