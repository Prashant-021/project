import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { hasFormatter, setColor } from './utilities/utilities.js';

const form = document.querySelector('.addFinanceLog') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list Template
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

const onError = (inputField: HTMLInputElement): void => {
    inputField.style.borderColor = setColor.red
    setTimeout(() => {
        inputField.style.borderColor = setColor.transparent
    }, 1500);
}


const validateDate = (...data: string[]): boolean => {
    let isValid: boolean = true;
    if (data[0] === "") {
        onError(toFrom)
        isValid = false
    }
    if (data[1] === "") {
        onError(details)
        isValid = false
    }
    if(data[2] === ""){
        onError(amount)
        isValid = false
    }
    return isValid
}

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    
    let logs: hasFormatter;
    console.log(validateDate(toFrom.value, details.value, amount.value));
    if (validateDate(toFrom.value, details.value, amount.value)) {

        if (type.value === 'invoice') {
            logs = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        } else {
            logs = new Payment(toFrom.value, details.value, amount.valueAsNumber)
        }
        list.render(logs, type.value, "end")
    }

})