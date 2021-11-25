const allFields = document.querySelectorAll("[single-field]");

let alertBruh = () => {
  alert("Bruh");
}

const getIndex = (field) => {
  console.log(allFields.indexOf(field));
  return allFields.indexOf(field);
}

allFields.forEach(field => {
  field.addEventListener("mouseenter", () => {
    // alertBruh();
    getIndex(field);
  });
  console.log(field.style.backgroundColor);
});