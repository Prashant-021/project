import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { setColor } from './utilities/utilities.js';
const form = document.querySelector('.addFinanceLog');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list Template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const onError = (inputField) => {
    inputField.style.borderColor = setColor.red;
    setTimeout(() => {
        inputField.style.borderColor = setColor.transparent;
    }, 1500);
};
const validateDate = (...data) => {
    let isValid = true;
    if (data[0] === "") {
        onError(toFrom);
        isValid = false;
    }
    if (data[1] === "") {
        onError(details);
        isValid = false;
    }
    if (data[2] === "") {
        onError(amount);
        isValid = false;
    }
    return isValid;
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let logs;
    console.log(validateDate(toFrom.value, details.value, amount.value));
    if (validateDate(toFrom.value, details.value, amount.value)) {
        if (type.value === 'invoice') {
            logs = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        }
        else {
            logs = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        }
        list.render(logs, type.value, "end");
    }
});
