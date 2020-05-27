let sign = "X";

let display = document.getElementById('player');
let flag=0;

const printx = (number) => {
    let box = document.getElementById('r' + number);
    if(box.innerHTML =="" && flag==0) {
        box.innerHTML = sign;
    }
        winner();
        if(flag==0) {
            checkSign(sign);
            display.innerHTML = `${sign}'s Turn`;
        }
}
const restart = () => {
    location.reload();
}
const checkSign = () => {
    if(sign == "X"){
        sign="O";
    } else {
        sign="X";
    }
}

const getBox = (number) => {
    return document.getElementById('r'+ number).innerHTML;
}

const checkMoves = (a, b, c, sign) => {
    if(getBox(a) == sign && getBox(b) == sign && getBox(c) == sign)  {
        return true;
    } else {
        return false;
    }
}

const winner = () => {
    if(checkMoves(1,2,3, sign) || checkMoves(4,5,6, sign) || checkMoves(7,8,9, sign) || 
    checkMoves(1,4,7, sign) || checkMoves(2,5,8, sign) || checkMoves(3,6,9, sign) ||
    checkMoves(1,5,9, sign) || checkMoves(3,5,7, sign)) {
        console.log('winner');
        display.innerHTML = `${sign} is a Winner`;
        flag=1;
        changeColor();
    } else {
        if(getBox(1)!="" && getBox(2)!="" && getBox(3)!="" && getBox(4)!="" && 
        getBox(5)!="" && getBox(6)!="" && getBox(7)!="" && getBox(8)!="" && getBox(9)!=""){
            display.innerHTML = `Game is Tie`;
            flag=1;
        }
    }
}

const changeColor = () => {
    if(checkMoves(1,2,3,sign))   {
        for(let i=1;i<=3;i++) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
    if(checkMoves(4,5,6,sign))   {
        for(let i=4;i<=6;i++) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
    if(checkMoves(7,8,9,sign))   {
        for(let i=7;i<=9;i++) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
    if(checkMoves(1,4,7,sign))   {
        for(let i=1;i<=7;i=i+3) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
    if(checkMoves(2,5,8,sign))   {
        for(let i=2;i<=8;i=i+3) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
    if(checkMoves(3,6,9,sign))   {
        for(let i=3;i<=9;i=i+3) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
    if(checkMoves(1,5,9,sign))   {
        for(let i=1;i<=9;i=i+4) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
    if(checkMoves(3,5,7,sign))   {
        for(let i=3;i<=7;i=i+2) {
            let colors = document.getElementById('r'+i);
            colors.style.color = 'red';
            colors.style.background = 'yellow';
        }
    }
}



