function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var projectsBtn = document.getElementById("projectsBtn");
    var memberImg = document.getElementById("memberImg");
    var skillsImg = document.getElementById("skillsImg");
    var projectsImg = document.getElementById("projectsImg");
    var memberText = document.getElementById("memberText");
    var skillsText = document.getElementById("skillsText");
    var projectsText = document.getElementById("projectsText");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    memberBtn.style.backgroundColor = "#f5f5f5";
    skillsBtn.style.backgroundColor = "#e5e5e5";
    projectsBtn.style.backgroundColor = "#e5e5e5";
    memberImg.style.display = "block";
    skillsImg.style.display = "none";
    projectsImg.style.display = "none";
    memberText.style.display = "block";
    skillsText.style.display = "none";
    projectsText.style.display = "none";
}