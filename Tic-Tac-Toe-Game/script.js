let boxes = document.querySelectorAll('.box');
let newgame = document.querySelector('#newgame');

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turnO){ // playerO
            box.innerText = "O";
            turnO = false;
        }else{ // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner ();
    })
})

let checkwinner = () => {
    for (let pattern of winpatterns) {
        let position1 = boxes[pattern[0]].innerText
        let position2 = boxes[pattern[1]].innerText
        let position3 = boxes[pattern[2]].innerText
        if (position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 &&  position2 === position3){
                alert("🎉 Congratulations! " + position1 + " is winner");   // Display Winner
                disableboxes ();    // Disable boxes when someone wins
            }
        }
    }
}

const disableboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes){
        turnO = true;
        box.disabled = false;
        box.innerText = "";
    }
}

newgame.addEventListener("click", enableboxes)      // Reset or Start New Game