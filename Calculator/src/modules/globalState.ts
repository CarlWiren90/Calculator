export let firstInput: string = '';
export let secondInput: string = '';
export let calculationMethod: string = '';
export let result: string = '';


export const setFirstInputValue = (value: string) => {
    firstInput += value;
}

export const setSecondInputValue = (value: string) => {
    secondInput += value;
}

export const setCalculationMethodValue = (value: string) => {
    calculationMethod += value;
}

export const setResultValue = (value: string) => {
    result += value;
}
