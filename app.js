const btn = document.querySelector("#the_only_button");
const newDiv = document.createElement("div");
let txt = 0;

const squareMaker = () => {
  console.log("pp");
  document.body.appendChild(newDiv);

  txt++;
  if (txt % 5 === 0) {
    newDiv.classList.remove("square");
    newDiv.classList.add("circle");
  } else {
    newDiv.classList.add("square");
    newDiv.classList.remove("circle");
  }
};
btn.addEventListener("click", squareMaker);
