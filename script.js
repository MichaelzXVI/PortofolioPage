function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const allSections = document.querySelectorAll(".section");
const sectionsReveal = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) entry.target.classList.remove("section--hidden");
};

const sectionsObserver = new IntersectionObserver(sectionsReveal, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((section) => {
  sectionsObserver.observe(section);
  section.classList.add("section--hidden");
});
