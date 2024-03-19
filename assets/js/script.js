/*function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);

*/

/*
const ele = document.getElementById("ele1")
const pintar = () => {
    ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", pintar)
*/

const ele = document.getElementById("ele1");

const pintar = (color = "green") => {
  ele.style.backgroundColor = color;
};
ele.addEventListener("click", () => {
  pintar("yellow");
});
