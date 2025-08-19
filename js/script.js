let userName = "ANTONIO";
const avatarName = "PAPAGAIO DA SEGURANÇA";
const directorName = "Florivaldo Junior";


const sec1 = document.querySelector(".sec01");
const sec2 = document.querySelector(".sec02");
const sec3 = document.querySelector(".sec03");
const sec4 = document.querySelector(".sec04");
const sec5 = document.querySelector(".sec05");
const sec6 = document.querySelector(".sec06");
const sec7 = document.querySelector(".sec07");
const sec8 = document.querySelector(".sec08");
const sec9 = document.querySelector(".sec09");
const sec10 = document.querySelector(".sec10");
const sec11 = document.querySelector(".sec11");
const sec12 = document.querySelector(".sec12");
const sec13 = document.querySelector(".sec13");

document.title = "EXECUÇÃO COM SEGURANÇA";

function scrollToSection(sec) {
  sec.scrollIntoView({ behavior: "smooth" });
}

function textSec1() {
  sec1.innerHTML = `
    <div class="flex">
      <img class="avatar" src="./img/avatar.png" alt="">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>
        Olá 👋, eu sou o Papagaio da Segurança e estou muito feliz em dar início à nossa campanha <b>Aprendeu, Repetiu e Agiu!</b></p>
      </div>
    </div>
  `;
  scrollToSection(sec1);
  setTimeout(textSec2, 2000);
}

function textSec2() {
  sec2.innerHTML = `
    <div class="flex">
      <img class="avatar_blank" src="./img/avatar_blank.png" alt="">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>
        Ah, e tem mais!</br>Uma pessoa muito especial quer falar com você sobre o propósito desta campanha. <b>Que tal atender essa ligação e descobrir quem é?</b></p>
      </div>
    </div>
  `;
  scrollToSection(sec2);
  setTimeout(textSec3, 2000);
}

function textSec3() {
  sec3.innerHTML = `
    <div class="flex resposta">
      <p><b>VOCÊ</b><br>clique aqui para aceitar</p>
      <img class="aceitar" src="./img/check.svg" style="cursor:pointer">
    </div>
  `;
  scrollToSection(sec3);
  const btn = sec3.querySelector(".aceitar");
  btn.addEventListener("click", () => textSec4());
}

function textSec4() {
  sec4.innerHTML = `
    <div class="flex">
      <img class="avatar" src="./img/avatar.png" alt="">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>
        Mas antes, me conta:</br><b>como você gostaria de ser chamado(a)?</b></br>Pode ser seu nome ou apelido - você decide!</p>
      </div>
    </div>
  `;
  scrollToSection(sec4);
  setTimeout(textSec5, 1000);
}

function textSec5() {
  sec5.innerHTML = `
    <div class="flex resposta">
      <p><b>VOCÊ</b></p>
      <br>
      <div class="flex2">
        <input type="text" placeholder="digite seu nome" class="nomeInput">
        <img class="aceitar" src="./img/check.svg" style="cursor:pointer">
      </div>
    </div>
  `;
  scrollToSection(sec5);
  const btnAceitar = sec5.querySelector(".aceitar");
  const inputNome = sec5.querySelector(".nomeInput");

  btnAceitar.addEventListener("click", () => {
    const valor = inputNome.value.trim();
    if (valor) {
      userName = valor;
      textSec6();
    } else {
      alert("Por favor, digite seu nome antes de continuar.");
    }
  });
}

