let modeBtn=document.querySelector("#mode");
let currMode="Light"


modeBtn.addEventListener("click", ()=>{
console.log("You are trying to change mode")

if (currMode==="Light") {
  currMode="dark"
document.querySelector("body").style.backgroundColor="black"
} 
else {
  currMode="Light"
  document.querySelector("body").style.backgroundColor="White"

}
console.log(currMode);
});