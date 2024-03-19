const boxUno = document.querySelector("#box1");
const boxDos = document.querySelector("#box2");
const boxTres = document.querySelector("#box3");
const boxCuatro = document.querySelector("#box4");

boxUno.style.background = "blue";
boxUno.style.width = "200px";
boxUno.style.height = "200px";

boxDos.style.background = "red";
boxDos.style.width = "200px";
boxDos.style.height = "200px";

boxTres.style.background = "green";
boxTres.style.width = "200px";
boxTres.style.height = "200px";

boxCuatro.style.background = "yellow";
boxCuatro.style.width = "200px";
boxCuatro.style.height = "200px";

const pintarBlack = (elemento, color = "black") => {
  elemento.style.backgroundColor = color;
};

boxUno.addEventListener("click", () => {
  pintarBlack(boxUno);
});

boxDos.addEventListener("click", () => {
  pintarBlack(boxDos);
});

boxTres.addEventListener("click", () => {
  pintarBlack(boxTres);
});

boxCuatro.addEventListener("click", () => {
  pintarBlack(boxCuatro);
});
