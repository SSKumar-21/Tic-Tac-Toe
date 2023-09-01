let btn = document.querySelectorAll(".option");
let msg = document.querySelector(".msg");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let text = document.getElementById("text");

let win = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let x = true;
let count = 0;

const stop = () => {
  btn.forEach((element) => (element.disabled = true));
  msg.classList.remove("hide");
};

const start = () => {
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  msg.classList.add("hide");
};


const winGame = (letter) => {
  stop();
  if (letter == "X") {
    text.innerHTML = "<br> WINNER: X";
  } else {
    text.innerHTML = " <br> WINNER: O";
  }
};


const draw= () => {
  stop();
  text.innerHTML = " <br> It's a Draw";
};


newgameBtn.addEventListener("click", () => {
  count = 0;
  start();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  start();
});


const winCheck = () => {
  for (let i of win) {
    let [element1, element2, element3] = [
      btn[i[0]].innerText,
      btn[i[1]].innerText,
      btn[i[2]].innerText,
    ];
    
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        winGame(element1);
      }
    }
  }
};


btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (x) {
      x = false;
      
      element.innerText = "X";
      element.disabled = true;
    } else {
      x = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    if (count == 9) {
      draw();
    }
    
    winCheck();
  });
});

window.onload = start;




