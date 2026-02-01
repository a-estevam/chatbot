// ================= CONFIGURAÇÕES FIXAS =================

const avatarName = "Papagaio da Segurança";
const avatarImg = "./img/avatar.png";

// ✅ API Google Sheets (WEB APP ATUAL)
const API_URL =
  "https://script.google.com/macros/s/AKfycbx_JC8wWehF2hZ6laBWcGOy4nbpUp3rn9czgh5PP-mOjY400qVLbsbzo5juKLPFoRjtxQ/exec?action=Read";

// ================= SEÇÕES =================

const sec1 = document.querySelector(".sec01");
const sec2 = document.querySelector(".sec02");
const sec3 = document.querySelector(".sec03");

// ================= DADOS DINÂMICOS =================

let visitorName = "Visitante";
let steps = {};

// ================= UTIL =================

function scrollToSection(sec) {
  sec.scrollIntoView({ behavior: "smooth" });
}

// ================= BUSCAR DADOS DA PLANILHA =================

async function carregarDados() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();

    console.log("RETORNO API:", result);

    if (!Array.isArray(result) || result.length === 0) {
      throw new Error("Planilha vazia");
    }

    // 👉 Permite escolher a linha via ?x=
    const params = new URLSearchParams(window.location.search);
    let x = parseInt(params.get("x"), 10);

    if (isNaN(x) || x < 0 || x >= result.length) {
      x = 0;
    }

    const item = result[x];

    // 🔹 NOME DO VISITANTE (vem do formulário)
    visitorName = item.Nome || "Visitante";

    // 🔹 STEPS (EXATAMENTE como estão na planilha)
    steps = {
      step01: item.step01,
      step02: item.step02,
      step03: item.step03,
      step04: item.step04,
      step05: item.step05,
      step06: item.step06,
      step07: item.step07,
      step08: item.step08,
      step09: item.step09,
      step10: item.step10,
      step11: item.step11,
      step12: item.step12,
      step13: item.step13,
      step14: item.step14,
      step15: item.step15
    };

    iniciarChat();

  } catch (error) {
    console.error("ERRO:", error);
    sec1.innerHTML = "<p>Erro ao carregar chatbot</p>";
  }
}

// ================= CHATBOT =================

function iniciarChat() {
  textSec1();
}

function textSec1() {
  sec1.innerHTML = `
    <div class="flex">
      <img class="avatar" src="${avatarImg}">
      <div class="pergunta">
        <p>
          <b>${avatarName}</b><br>
          Olá 👋 ${visitorName}, eu sou o ${avatarName} e estou muito feliz
          em dar início à nossa campanha
          <b>Aprendeu, Repetiu e Agiu!</b>
        </p>
      </div>
    </div>
  `;
  scrollToSection(sec1);
  setTimeout(textSec2, 2000);
}

function textSec2() {
  sec2.innerHTML = `
    <div class="flex">
      <img class="avatar_blank" src="./img/avatar_blank.png">
      <div class="pergunta">
        <p><b>${avatarName}</b></p>
        ${steps.step02 ? `<iframe src="${steps.step02}" width="400" height="500" style="border: none;"></iframe>` : ""}
      </div>
    </div>
  `;
  scrollToSection(sec2);
  setTimeout(textSec3, 2000);
}


function textSec3() {
  sec3.innerHTML = `
    <div class="flex">
      <img class="avatar_blank" src="./img/avatar_blank.png">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>${steps.step03 || ""}</p>
      </div>
    </div>
  `;
  scrollToSection(sec3);
}

// ================= START =================

setTimeout(carregarDados, 500);
