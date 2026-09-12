const hearts = document.getElementById("hearts");
const intro = document.getElementById("intro");
const result = document.getElementById("result");
const yesBtn = document.getElementById("yesBtn");
const thinkBtn = document.getElementById("thinkBtn");
const backBtn = document.getElementById("backBtn");
const resultIcon = document.getElementById("resultIcon");
const resultKicker = document.getElementById("resultKicker");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const heartSymbols = ["♥", "♡", "💗", "💖", "💘"];

function spawnHeart(intense = false) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.setProperty("--size", `${intense ? 18 + Math.random() * 26 : 12 + Math.random() * 22}px`);
  heart.style.setProperty("--duration", `${intense ? 2.4 + Math.random() * 1.7 : 5 + Math.random() * 5}s`);
  heart.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
  heart.style.setProperty("--rotation", `${-45 + Math.random() * 90}deg`);

  hearts.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

const ambient = setInterval(() => spawnHeart(false), 650);

function celebrate() {
  for (let i = 0; i < 24; i++) {
    setTimeout(() => spawnHeart(true), i * 45);
  }
}

function showResult(type) {
  intro.classList.add("hidden");
  result.classList.remove("hidden");

  if (type === "yes") {
    resultIcon.textContent = "💗";
    resultKicker.textContent = "MISSÃO ATUALIZADA";
    resultTitle.textContent = "Então temos um encontro. 👀";
    resultText.textContent =
      "Agora falta só combinar o dia, o lugar e fingir que eu não fiquei nervoso fazendo esse site.";
    celebrate();
  } else {
    resultIcon.textContent = "🌷";
    resultKicker.textContent = "RESPOSTA REGISTRADA";
    resultTitle.textContent = "Justo. Sem pressão. :)";
    resultText.textContent =
      "A pergunta continua valendo, mas a resposta é sua. Quando e se quiser, a gente conversa.";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

yesBtn.addEventListener("click", () => showResult("yes"));
thinkBtn.addEventListener("click", () => showResult("think"));

backBtn.addEventListener("click", () => {
  result.classList.add("hidden");
  intro.classList.remove("hidden");
});

document.addEventListener("pointerdown", (event) => {
  // Pequeno toque visual no local do clique, sem bloquear a interação.
  if (event.target.closest(".btn")) return;
  for (let i = 0; i < 3; i++) {
    setTimeout(() => spawnHeart(true), i * 90);
  }
});
