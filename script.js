function singleDieRoll(){
    let number = Math.floor(Math.random() *7);
    return number;
}

function doubleDieRoll(){
    
    let number = singleDieRoll() + singleDieRoll();
    return number;
}

let myarray = [0,0,0,0,0,0,0,0,0,0,0,0,0]
for(let i = 1; i <= 1000; i++) {
    
    let rollOfDice = doubleDieRoll();
    myarray[rollOfDice] = myarray[rollOfDice] + 1;
 }
 document.write(myarray);

 createElement("div")