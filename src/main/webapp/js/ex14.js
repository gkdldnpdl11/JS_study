const result=document.querySelector("#result");

const btn1=document.querySelector("#btn1");
btn1.addEventListener("click", (e)=>{
	result.style.backgroundColor="green";
});
const btn2=document.querySelector("#btn2");
btn2.addEventListener("click", (e)=>{
	result.style.backgroundColor="orange";
});
const btn3=document.querySelector("#btn3");
btn3.addEventListener("click", (e)=>{
	result.style.backgroundColor="purple";
});

function changBg(color){
	result.style.backgroundColor=color;
}
