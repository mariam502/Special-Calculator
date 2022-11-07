
const elements ={
  currentCalculation:document.querySelector("#current-calculation"),
  numbers:document.querySelectorAll(".numbers"),
  clear:document.querySelector("#clear")
};


function numberClicked(e){
  const button=e.target;
  const number= button.textContent;
  elements.currentCalculation.textContent+=number;
}

elements.numbers.forEach((element)=> {
  element.addEventListener("click", numberClicked);
});


elements.clear.addEventListener("click", () => {
  elements.currentCalculation.textContent = "" ;
});
