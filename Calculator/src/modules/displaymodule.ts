/* import './display.css';
 */import { firstInput, secondInput } from './globalState';

const numbers = document.querySelector('.numbers') as HTMLHeadingElement;

export const updateDisplay = () => {
    numbers.innerText = '';
    firstInput.forEach(element => {
        numbers.innerText += element;
    });         
}