let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let turnO=true;
let newbtn=document.querySelector(".new");
let mess=document.querySelector("#msg");
let div=document.querySelector(".hide");
const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const disableBoxes=()=>{
    for(i of boxes)
    {
        i.disabled=true;
    }
}
const resetGame=()=>
{
    turnO=true;
    enableBoxes();
    div.style.display="none";

}
const enableBoxes=()=>{
    for(i of boxes)
    {
        i.disabled=false;
        i.innerText="";
    }
}
 boxes.forEach((box)=>
{
     box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
     })
     
})
const showWinner=(winner)=>{
    mess.innerText=`Congragulations,Winner is ${winner}`;
    div.style.display="block";
    disableBoxes();

}
const checkWinner=()=>{
    for(i of win)
    {
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("Winner");
            showWinner(pos1);
        }
    }
    }
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
