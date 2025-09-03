let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".try");
const userCountt=document.querySelector("#userCount");
const cCountt=document.querySelector("#cCount");

const draw=()=>{
    console.log("Game Drawn");
}

const gencomChoice=()=>{
    let options = ["Rock", "Paper" ,"Scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const playgame=(userchoice) =>{
    console.log("User Choice is ",userchoice);

    const comch = gencomChoice();
    console.log("Computer Choice is ",comch);

    //Draw
    if (userchoice === comch){
        draw();
    }else{
        let userwin=true;
        if(userchoice === "Rock"){
            if(comch=="Paper"){ userwin=false;}
        }
        else  if(userchoice === "Scissor"){
            userwin = (comch === "Rock" ? false : true);
        }
        else if(userchoice === "Paper"){
            userwin = (comch === "Scissor" ? false : true);
        }
        Winner(userwin);

    }
}

const Winner=(userwin)=>{
    if(userwin){
        console.log("User Win");
        msg.innerText  = "You Won Congrats! 💕";
        msg.style.backgroundColor="green";
        user++;
        userCountt.innerText = user;
    }else{
        console.log("Computer Win");
        msg.innerText  = "You Lose! 🤦‍♀️"
        msg.style.backgroundColor="red";
        comp++;
        cCountt.innerText = comp;

    }
};
choices.forEach((ch) => {
    console.log(ch)
    
    ch.addEventListener("click",() =>{
        const userchoice = ch.getAttribute("id");
        //console.log("Choice Selected",userchoice);
        playgame(userchoice);
    });
});