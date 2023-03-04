/*let insideofCup = document.getElementById("inside")
insideofCup.addEventListener("click", () => {
    document.getElementById("textbox").innerText="It's the world cup!!!"
})*/
let insideofCup = document.getElementById("inside");
insideofCup.addEventListener("click", () => {
  let textbox = document.getElementById("textbox");
  textbox.innerText = "It's the world cup!!!";
  textbox.style.fontSize = "3em";
  textbox.style.position = "fixed";
  textbox.style.top = "0";
  textbox.style.left = "50%";
  textbox.style.transform = "translateX(-50%)";
});

