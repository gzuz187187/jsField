const allFields = document.querySelectorAll("[single-field]");

// setup fields, else e.target.backgroundColor = <empty string>
allFields.forEach(field => {
  field.style.backgroundColor = "rgb(255, 255, 255)";
});

const recolorField = (e) => {
  let currentColor = e.target.style.backgroundColor;
  
  if (currentColor == "rgb(255, 255, 255)") {
    e.target.style.backgroundColor = "rgb(0, 255, 0)";
  }

  if (currentColor == "rgb(0, 255, 0)") {
    e.target.style.backgroundColor = "rgb(0, 0, 255)";
  }

  if (currentColor == "rgb(0, 0, 255)") {
    e.target.style.backgroundColor = "rgb(255, 0, 0)";
  }

  if (currentColor == "rgb(255, 0, 0)") {
    e.target.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

allFields.forEach(field => {
  field.addEventListener("mouseenter", (e) => {
    recolorField(e);
  });
});