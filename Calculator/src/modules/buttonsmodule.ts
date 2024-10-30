import { updateDisplay } from "./displaymodule";
import { firstInput, secondInput, calculationMethod, setFirstInputValue, setSecondInputValue, setCalculationMethodValue } from "./globalState";
import { calculateResult } from "./calculationmodule";
import { numbers } from "./displaymodule";

const buttonNodes:NodeList = document.querySelectorAll('.button');
let inputValue: string = '';
let isFirstInput: boolean = true;



buttonNodes.forEach(button => {
    button.addEventListener('click', (e) => {
        inputValue = (e.target as HTMLButtonElement).value;

        if (isFirstInput && !isNaN(Number(inputValue))) { 
            setFirstInputValue(inputValue);
            console.log(`First input: ${firstInput}`)
        }
        else if (!isFirstInput && !isNaN(Number(inputValue))) {
            setSecondInputValue(inputValue);
              console.log(`Second input: ${secondInput}`)
        }
 

        //Cases for calculation methods
        switch (inputValue) {
            case '=': 
                isFirstInput = true;
                calculateResult();
                break;
 
            case 'C': 
                setFirstInputValue('');
                setSecondInputValue('');
                setCalculationMethodValue('');
                numbers.innerHTML = '';
                isFirstInput = true;
                console.log(firstInput)
                console.log(secondInput)

                break;     

            case '+':
            case '-':
            case 'x':
            case '÷':
            case '√':
                setCalculationMethodValue(inputValue);
                console.log(` calculation method is ${calculationMethod}`)
                isFirstInput = false;
                break;

            }
            updateDisplay(); 
        }
    )
});
