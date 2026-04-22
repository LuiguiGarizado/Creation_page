alert("Hi! Welcome to my portfolio. I hope you enjoy checking out my work. let's get started!");

const aboutBtn = document.getElementById("btn-about");
const aboutText = document.getElementById("about-text");

aboutBtn.addEventListener("click", function() {
    if (aboutText.style.display === "none") {
        aboutText.style.display = "block";
        aboutBtn.textContent = "Show less";
    } else {
        aboutText.style.display = "none";
        aboutBtn.textContent = "Learn more about me";
    }
});

const projectsBtn = document.getElementById("btn-projects");
const projectsList = document.querySelector("#Projects ul");
const projectsDesc = document.getElementById("projects-description");

const shortDesc = "Here are some of the projects I have worked on:";
const longDesc = "In these projects, I've used Python, HTML, CSS, and JS. These tasks helped me improve my logic and web design skills.";

projectsBtn.addEventListener("click", function() {
    if (projectsList.style.display === "grid") {
        projectsList.style.display = "grid";
        projectsDesc.textContent = longDesc;
        projectsBtn.textContent = "Hide details";
    } else {
        projectsList.style.display = "grid";
        projectsDesc.textContent = shortDesc;
        projectsBtn.textContent = "Show projects";
    }
});
