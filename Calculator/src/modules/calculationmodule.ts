import { firstInput, secondInput, calculationMethod, result, setResultValue } from "./globalState";

let calculationResult: number;
let calculationResultString: string;

export const calculateResult = () => {
    let firstNumber = Number(firstInput);
    let secondNumber = Number(secondInput);


    switch (calculationMethod){
        case '+':
            calculationResult = firstNumber + secondNumber;
            calculationResultString = calculationResult.toString();
            setResultValue(calculationResultString);
            console.log(`result is ${result}`);
            break;     
        
        case '-':
            calculationResult = (firstNumber - secondNumber);
            calculationResultString = calculationResult.toString();
            setResultValue(calculationResultString);
            console.log(`result is ${result}`);
            break;   

        case 'x':
            calculationResult = (firstNumber * secondNumber);
            calculationResultString = calculationResult.toString();
            setResultValue(calculationResultString);
            console.log(`result is ${result}`);
            break;       

        case '÷':
            calculationResult = (firstNumber / secondNumber);
            calculationResultString = calculationResult.toString();
            setResultValue(calculationResultString);
            console.log(`result is ${result}`);
            break;       
    }
}