function textSec6() {
  sec6.innerHTML = `
    <div class="call-screen">
      <div class="profile">
        <img src="./img/Florivaldo Junior.jpg" alt="Florivaldo Junior">
        <audio id="ringtone" src="./audio/mobile-ringtone.mp3" preload="auto"></audio>
        <audio id="audio1" src="./audio/audio1.mp3" preload="auto"></audio>
      </div>
      <div class="name">${directorName}</div>
      <div class="buttons">
        <button class="accept"><i class="fa fa-phone"></i></button>
        <button class="reject"><i class="fa fa-times"></i></button>
      </div>
    </div>
  `;

  scrollToSection(sec6);

  const ringtone = sec6.querySelector("#ringtone");
  const audio1 = sec6.querySelector("#audio1");
  const btnAccept = sec6.querySelector(".accept");
  const btnReject = sec6.querySelector(".reject");

  ringtone.loop = true;
  ringtone.play().catch(() => {});

  btnAccept.addEventListener("click", () => {
    ringtone.pause();
    ringtone.currentTime = 0;
    audio1.play().catch(() => {});
    audio1.addEventListener("ended", () => {
      textSec7();
    });
  });

  btnReject.addEventListener("click", () => {
    ringtone.pause();
    ringtone.currentTime = 0;
    audio1.pause();
    audio1.currentTime = 0;
    alert("Ligação encerrada.");
  });
}




function textSec7() {
  sec7.innerHTML = `
    <div class="flex">
      <img class="avatar" src="./img/avatar.png" alt="">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>
        ${userName}, eu te disse que essa mensagem era muito especial...
        Aqui na BRF, queremos que a segurança seja a sua prioridade em cada decisão do seu dia a dia.</p>
      </div>
    </div>
  `;
  scrollToSection(sec7);
  setTimeout(textSec8, 1000);
}

function textSec8() {
  sec8.innerHTML = `
    <div class="flex">
      <img class="avatar_blank" src="./img/avatar_blank.png" alt="">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>
        E agora que você já conhece o motivo e o compromisso que assumimos com você, quero que você conheça o logo da nossa campanha.</p>
      </div>
    </div>
  `;
  scrollToSection(sec8);
  setTimeout(textSec9, 1000);
}

function textSec9() {
  sec9.innerHTML = `
    <div class="flex resposta">
      <p><b>${userName}</b><br>clique aqui para aceitar</p>
      <img class="aceitar" src="./img/check.svg">
    </div>
  `;
  scrollToSection(sec9);
  const btn = sec9.querySelector(".aceitar");
  btn.addEventListener("click", () => textSec10());
}

function textSec10() {
  sec10.innerHTML = `
    <div class="flex">
      <img class="avatar" src="./img/avatar.png" alt="">
      <div class="pergunta">
        <img src="./img/LOGO+PAPAGAIO.png" alt="">
      </div>
    </div>
  `;
  scrollToSection(sec10);
  setTimeout(textSec11, 1000);
}

function textSec11() {
  sec11.innerHTML = `
    <div class="flex">
      <img class="avatar_blank" src="./img/avatar_blank.png" alt="">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>
        Bacana, né? Fiquei lindão nesse logo da campanha.<br>
        Mas tem um detalhe: eu ainda não tenho um nome. E como vou estar ao seu lado todos os dias, quero que você me ajude a escolher um.</p>
      </div>
    </div>
  `;
  scrollToSection(sec11);
  setTimeout(textSec12, 1000);
}

function textSec12() {
  sec12.innerHTML = `
    <div class="flex">
      <img class="avatar_blank" src="./img/avatar_blank.png" alt="">
      <div class="pergunta">
        <p><b>${avatarName}</b><br>
        No nosso próximo encontro já saberemos qual meu nome. Até lá!</p>
      </div>
    </div>
  `;
  scrollToSection(sec12);
  setTimeout(textSec13, 1000);
}

function textSec13() {
  sec13.innerHTML = `
    <div class="flex resposta">
      <p><b>${userName}</b><br>clique aqui para sair</p>
      <img class="aceitar" src="./img/check.svg">
    </div>
  `;
  scrollToSection(sec13);
  const btn = sec13.querySelector(".aceitar");
  btn.addEventListener("click", () => alert("Fim da interação!"));
}

setTimeout(textSec1, 1000);
