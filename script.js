const image = document.getElementById("image");
const sad = document.querySelector('#sad');
const happy = document.querySelector('#happy');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const music = document.querySelector('#music');
const preorder = document.querySelector('.preorder');
const video = document.querySelector('video');
const scroll = document.querySelector('.scrolldown');
const spice1 = document.querySelector('#spice1');
const bgsong = document.querySelector('#backsong');
const ul = document.querySelector('ul');
const mediasp = matchMedia('(max-width: 400px)');
const mediamp = matchMedia('(max-width: 575px)');
const medialp = matchMedia('(min-height: 740px)');
const mediamidlap = matchMedia('(min-height: 786px) and (max-height: 1099px)');
const medialarglap = matchMedia('(min-height: 1100px) and (max-height: 1555px)');
var scrollAmount
if (mediasp.matches == true) {
		scrollAmount = 50;
}
else if (mediamp.matches == true) {
	  scrollAmount = 180;
}
else{
	  scrollAmount = 50;
}
if (medialp.matches == true & mediamp.matches == true){
	 scrollAmount = 195;
}
if (mediamidlap.matches) {
	 scrollAmount = 175;
}
else if (medialarglap.matches) {
	 scrollAmount = 320;
}
window.addEventListener("scroll",(event) => {
	const { top } = image.getBoundingClientRect();
	if (top < scrollAmount) {
		ul.style.opacity = 1;
		bgsong.play();
		video.play();
		scroll.style.opacity = 0;
    video.style.opacity = 1;
		sad.style.opacity = 0;
		happy.style.opacity = 0;
		h1.style.color= "#ff0000";
		h1.style.opacity= 1;
		spice1.style.opacity= 0;
		spice1.style.position="fixed";
		music.style.color= "white";
		body.setAttribute("style","animation: animate 0ms ease-in-out;")
		body.style.backgroundColor= "black";
		preorder.setAttribute("style","animation: come 1000ms ease-out;")
		if (mediasp.matches == true) {
			video.style.top = "20%";
		}
		else if (mediamp.matches == true) {
			video.style.top = "15%";
		}
		else {
			happy.style.top = "25%";
		}
}
		else {
			ul.style.opacity = 0;
			bgsong.pause();
			video.pause();
		scroll.style.opacity = 1;
    video.style.opacity = 0;
		sad.style.opacity = 0;
		happy.style.opacity = 0;
		spice1.style.opacity= 1;
		body.style.backgroundColor= "white";
		body.style.animation= "ease-in-out";
		music.style.animation= "ease-in-out";
		preorder.style.animation= "ease-in-out";
		music.style.color= "white";
		h1.style.opacity= 0;
			// sad.style.top= "40%";
	}
});
