const clearButton = document.querySelector("#clearButton");
const form = document.querySelector("#form");
const modal = $("#modal");
const container = modal.find(".modal__container");
const content = modal.find(".modal__content");

$(".form").submit(e => {
    e.preventDefault();
    if (validateForm(form)) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: form.elements.name.value,
                phone: form.elements.phone.value,
                comment: form.elements.comment.value,
                to: form.elements.name.value + '@mail.ru'
            },
            success: (data) => {
                content.text(data.message);
                modal.removeClass("error");
            }
        }).fail(function () {
            content.text("Отправить письмо не удалось, повторите запрос позже!");
            modal.addClass("error");
        });
        Fancybox.show([{ src: "#modal", type: "inline" }]);
    }
});

$(".app-close-modal").click(e => {
    e.preventDefault();
    Fancybox.close();
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