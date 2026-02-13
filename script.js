let step = 0;
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const music = document.getElementById("bgMusic");

const messages = [
  "Hey… I’ve been meaning to tell you something 💌",
  "Every time you smile, my whole day lights up ✨",
  "So I thought I should be brave today…",
  "Will you be my Valentine? ❤️"
];

function typeMessage(msg, i = 0){
  if(i < msg.length){
    text.innerHTML += msg.charAt(i);
    setTimeout(() => typeMessage(msg, i + 1), 45);
  }
}

function nextStep(){
  text.innerHTML = "";
  typeMessage(messages[step]);

  if(step === 0){
    music.play();
  }

  if(step === 3){
    btn.innerHTML = "YES 💖";
    btn.onclick = yesAnswer;

    const noBtn = document.createElement("button");
    noBtn.innerHTML = "No 🙈";
    noBtn.style.marginLeft = "10px";
    noBtn.onclick = noAnswer;
    document.querySelector(".card").appendChild(noBtn);
  }

  step++;
}

function yesAnswer(){
  document.getElementById("screen").innerHTML = `
    <h1>  𝓘 𝓛𝓞𝓥𝓔 𝓨𝓞𝓤 𝓜𝓨 𝓒𝓤𝓣𝓘𝓔𝓟𝓘𝓔 𝓢𝓐𝓝𝓤🤏</h1>
    <p>You just made my heart very happy 🥰</p>
    <p>Happy Valentine’s Day 💌</p>
  `;
}

function noAnswer(){
  alert("That’s okay 😊 I just wanted to make you smile 💖");
}

setInterval(()=>{
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},350);

const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(()=>{
  index = (index + 1) % images.length;
  slide.src = images[index];
},2500);
