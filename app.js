const btn = document.querySelector("#the_only_button");
let txt = 0;
const divMaker = () => {
  console.log("pp");
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  txt++;
  newDiv.textContent = txt;
  if (txt % 5 === 0) {
    newDiv.classList.add("circle");
  }
};
btn.addEventListener("click", divMaker);
