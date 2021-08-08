const bar = document.querySelector("#bar");
const linkul=document.querySelector(".link");

bar.addEventListener("click",()=>{
    linkul.classList.toggle("activado");
})