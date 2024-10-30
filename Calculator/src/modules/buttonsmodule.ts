import { isFirstInput, firstInput, secondInput, calculationMethod } from "./globalState";
import { updateDisplay } from "./displaymodule";

const buttonNodes:NodeList = document.querySelectorAll('.button');
let isFirstInput:boolean = true;

let inputValue: string = '';


    buttonNodes.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e) {
                inputValue = (e.target as HTMLButtonElement).value;
                if (isFirstInput) {
                    firstInput.push(inputValue);
                    console.log(`first ${inputValue}`);
                    updateDisplay();
                }
                if (inputValue === '=' || inputValue === '-' || inputValue === '+' || inputValue === 'C' || inputValue === '÷' || inputValue === '√') {
                    isFirstInput = false;
                    calculationMethod.push(inputValue);
                    console.log(`claculation method ${inputValue}`);
                    updateDisplay();

                }
                if (!isFirstInput) {
                    secondInput.push(inputValue);
                    console.log(`second ${inputValue}`);
                    updateDisplay();
                }
            }
        })
    })



