

let sec01 = document.querySelector(".sec01")
let sec02 = document.querySelector(".sec02")
let sec03 = document.querySelector(".sec03")
let btnOk = document.querySelector(".ok")
let btnnext =document.querySelector(".next")
let nome = document.querySelector(".name")
let avatarNAme = document.querySelector(".avatar_name").innerText = "OLÍVIA"



btnOk.addEventListener("click", function(){
    sec02.style.display = "block"

    sec02.scrollIntoView({behavior: "smooth"})
})


btnnext.addEventListener("click", () => {
  let nome = document.querySelector(".name").value;
    if(nome ==""){
        return;
    }

  sec03.style.display = "block"
  document.getElementById("nomeDigitado").innerText = nome;

  sec03.scrollIntoView({behavior: "smooth"})
});

