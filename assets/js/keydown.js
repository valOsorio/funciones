const box = document.querySelector("#key");
const box2 = document.querySelector("#key2");

box.style.backgroundColor = "white";
box.style.border = "1px solid black";
box.style.width = "200px";
box.style.height = "200px";

box2.style.backgroundColor = "white";
box2.style.width = "200px";
box2.style.height = "200px";

const colorChange = (elemento, color) => {
  elemento.style.backgroundColor = color;
};
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorChange(box, "pink");
  } else if (event.key === "s") {
    colorChange(box, "orange");
  } else if (event.key === "d") {
    colorChange(box, "lightblue");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    colorChange(box2, "purple");
  } else if (event.key === "w") {
    colorChange(box2, "gray");
  } else if (event.key === "e") {
    colorChange(box2, "brown");
  }
});
