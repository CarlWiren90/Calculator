/* import './display.css';*/
import { firstInput, secondInput, calculationMethod, result } from './globalState';

const numbers = document.querySelector('.numbers') as HTMLHeadingElement;

export const updateDisplay = () => {
    numbers.innerText = '';
    numbers.innerText += firstInput + calculationMethod + secondInput + result;        
}