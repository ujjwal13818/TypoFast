function toggle() {
    const font = document.getElementById("right_container");
    const mode = document.getElementById("mode");
    const sw = document.getElementById("switch");
    const typofast = document.getElementById("typofast");
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "Black";
    document.body.style.color = "white";
    mode.style.color = "white";
    sw.style.color = "white";
    font.style.color = "Yellow";
  } else {
    document.body.style.backgroundColor = "white";
    
    document.body.style.color = "Black";
    mode.style.color = "black";
    sw.style.color = "black";
    font.style.color = "green";
  }
}
