const tabs = document.querySelectorAll("nav.tabs a.tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", (evt) => {
    evt.target.classList.add("active");
  });
});

const isVisible = (elem) => {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 50 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const nav = document.querySelector(
  "section.profile-container header div.profile p span:last-child"
);

const navProfile = document.querySelector("div.nav-profile");

window.onscroll = () => {
  if (
    nav &&
    !isVisible(nav) &&
    window.matchMedia("(min-width: 768px)").matches
  ) {
    navProfile.classList.add("active");
  }
  if (
    nav &&
    isVisible(nav) &&
    window.matchMedia("(min-width: 768px)").matches
  ) {
    navProfile.classList.remove("active");
  }
};
