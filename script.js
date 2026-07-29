// ===============================
// Music Continuation
// ===============================


window.addEventListener("load",()=>{


let music=document.getElementById("music");


if(music){


music.volume=0.4;



let savedTime=sessionStorage.getItem("musicTime");



if(savedTime){

music.currentTime=parseFloat(savedTime);

}




if(sessionStorage.getItem("musicStarted")==="true"){


music.play().catch(()=>{});


}





setInterval(()=>{


sessionStorage.setItem(
"musicTime",
music.currentTime
);


},1000);



}



});







// ===============================
// Loading Animation
// ===============================


let texts=[

"Loading Memories...",

"Finding Mukilluuu...",

"❤️ Friend Found"

];



let index=0;



function loading(){


let text=document.getElementById("loadingText");



if(text && index<texts.length){


text.innerHTML=texts[index];


index++;


setTimeout(loading,1500);


}

else if(text){


document.querySelector(".loader").style.display="none";


document.querySelector(".home").style.display="flex";


}


}


loading();







// ===============================
// Start Story
// ===============================


function startStory(){


let music=document.getElementById("music");



if(music){


music.volume=0.4;


music.play();


sessionStorage.setItem(
"musicStarted",
"true"
);


}



window.location.href="story.html";


}







// ===============================
// Envelope
// ===============================


function openLetter(){


let envelope=document.querySelector(".envelope");


if(envelope){

envelope.classList.add("open");

}



setTimeout(()=>{


let letter=document.querySelector(".letter");


if(letter){


letter.style.display="block";


typeWriter();


}


},1000);


}







// ===============================
// Letter Typing
// ===============================


let message=`Thank you for becoming such an important part of my life.

From strangers on LinkedIn to someone I cannot imagine my days without...

We fight.
We argue.
We annoy each other.

But somehow,
we always come back and talk again.

Thank you for all the care,
the laughs,
and the memories.

I love your smile and those amazing teeth.
They are honestly one of my favourite things about you. 😄

I hope this friendship stays forever.

Happy Birthday Mukilluuu ❤️

— Nethiyasree`;



let count=0;



function typeWriter(){


let text=document.getElementById("letterText");



if(text && count<message.length){


text.innerHTML+=message.charAt(count);


count++;


setTimeout(typeWriter,40);


}

else{

fireworks();

}


}







// ===============================
// Hearts
// ===============================


function createHeart(){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},6000);


}



setInterval(createHeart,700);







// ===============================
// Particles
// ===============================


function createParticles(){


let particle=document.createElement("div");


particle.className="particle";


particle.style.left=Math.random()*100+"vw";


document.body.appendChild(particle);



setTimeout(()=>{


particle.remove();


},8000);


}



setInterval(createParticles,500);







// ===============================
// Fireworks
// ===============================


function fireworks(){


for(let i=0;i<50;i++){


let fire=document.createElement("div");


fire.className="firework";


fire.innerHTML="✨";


fire.style.left=Math.random()*100+"vw";


fire.style.top=Math.random()*80+"vh";



document.body.appendChild(fire);



setTimeout(()=>{

fire.remove();

},2000);



}


}




if(window.location.pathname.includes("final")){


setTimeout(fireworks,1000);


}