function generateResume() {
  const skills = skillsEl.value.split(",");

  form.style.display = "none";
  output.style.display = "block";

  rName.textContent = nameEl.value;
  rRole.textContent = roleEl.value;
  rContact.textContent = `${locationEl.value} | ${emailEl.value} | ${phoneEl.value}`;
  rSummary.textContent = summaryEl.value;
  rExperience.textContent = experienceEl.value;
  rEducation.textContent = educationEl.value;
  rAchievements.textContent = achievementsEl.value;

  rLinks.innerHTML = `
    <a href="${linkedinEl.value}" target="_blank">LinkedIn</a>
    <a href="${githubEl.value}" target="_blank">GitHub</a>
    <a href="${leetcodeEl.value}" target="_blank">LeetCode</a>
    <a href="${codechefEl.value}" target="_blank">CodeChef</a>
  `;

  rSkills.innerHTML = skills
    .filter(s => s.trim())
    .map(s => `<li>${s.trim()}</li>`)
    .join("");

  rProject.innerHTML = `
    <b>${pname.value}</b> | ${ptech.value}<br>
    ${pduration.value}
    <ul><li>${pdesc.value}</li></ul>
  `;
}

function editAgain() {
  form.style.display = "block";
  output.style.display = "none";
}

function downloadPDF() {
  const resume = document.getElementById("resume2");

  html2pdf().set({
    margin: 0.2,
    filename: "My_Resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  }).from(resume).save();
}

/* ELEMENTS */
const form = document.getElementById("form-section");
const output = document.getElementById("resume-section");

const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const locationEl = document.getElementById("location");
const summaryEl = document.getElementById("summary");
const skillsEl = document.getElementById("skills");
const experienceEl = document.getElementById("experience");
const educationEl = document.getElementById("education");
const achievementsEl = document.getElementById("achievements");

const linkedinEl = document.getElementById("linkedin");
const githubEl = document.getElementById("github");
const leetcodeEl = document.getElementById("leetcode");
const codechefEl = document.getElementById("codechef");

const pname = document.getElementById("pname");
const ptech = document.getElementById("ptech");
const pduration = document.getElementById("pduration");
const pdesc = document.getElementById("pdesc");

const rName = document.getElementById("r-name");
const rRole = document.getElementById("r-role");
const rContact = document.getElementById("r-contact");
const rLinks = document.getElementById("r-links");
const rSummary = document.getElementById("r-summary");
const rSkills = document.getElementById("r-skills");
const rProject = document.getElementById("r-project");
const rExperience = document.getElementById("r-experience");
const rEducation = document.getElementById("r-education");
const rAchievements = document.getElementById("r-achievements");
