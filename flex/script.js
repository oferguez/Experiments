function sliderInput()
{
    const slider = document.getElementById("size");
    size = parseInt(slider.value);
    const sizeLabel = document.getElementById("size-value");
    sizeLabel.textContent = size;
    const container = document.querySelector('.container');
    container.style.setProperty('--size', size)
    console.log(`sliderInput: new size: ${size}`);
    render();
}

function render()
{
    console.log(`render called`);

    const container = document.querySelector('.container');
    container.innerHTML = ''; // clearup 
    container.style.setProperty('--size', size); // set css variable

    console.log(`render starting loop`);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';                    
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            const boxName = `${i + 1}${j + 1}`;
            box.className = 'box';
            box.id = boxName;
            box.textContent = boxName;
            box.addEventListener('click', () => {alert(`Box ${boxName} clicked!`);});
            row.appendChild(box);
        }
        container.appendChild(row);
    }

    console.log(`render finished loop`);

}

sliderInput();