const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

// alvo.addEventListener("evento", função);
//mouseover, função arrow no body
//mouseout, funcao arrow no body devolve sem cor.
body.addEventListener("mouseover", () => {
    body.style.background = "gray";
});

body.addEventListener("mouseout", () => {
    body.style.background = "unset";
});

tooltip.addEventListener("mouseover", (e) => {

console.log("Altura da página", body.clientHeight);
console.log("Largura da página", body.clientWidth);
console.log("Altura do tooltip", tooltip.clientHeight);
console.log("Largura do tooltip", tooltip.clientWidth);
console.log("ALtura do mouse", e.clientY);
console.log("Largura do mouse", e.clientX);


    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML =
    "algum texto";
    const largura = 200;
    newDiv.style.position = "absolute";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.width = largura + "px";
    newDiv.style.display = "flex";
    newDiv.style.left = (e.clientX + largura > body.clientWidth ? e.clientX - largura - 20 : e.clientX + largura) + "px";
    


    newDiv.style.display = "flex";
    header.appendChild(newDiv);
});
tooltip.addEventListener("mouseout", (e) =>{
    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
});