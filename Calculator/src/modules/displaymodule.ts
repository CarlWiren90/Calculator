/* import './display.css';*/
import { firstInput, secondInput, calculationMethod, result } from './globalState';

export const numbers = document.querySelector('.numbers') as HTMLHeadingElement;

export const updateDisplay = () => {
    numbers.innerText = '';

    if (result === '') {
        numbers.innerText += firstInput + calculationMethod + secondInput;
    }
    else {
        numbers.innerText += firstInput + calculationMethod + secondInput + '=' + result;
    }
}