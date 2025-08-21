const badge = document.querySelector(".final_cut")
const bleed = document.querySelector(".bleed_area")
const measure = document.querySelector(".measure")

const bgcolor = "green"
const radius = 8


//crachá tamanho final
const badgeWidth = 54
const badgeheight = 85.6

badge.style.width = badgeWidth + "mm"
badge.style.height = badgeheight + "mm"
badge.style.border = "2px solid black";
badge.style.borderRadius = radius + "px"


//sangria do cracha
const bleedWidth = 60
const bleedheight = 90.6

bleed.style.width = bleedWidth + "mm"
bleed.style.height = bleedheight + "mm"
bleed.style.backgroundColor = bgcolor
bleed.style.border = "2px solid green";

