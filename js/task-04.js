const counterValue = document.getElementById('value');
let currentValue = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
        const action = event.target.dataset.action;
        
        if (action === 'decrement') {
            currentValue -= 1;
        } else if (action === 'increment') {
            currentValue += 1;
        }
        
        counterValue.textContent = currentValue;
    });
});
