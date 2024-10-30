import { firstInput, secondInput, calculationMethod, result, setResultValue } from "./globalState";


export const calculateResult = () => {
    let firstNumber = Number(firstInput);
    let secondNumber = Number(secondInput);
    let calculationResult: number;

    switch (calculationMethod){
        case '+':
        calculationResult = firstNumber + secondNumber;
        let calculationResultString = calculationResult.toString();
        setResultValue(calculationResultString);
        console.log(`result is ${result}`);
        break;        
    }
}