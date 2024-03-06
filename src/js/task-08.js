const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    if (!formObject.email || !formObject.password) {
        alert('All fields must be filled out!');
        return;
    }

    console.log(formObject);
    e.currentTarget.reset();
});

