function sliderInput()
{
    const slider = document.getElementById("size");
    size = parseInt(slider.value);
    const sizeLabel = document.getElementById("size-value");
    sizeLabel.textContent = size;
    const container = document.querySelector('.container');
    container.style.setProperty('--size', size)
    render();
}

function render()
{
    const container = document.querySelector('.container');
    container.innerHTML = ''; // clearup 
    container.style.setProperty('--size', size); // set css variable

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';                    
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            const boxName = `${i + 1}${j + 1}`;
            box.className = 'box';
            box.id = boxName;
            box.textContent = boxName;
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

sliderInput();