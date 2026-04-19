// =============================================
// 1. Welcome message
// =============================================
alert("Welcome to my portfolio! I hope you enjoy exploring my projects and learning more about me, Let's get started!");


// =============================================
// 2. About me button — shows/hides the text
// =============================================
const btn = document.getElementById("btn-about");
const text = document.getElementById("about-text");

btn.addEventListener("click", function() {
    if (text.style.display === "none") {
        text.style.display = "block";
        btn.textContent = "Click here!";
    } else {
        text.style.display = "none";
        btn.textContent = "Show more";
    }
});


// =============================================
// 3. Projects button — shows/hides the list
// =============================================
const btnProjects = document.getElementById("btn-projects");
const projectsList = document.querySelector("#Projects ul");

btnProjects.addEventListener("click", function() {
    if (projectsList.style.display === "none") {
        projectsList.style.display = "grid";
        btnProjects.textContent = "Hide projects";
    } else {
        projectsList.style.display = "none";
        btnProjects.textContent = "Show projects";
    }
});