let step = 0;
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const music = document.getElementById("music");

const messages = [
  "Hey… I’ve been meaning to tell you something 💌",
  "Every time you smile, my day gets better 🥺",
  "So I thought I should be honest with you…",
  "Will you be my Valentine? ❤️"
];

function typeMessage(msg, i = 0) {
  if (i < msg.length) {
    text.innerHTML += msg.charAt(i);
    setTimeout(() => typeMessage(msg, i + 1), 50);
  }
}

function nextStep() {
  text.innerHTML = "";
  typeMessage(messages[step]);

  if (step === 0) {
    music.play();
  }

  if (step === 3) {
    btn.innerHTML = "YES 💖";
    btn.onclick = yesAnswer;

    const noBtn = document.createElement("button");
    noBtn.innerHTML = "No 🙈";
    noBtn.onclick = noAnswer;
    document.querySelector(".container").appendChild(noBtn);
  }

  step++;
}

function yesAnswer() {
  document.getElementById("screen").innerHTML = `
    <h1>YAYYYY 💕🎉</h1>
    <p>You just made me the happiest person 🥰</p>
  `;
}

function noAnswer() {
  alert("That’s okay 😊 I just wanted to make you smile today 💖");
}

/* Auto hearts */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);
