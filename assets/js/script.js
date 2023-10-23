let projects = $(".borderEffectOne").toArray();

let descriptions = $("#projectDescriptionOne").toArray();

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.intersectionRatio);
    })
  },
  {
    threshold: 0,
    rootMargin: "-90px"
  }
)
//need to convert projects to an array instad of a jquery object

projects.forEach(project => {
  observer.observe(project)
});

descriptions.forEach(description => {
  observer.observe(description)
});
