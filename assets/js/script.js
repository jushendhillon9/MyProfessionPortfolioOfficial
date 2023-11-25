const projectsOne = $(".borderEffectOne").toArray();
const projectsTwo = $(".borderEffectTwo").toArray();
const projectsThree = $(".borderEffectThree").toArray();
const descriptionsOne = $("#projectDescriptionOne").toArray();
const descriptionsTwo = $("#projectDescriptionTwo").toArray();
const descriptionsThree = $("#projectDescriptionThree").toArray();

document.addEventListener("DOMContentLoaded", function() {
  // Check if the page is being loaded or refreshed
  const isReloaded = sessionStorage.getItem('isReloaded');
  if (isReloaded) {
    // Perform the scroll to the top after a small delay
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 10);
  }

  // Set sessionStorage to true if the page is reloaded
  sessionStorage.setItem('isReloaded', 'true');
});

window.addEventListener('beforeunload', function() {
  // Clear sessionStorage when leaving the page
  sessionStorage.removeItem('isReloaded');
});

// Disable scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show");
    })
  },
  {
    threshold: 0,
    rootMargin: '0px', // top right bottom left
  }
)
//need to convert projects to an array instad of a jquery object

projectsOne.forEach(project => {
  observer.observe(project)
});

projectsTwo.forEach(project => {
  observer.observe(project)
});

projectsThree.forEach(project => {
  observer.observe(project)
});

descriptionsOne.forEach(description => {
  observer.observe(description)
});

descriptionsTwo.forEach(description => {
  observer.observe(description)
});

descriptionsThree.forEach(description => {
  observer.observe(description)
});

const formatMySkills = () => {
  const sectionOne = $("#skillsSectionOne");
  const sectionTwo = $("#skillsSectionTwo");
  const linebreak = $("<div>").addClass("linebreak");
  const linebreakTwo = $("<div>").addClass("linebreak");
  const linebreakOneExists = sectionOne.next().hasClass("linebreak");
  if (window.outerWidth < 425) {
    if (!linebreakOneExists) {
      sectionOne.after(linebreak);
      sectionTwo.after(linebreakTwo);
    }
  }
  else {
    if (linebreakOneExists) {
      sectionOne.next().remove();
      sectionTwo.next().remove();
    }
  }
}


$(window).on("resize", formatMySkills)
$(window).on("load", formatMySkills)



const breakpointWidth = 1237;
let count = 1;
let formatChallengeGroupings = () => {
  const challengeDescriptions = $(".challengeDescription");
  const moduleChallengeGroupings = $(".moduleChallengeGroupings");

  if (window.innerWidth <= breakpointWidth) {
    count = 0;
    challengeDescriptions.each((index, challengeDescription) => {
      let currentText = $(challengeDescription).text();
      currentText = currentText.replace(/<br>/g, "");
      $(challengeDescription).text(currentText);
    });

    moduleChallengeGroupings.find(".linebreak").remove();
  } else {
    if (count === 0) {
      count = 1;
      challengeDescriptions.each((index, challengeDescription) => {
        let updatedHtml = $(challengeDescription).html().replace("leading", "leading<br>");
        $(challengeDescription).html(updatedHtml);
      });
      let allVideoAnchors = $(".videosAnchorTag");
      allVideoAnchors.each((index, element) => {
        let linebreak = $("<div>").addClass("linebreak");
        $(element).children().eq(2).after(linebreak);
      })
    }
  }
};

$(window).on("resize", formatChallengeGroupings)
$(window).on("load", formatChallengeGroupings)

const contactMeButton = $("#contactMeButton");
const successMessage = $(".successMessage");
contactMeButton.on("click", (event) => {
  const input1 = $("#contactInput1").val().trim()
  const input2 = $("#contactInput2").val().trim()
  const input3 = $("#contactInput3").val().trim()
  event.preventDefault();

  if (input1 === "" || input2 === "" || input3 === "") {
    return;
  }
  else {
    successMessage.addClass("show");
    $("#contactInput1").val("");
    $("#contactInput2").val("");
    $("#contactInput3").val("");
    setTimeout(() => {
      successMessage.removeClass("show")
    }, 3000)
  }
})

const contactMeBreakpoint = 750;
let contactMeCount = 0;
const contactMeReformat = () => {
  const devToLogo = $("#devToLogo");
  const linebreak = $("<div>").addClass("linebreak");
  if (window.innerWidth < contactMeBreakpoint) {
    if (contactMeCount == 0) {
      contactMeCount = 1;
      devToLogo.after(linebreak);
    }
  }
  else {
    if (contactMeCount === 1) {
      contactMeCount = 0;
      devToLogo.next().remove();
    }
  }
}
$(window).on("resize", contactMeReformat)
$(window).on("load", contactMeReformat)


