/* COUNTDOWN */

const loader = document.getElementById("loader");
const countEl = document.getElementById("count");
const loadingText =
document.getElementById("loadingText");

/* FIRST 5 SEC LOADING */

setTimeout(()=>{

loadingText.style.display = "none";

countEl.style.display = "block";

let count = 3;

countEl.innerText = count;

const interval = setInterval(()=>{

count--;

if(count > 0){

countEl.innerText = count;

}else{

clearInterval(interval);

loader.classList.add("hidden");

}

},1000);

},5000);

/* HAPPY SCREEN AUTO HIDE */

setTimeout(()=>{

document
.getElementById("happyScreen")
.classList.add("hide");

},18000);


/* SKIP BUTTON */

function skipIntro(){

document
.getElementById("happyScreen")
.classList.add("hide");

}

/* SCROLL */

function scrollToSection(){

document
.getElementById("nextSection")
.scrollIntoView({
behavior:"smooth"
});

}



/* MUSIC START */

const bgMusic =
document.getElementById("bgMusic");

const mainMusic =
document.getElementById("mainMusic");

document.addEventListener(
"mousemove",
()=>{

bgMusic.play();

},
{ once:true }
);

/* MAIN MUSIC */

mainMusic.addEventListener(
"play",
()=>{

bgMusic.pause();

}
);

mainMusic.addEventListener(
"pause",
()=>{

bgMusic.play();

}
);

mainMusic.addEventListener(
"ended",
()=>{

bgMusic.play();

}
);



