function generateResume() {
  const name = document.getElementById("name").value || "Your Name";
  const email = document.getElementById("email").value || "";
  const phone = document.getElementById("phone").value || "";
  const location = document.getElementById("location").value || "";
  const summary = document.getElementById("summary").value || "";
  const skills = document.getElementById("skills").value.split(",");
  const education = document.getElementById("education").value || "";
  const experience = document.getElementById("experience").value || "";
  const achievements = document.getElementById("achievements").value || "";
  const volunteering = document.getElementById("volunteering").value || "";

  document.getElementById("r-name").textContent = name;
  document.getElementById("r-contact").textContent = `${location} | ${email} | ${phone}`;
  document.getElementById("r-summary").textContent = summary;

  const skillsList = document.getElementById("r-skills");
  skillsList.innerHTML = "";
  skills.forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    }
  });

  document.getElementById("r-education").textContent = education;
  document.getElementById("r-experience").textContent = experience;
  document.getElementById("r-achievements").textContent = achievements;
  document.getElementById("r-volunteering").textContent = volunteering;

  document.getElementById("form-section").style.display = "none";
  document.getElementById("resume-section").style.display = "block";
}

function editAgain() {
  document.getElementById("form-section").style.display = "block";
  document.getElementById("resume-section").style.display = "none";
}

function clearForm() {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
}

function downloadPDF() {
  const resume = document.getElementById("resume");
  const opt = {
    margin: 0.5,
    filename: "My_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(resume).save();
}
