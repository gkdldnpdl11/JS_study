/* 아이디를 이용한 호출 */
const open1=document.querySelector("#open");
open1.addEventListener("click", (e)=>{
	document.querySelector("#desc").style.display="block";
	document.querySelector("#open").style.display="none";
});

const close1=document.querySelector("#close");
close1.addEventListener("click", (e)=>{
	document.querySelector("#desc").style.display="none";
	document.querySelector("#open").style.display="block";
});

/* 함수를 이용한 호출
function showDetail(){
	document.querySelector("#desc").style.display="block";
	document.querySelector("#open").style.display="none";
}

function hiddenDetail(){
	document.querySelector("#desc").style.display="none";
	document.querySelector("#open").style.display="block";
}
*/

const res=document.querySelector("#res");

const btnplus=document.querySelector("#btnplus");
btnplus.addEventListener("click",(e)=>{
	/*res.innerHTML++;*/
	let k=document.querySelector("#res").innerHTML;
	k++;
	document.querySelector("#res").innerHTML =k;
});

const btnminus=document.querySelector("#btnminus");
btnminus.addEventListener("click",(e)=>{
	res.innerHTML--;
});
