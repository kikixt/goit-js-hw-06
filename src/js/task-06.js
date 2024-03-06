const input = document.getElementById('validation-input');

input.addEventListener('blur', event => {
    const inputValue = event.target.value.trim();
    const expectedLength = Number(input.dataset.length);

    if (inputValue.length === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});
