let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetBtn");
let newbtn = document.querySelector("#NewBtn");
let msgcontainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turnO = true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = ()=>{
    turnO = true;
    enableBtn();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
           box.classList.remove("hidden");
           box.innerText="O";
           turnO=false;
        }else{
            box.classList.add("hidden");
            box.innerText="X"
            turnO=true;   
        }
        box.disabled=true;
        checkWinner();
    });
});
const disablebtn = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBtn = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner)=>{
    msg.innerText=`Congrats, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}
const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner");
                showWinner(pos1);
            }
        }
    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);