function addition(firstValue,secondValue){
    return parseFloat(firstValue)+parseFloat(secondValue);
}

function subtraction(firstValue,secondValue){
    return parseFloat(firstValue)-parseFloat(secondValue);
}

function multiplication(firstValue,secondValue){
    return parseFloat(firstValue)*parseFloat(secondValue);
}

function division(firstValue,secondValue){
    if (secondValue=="0"){
        return "ERROR"
    } 
    return (parseFloat(firstValue)/parseFloat(secondValue)).toFixed(1);
}




function displayFunction(displayResult){
    const display = document.querySelector(".display");
    if (displayResult == "AC"){
        display.textContent = "";
        firstValue = "";
        secondValue = "";
        operator = '';
    
    }
    else if (displayResult == "="){
        display.textContent = firstValue;
        secondValue = "";
        operator = '';

    }else{
        display.textContent += displayResult
    }
}
    
    
const operations = ["+","-","*","/"]
let firstValue = '';
let secondValue ='';
let operator = ""
const buttonClick = document.querySelectorAll("button");

buttonClick.forEach((button)=>{
    
    button.addEventListener("click", ()=>{
        
        if (operations.some(val=>button.value.includes(val))){
            operator = button.value;
        } else if (button.value == ".") {
            if (operator == '') {
                firstValue += ".";
            } else {
                secondValue += ".";
            }
        } else if (button.value == "+/-" ) {
            console.log(button.value)
            if (operator == '') {
                firstValue = (parseFloat(firstValue) * -1);
                displayFunction(firstValue)
            } else {
                secondValue = (parseFloat(secondValue) * -1);
                displayFunction(secondValue)
            }
        } else if (button.value == "%") {
            if (operator == '') {
                firstValue = (parseFloat(firstValue) / 100).toString();
            } else {
                secondValue = (parseFloat(secondValue) / 100).toString();
            }
        } else if (button.value == "=" && !secondValue=="") {
            firstValue = calculation(firstValue,secondValue,operator)
            displayFunction(firstValue)
        } else if (button.value == "=" && secondValue=="") {
            
            displayFunction(firstValue)}
        else if (operator == ''){
            firstValue += button.value;
        } else if (operator != ''){
            secondValue += button.value;
        }
        
        displayFunction(button.value)
        
        
    });
});
                
        
        



function calculation(firstValue,secondValue,operator){
    switch (operator){
        case "+":
            firstValue = addition(firstValue, secondValue);
            return firstValue
        case "-":
            firstValue = subtraction(firstValue,secondValue);
            return firstValue
        case "*":
            firstValue = multiplication(firstValue,secondValue);
            return firstValue
        case "/":
            firstValue = division(firstValue,secondValue);
            return firstValue
        default:
            console.error(`Invalid operator: ${operator}`);
            operator = '';
            return null
    }
}