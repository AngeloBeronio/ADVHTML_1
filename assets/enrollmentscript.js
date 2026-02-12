document.addEventListener("DOMContentLoaded", () => {
  const levelSelect = document.getElementById("level");
  const programLevel = document.getElementById("programLevel");

  if (!levelSelect || !programLevel) return;

  levelSelect.addEventListener("change", function () {
    const selectedLevel = this.value;

    programLevel.innerHTML = "";

    if (!selectedLevel) {
      programLevel.disabled = true;
      programLevel.innerHTML = `<option value="">Select school level first</option>`;
      return;
    }

    programLevel.disabled = false;

    let options = "";

    if (selectedLevel === "Preschool") {
      options = `
        <option value="" disabled selected>Select preschool program</option>
        <option value="Kindergarten">Kindergarten</option>
        <option value="Preparatory">Preparatory</option>
      `;
    }

    else if (selectedLevel === "Grade School") {
      options = `<option value="" disabled selected>Select grade level</option>`;
      for (let i = 1; i <= 6; i++) {
        options += `<option value="Grade ${i}">Grade ${i}</option>`;
      }
    }

    else if (selectedLevel === "High School") {
      options = `<option value="" disabled selected>Select year level</option>`;
      for (let i = 7; i <= 12; i++) {
        options += `<option value="Grade ${i}">Grade ${i}</option>`;
      }
    }

    programLevel.innerHTML = options;
  });
});