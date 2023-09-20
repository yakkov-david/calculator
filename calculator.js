
'use strict';
let output = document.getElementById("output");//?

//functins
function equate() {
    let exercise = calc.output.value,
       exerciseResult = eval(exercise);
    calc.result.value = exerciseResult;
}  
function isNumberKey(key){
    return /^[0-9]$/.test(key); // this is regex;
} 
function isOperatorKey(key){
    if (calc.output.value !== "" && calc.output.value.slice(-1) !== '+' && calc.output.value.slice(-1) !== '-' && calc.output.value.slice(-1) !== '/' && calc.output.value.slice(-1) !== '*' && calc.output.value.slice(-1) !== '.') {
        return /^[*\-\+\.\/]$/.test(key);
    }
}  
let addiflastisnumber = function(toadd){
    if (calc.output.value !== "" && calc.output.value.slice(-1) !== '+' && calc.output.value.slice(-1) !== '-' && calc.output.value.slice(-1) !== '/' && calc.output.value.slice(-1) !== '*' && calc.output.value.slice(-1) !== '.') {
        calc.output.value += (toadd);
    }
} 
window.addEventListener("keydown", function(e){
    if(!isNumberKey(e.key) && !isOperatorKey(e.key)){
        e.preventDefault(); 
    }
    let isfocused = document.activeElement.id == output.id; 

    if(!isfocused){
        handlekeyinput(e.key);
    }
    else if(isfocused){
        if(e.key === "=" || e.key === "Enter" || e.key === "Delete" || e.key === "c" || e.key === "ב" || e.key === "Backspace"){
            handlekeyinput(e.key);
        }
    }
})  
function handlekeyinput(key){
    switch (key) {
        case "Backspace":
            calc.output.value = calc.output.value.slice(0, -1);
        break;
        case "c":
        case "Delete":
            calc.output.value = "";
            calc.result.value = "";
        break;
        case "=":
        case "Enter":
            equate();
        break;
        default:
            calcu(key);
        break;
    }
}  
let calcu = function (calcValue) {
    switch (calcValue) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
           calc.output.value += calcValue;
        break;
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            addiflastisnumber(calcValue);
        break;
        case "c":
            calc.output.value = "";
            calc.result.value = "";
        break;
        case "=":
            equate();
        break; 
        // use the math.eval() function from the Math.js math library to parse and evaluate the String with mathematics in it 
    }
}; 

