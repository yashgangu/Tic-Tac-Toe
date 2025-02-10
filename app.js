let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let messageCont=document.querySelector(".message-container");
let newGameBtn=document.querySelector("#newGame");
let msg=document.querySelector("#message");

let turnX= true;//playerx ,playero

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame= ()=>{
    turnX=true;
    enable();
    messageCont.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnX){
        box.innerText="X";
        turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        chexkWinner();
    });
});

const enable = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const disable = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const showWinner = (Winner) => {
    msg.innerText = `Congratulations,Winner is ${Winner}`;
    messageCont.classList.remove("hide");
    disable();
}
const chexkWinner = ()=>{
  for(let pattern of winPatterns){
    
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=  boxes[pattern[1]].innerText
       let pos3val= boxes[pattern[2]].innerText;
    
    if(pos1val!="" && pos2val!="" && pos3val!="" ){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("Winner!!",pos1val, );
            showWinner(pos1val);
}
    }
}
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);