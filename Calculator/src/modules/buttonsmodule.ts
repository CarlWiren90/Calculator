import { updateDisplay } from "./displaymodule";
import { firstInput, secondInput, calculationMethod, setFirstInputValue, setSecondInputValue, setCalculationMethodValue } from "./globalState";
import { calculateResult } from "./calculationmodule";

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

            case '+': 
                setCalculationMethodValue(inputValue);
                console.log(` calculation method is ${calculationMethod}`)
                isFirstInput = false;
                break;

            case '-': 
                setCalculationMethodValue(inputValue);
                console.log(` calculation method is ${calculationMethod}`)
                isFirstInput = false;
                break;

            case 'x': 
                setCalculationMethodValue(inputValue);
                console.log(` calculation method is ${calculationMethod}`)
                isFirstInput = false;
                break;
  
            case '÷': 
                setCalculationMethodValue(inputValue);
                console.log(` calculation method is ${calculationMethod}`)
                isFirstInput = false;
                break;

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
