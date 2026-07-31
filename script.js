function openLetter(){

    document.getElementById("letter")
    .style.display="flex";

}


function closeLetter(){

    document.getElementById("letter")
    .style.display="none";

}


// Floating hearts animation

setInterval(()=>{

    let heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"%";

    heart.style.bottom="-20px";

    heart.style.fontSize=
    Math.random()*30+20+"px";

    heart.style.animation=
    "rise 5s linear";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },5000);


},300);
