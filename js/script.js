const chatName = "Insight ChatBot I"
const avatarName = "LUZ"

const check = document.querySelector(".btn-check")
const step4 = document.querySelector(".step-4");
const step5 = document.querySelector(".step-5")
const step6 = document.querySelector(".step-6")
const step7 = document.querySelector(".step-7")
const ringtone = document.getElementById("ringtone");
const audio = document.getElementById("audio1");
const btnStart = document.querySelector(".btn-start");

const next = document.querySelector(".btn-next")
const campoNome = document.querySelector(".campo-nome");

document.title = chatName
const avatars = document.querySelectorAll(".nameAvatar");
avatars.forEach(avatar => {
    avatar.innerHTML = avatarName;
});



check.addEventListener("click", () => {
    step4.style.display = "block"
    step4.scrollIntoView({ behavior: "smooth" })
    step5.style.display = "block"
    step5.scrollIntoView({ behavior: "smooth" })
})

next.addEventListener("click", () => {
    let nomeDigitado = campoNome.value;
    if (nomeDigitado == "") {
        return;
    }

    step6.style.display = "block"
    document.querySelector(".userName").innerText = nomeDigitado;
    step7.style.display = "block"
    setTimeout(() => {
        ringtone.play().catch(e => console.error("Erro ao tocar áudio:", e));
        ringtone.loop = true;
    }, 2000);
    step7.scrollIntoView({ behavior: "smooth" });

})

btnStart.addEventListener("click", () =>{
    ringtone.pause();
    ringtone.currentTime = 0;
    audio.play().catch(e => console.error("Erro ao tocar áudio:", e));
})