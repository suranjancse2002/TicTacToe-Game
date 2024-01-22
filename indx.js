console.log("Welcome to Tic Tac Toe")

let turn = "X";
let gameover = false;
var cnt = 0;

///Changing turn
const changeTurn = ()=>{
    return turn === "O" ? "X" : "O";
}

// Function for win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) && boxtexts[e[0]].innerHTML !== ""){
            document.querySelector(".won").innerText = boxtexts[e[0]].innerHTML + " has won!";
            // console.log("Won")
            gameover = true;

            if(gameover){
                setTimeout(reset, 2000)
            }
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("clickElement");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext"); //span
    //Adding click event listener to each box
    element.addEventListener("click", ()=>{
        if(boxtext.innerHTML == ""){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            cnt++;
            checkWin();
            if(cnt == 9){
                document.querySelector(".won").innerText = "It\'s a Draw!"
                gameover = true;
                setTimeout(reset, 2000);
            }
            if(!gameover){
                document.querySelector(".turntext").innerHTML = turn;  
            } 
        }
    })
})

const reset = ()=>{
    let allboxes = document.querySelectorAll(".boxtext");
    Array.from(allboxes).forEach((e)=>{e.innerHTML=""});
    turn = "X";
    document.querySelector(".turntext").innerHTML = turn;
    document.querySelector(".won").innerText = "Welcome to Tic Tac Toe";
    gameover = false;
    cnt = 0;
}
