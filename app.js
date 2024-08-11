let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".winnerTab");
let msg = document.querySelector("#win");
let resetbtn = document.querySelectorAll(".reset-btn")
let turn=true;

const fnx=()=>{location.reload();}

resetbtn.forEach( (resetbtn) => {
    resetbtn.addEventListener("click",fnx);
});

const winCombo = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
    ];

boxes.forEach((box) => {
    box.addEventListener("click",()=> { 
    if (turn){
        box.innerText = "X";
        turn = false;
    }
    else {
        box.innerText="O";
        turn = true;
    }
    box.disabled=true;
    checkWinner();
}); 
});

const showWinner=(Winner) => {
    msg.innerText=`congrats "${Winner}" you won`;
    msgContainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () => {
    for(let pattern of winCombo) {
        let pos1=boxes[pattern[0]].innerText, pos2=boxes[pattern[1]].innerText, pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3){
                console.log("winner");
                showWinner(pos1);
            }
        }
    }
};
