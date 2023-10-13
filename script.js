const inputs = document.querySelectorAll(`input`);

inputs.forEach(input => {
    // input.addEventListener(`focus`, () => {
    //     this.classList.remove(`error`);
    // });

    input.addEventListener(`input`, () => {
        if (this.validity.valueMissing) {
            this.classList.add(`error`);
        } else {
            this.classList.remove(`error`);
        }
    });
});