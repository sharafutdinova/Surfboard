const sendButton = document.querySelector("#sendButton");
const clearButton = document.querySelector("#clearButton");
const form = document.querySelector("#form");

sendButton.addEventListener("click", e => {
    e.preventDefault();
    if (validateForm(form)) {
        const data = {
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            comment: form.elements.comment.value,
            to: form.elements.name.value + '@mail.ru'
        }
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', "https://webdev-api.loftschool.com/sendmail");
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            if (xhr.response.status) {
                console.log('Всё ок!');
            }
        });
    }
})

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    if (!validateField(form.elements.comment)) {
        valid = false;
    }

    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}

clearButton.addEventListener("click", e => {
    e.preventDefault();
    form.elements.name.value = "";
    form.elements.phone.value = "";
    form.elements.street.value = "";
    form.elements.house.value = "";
    form.elements.corps.value = "";
    form.elements.flat.value = "";
    form.elements.floor.value = "";
    form.elements.comment.value = "";
    form.elements.toCall.checked = false;
    form.elements.optionCash.checked = false;
    form.elements.optionCard.checked = false;
})