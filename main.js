
const currentCalculation=document.querySelector("#current-calculation");
const clear=document.querySelector("#clear");
const numbers=document.querySelectorAll(".numbers");
const point=document.querySelector("#point");
const sign=document.querySelectorAll(".sign");
const equal=document.querySelector("#equal");

function numberClicked(e){
  const button=e.target;
  const number= button.textContent;
  currentCalculation.textContent+=number;
}


numbers.forEach((element)=> {
  element.addEventListener("click", numberClicked);
});


clear.addEventListener("click", () => {
  currentCalculation.textContent = "" ;
});


point.addEventListener("click", () => {
  const LastNumber=currentCalculation.textContent.slice(-1);
  if (LastNumber!=="."){
  currentCalculation.textContent += "." ;}
});

numbers.forEach((element)=> {
  element.addEventListener("click", numberClicked);
});



sign.forEach((element)=> {
  element.addEventListener("click", numberClicked);
});


equal.addEventListener("click", () => {

  const text =currentCalculation.textContent;
  let result;
  let first;
  let second;
  let currentSign;
  for (const letter of text.split("")){

    if (first === undefined){
      first=letter;

    } else if(currentSign === undefined){
      currentSign=letter;

    } else if(second === undefined){
      second = letter;
    }

    if(first !== undefined &&
       currentSign !== undefined&&
       second !== undefined){
         currentCalculation.textContent={
           "+":parseInt(first)+parseInt(second),
           "*":parseInt(first)*parseInt(second),
           "/":parseInt(first)/parseInt(second),
           "-":parseInt(first)-parseInt(second),
         }[currentSign];
       }
  }
});
