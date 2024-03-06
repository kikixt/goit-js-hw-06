const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', event => {
    const fontSize = event.target.value;
    textSpan.style.fontSize = fontSize + 'px';
});
