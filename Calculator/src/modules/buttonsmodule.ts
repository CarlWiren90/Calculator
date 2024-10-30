import { updateDisplay } from "./displaymodule";
import { firstInput, secondInput, calculationMethod, setFirstInputValue, setSecondInputValue, setCalculationMethodValue } from "./globalState";
import { calculateResult } from "./calculationmodule";

const buttonNodes:NodeList = document.querySelectorAll('.button');
let inputValue: string = '';
let isFirstInput: boolean = true;


buttonNodes.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e) {
            inputValue = (e.target as HTMLButtonElement).value;
            if (inputValue === '+') {
                setCalculationMethodValue(inputValue);
                console.log(` calculation method is ${calculationMethod}`)
                isFirstInput = false;
            }

            else if (inputValue === '=') {
                isFirstInput = true;
                calculateResult();
            }

            else if (isFirstInput) {
                setFirstInputValue(inputValue);
                console.log(`first input is ${firstInput}`);
            }

            else {
                setSecondInputValue(inputValue);
                console.log(`second input is ${secondInput}`);
            }   
            updateDisplay(); 
        }
    }
)});
