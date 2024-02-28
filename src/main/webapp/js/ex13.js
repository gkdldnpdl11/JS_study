const link=document.querySelector("#a");

/*요소명.addEventListener("이벤트명", (전달될 값)=>{실행구문});*/
link.addEventListener("click", (e)=>{
	/*alert("pushed");*/
	
	// 해당 이벤트의 기능을 동작하지 못하게 하는 것, 현재는 link 기능을 하지말라는 뜻과 동일
	e.preventDefault();
	console.log("pushed");
});

const box=document.querySelector("#box");
// 마우스가 영역에 왔을때 mouseenter
box.addEventListener("mouseenter", (e)=>{
	box.style.backgroundColor="pink";
});

// 마우스가 영역을 벗어날 때 mouseleave
box.addEventListener("mouseleave", (e)=>{
	box.style.backgroundColor="aqua";
});