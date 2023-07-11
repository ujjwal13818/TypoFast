let setofwords = [
  "Always believe in yourself",
  "Making parents proud is one of the most satisfactory task a person can do",
  "We should never take anyone's love for granted",
  "Relying completely on medicine may cause more harm than disease",
  "To succeed in life , discipline is very important.",
];
const msg = document.querySelectorAll(".msg");
const typedWords = document.querySelectorAll(".typedWords");
const btn = document.querySelectorAll(".btn");
let start, end;
const text = document.getElementsByTagName("textarea");
const keys = document.querySelectorAll(".key");
const active = document.querySelectorAll(".contain");

const playGames = () => {
  const random = Math.floor(Math.random() * setofwords.length);
  for (let i = 0; i < 2; i++) {
    msg[i].innerText = setofwords[random];
  }
  let date = new Date();
  start = date.getTime();
};
const wordcounter = (str) => {
  let response = str.split(" ").length;
  return response;
};
const comparewords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;
  words1.forEach((item, index) => {
    if (item == words2[index]) {
      count++;
    }
  });
  let errorwords = words1.length - count - 1;
  return (
    " you have typed " +
    errorwords +
    " words incorrectly out of " +
    words1.length +
    "."
  );
};
const endPlay = () => {
  for (let i = 0; i < 2; i++) {
    typedWords[i].disabled = true;
  }
  let date = new Date();
  end = date.getTime();
  let totalTime = (end - start) / 1000;
  btn.innerText = "Start";
  for (let i = 0; i < 2; i++) {
    let totalstr = typedWords[i].value;
    let wordcount = wordcounter(typedWords[i].value);
    let speed = Math.round((wordcount / totalTime) * 60);
    console.log(speed);
    let finalmsg = "you have typed " + speed + " words per minute";
    finalmsg += comparewords(msg[i].innerText, totalstr);

    msg[i].innerText = finalmsg;
  }
};
for (let i = 0; i < 2; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerText == "Start") {
      console.log(this);
      for (let i = 0; i < 2; i++) {
        typedWords[i].disabled = false;
        typedWords[i].value = "";
      }
      playGames();
    }
  });
}
for (let i = 0; i < 2; i++) {
  typedWords[i].addEventListener("keyup", function (a) {
    if (a.keyCode == 13) {
      endPlay();
    }
  });
}
console.log(keys.length)
const effectson = (i) => {
  keys[i].style.backgroundColor = "red";
};

for (let i = 0; i < 2; i++) {
  typedWords[i].addEventListener("keypress", (a) => {
    for (let j = 0; j < 128; j++) {
      if (a.keyCode == j) {
       console.log(j);
        for (let k = 0; k < 36; k++) {
          if (
            "1234567890qwertyuiopasdfghjklzxcvbnm".charCodeAt(k) == j
          ) {
            
            effectson(k);
          }
        }
      }
    }
  });
}
const effectsoff = (i) => {
  keys[i].style.backgroundColor = "white";
};
for (let i = 0; i < 2; i++) {
  typedWords[i].addEventListener("keyup", (e) => {
    // console.log(e.keyCode);
    for (let j = 0; j < 128; j++) {
      if (e.keyCode == j) {
        console.log(j);
        for (let k = 0; k < 36; k++) {

          if (
            "1234567890QWERTYUIOPASDFGHJKLZXCVBNM".charCodeAt(k) == j
          ) {
            effectsoff(k);
          }
        }
      }
    }
  });
}

const changeMode = () => {
  for (let i = 0; i < 2; i++) {
    active[i].classList.remove("active");
  }
};
const addmode = () => {
  active[1].classList.add("active");
};
