document.addEventListener("DOMContentLoaded",function(){
	var body=document.body;
	setInterval(creatMulStar,50)
	function creatMulStar(){
		var color=["#ff6600","#ff0000","#880000","#ff9933","#ff3300","#ff3366"]
		var pos=Math.random() * screen.height;
		var star=document.createElement("div");
		star.classList.add("star")
		body.appendChild(star);
		var top= Math.floor(Math.random() * screen.height);
		star.style.top=top +"px";
		star.style.background=color[Math.floor(Math.random() *5)]

		setInterval(movestar,10)

		function movestar(){
			if(pos>=screen.width)
				star.remove();
			pos+=3;
			star.style.right=pos +"px";
				
		}
}
})