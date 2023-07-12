let box = document.getElementsByClassName("box");
let over = document.getElementById("gameover");
let t = document.getElementById("turn");
let gif = document.getElementById("winner");
let check = false;
let curr = true;

function gameover(){
  gif.innerHTML =
  '<img src="GKZz.gif" alt="" srcset="">';
gif.style.visibility = "visible";
over.innerHTML = "Its a tie";
over.style.visibility = "visible";
}
function reset() {
  let len = box.length;
  for (let i = 0; i < len; i++) {
    box[i].innerHTML = "";
  }
  count = 0;
  gif.innerHTML = "";
  over.style.visibility = "hidden";
  turn = 1;
  t.innerHTML = "Turn of: X";
  check = false;
  curr = true;
}
let turn = 1;
let count = 0;
function change(p) {
  if (curr) {
    let ele = document.getElementById(p);
    let text = ele.innerText;
    if (text == "" && turn == 1) {
      ele.innerHTML = "X";
      win();
      if (check == false) {
        count = count + 1;
        if (count == 9) {
          gameover();
        }
        t.innerHTML = "Turn of: O";
        turn = 0;
      }
    } else if (text == "" && turn == 0) {
      ele.innerHTML = "O";
      win();
      if (check == false) {
        turn = 1;
        count = count + 1;
        if (count == 9) {
          gameover();
        }
        t.innerHTML = "Turn of: X";
      }
    }
  }
}

function win() {
  let b1 = document.getElementById("box1").innerText;
  let b2 = document.getElementById("box2").innerText;
  let b3 = document.getElementById("box3").innerText;
  let b4 = document.getElementById("box4").innerText;
  let b5 = document.getElementById("box5").innerText;
  let b6 = document.getElementById("box6").innerText;
  let b7 = document.getElementById("box7").innerText;
  let b8 = document.getElementById("box8").innerText;
  let b9 = document.getElementById("box9").innerText;
  let c=false;

  if (b1 != "" && b1 == b2 && b2 == b3) {
    if (b1 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
   
  } else if (b4 != "" && b4 == b5 && b5 == b6) {
    if (b4 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
    
  } else if (b7 != "" && b7 == b8 && b8 == b9) {
    if (b7 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
    
  } else if (b1 != "" && b1 == b4 && b4 == b7) {
    if (b1 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
   
  } else if (b2 != "" && b2 == b5 && b5 == b8) {
    if (b2 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
   
  } else if (b3 != "" && b3 == b6 && b6 == b9) {
    if (b3 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
    
  } else if (b1 != "" && b1 == b5 && b5 == b9) {
    if (b1 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
    
  } else if (b3 != "" && b3 == b5 && b5 == b7) {
    if (b3 == "O") {
      over.innerHTML = "O wins";
    } else {
      over.innerHTML = "X wins";
    }
    c=true;
    
  }

  if(c){
    gif.innerHTML =
      '<img src="EmJE.gif" alt="" srcset="">';
    gif.style.visibility = "visible";
    over.style.visibility = "visible";
    check = true;
    curr = false;

  }
}
