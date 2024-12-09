function PlayAnimation()
{
    console.log('restart animation');
    const controller = new AnimationController('.Child');
    controller.play();
}

function PauseAnimation()
{
    console.log('pause animation');
    const controller = new AnimationController('.Child');
    controller.pause();
}

function ResetAnimation()
{
    console.log('reset animation');
    const controller = new AnimationController('.Child');
    controller.reset();
}

const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Brown",
    "Cyan",
    "Magenta"
  ];
 


function setRandomFwStyle(fwStyle)
{ 
    let size = Math.floor(Math.random() * 70) + 30;
    fwStyle.width = `${size+1}px`;
    fwStyle.height = `${size+1}px`;
  
    let randomIndex = Math.floor(Math.random() * colors.length);
    randomColor = colors[randomIndex].toLowerCase();
    let randomTransparency = Math.floor(40 + 20*Math.random());
  
    fwStyle.background = `radial-gradient(circle, ${randomColor} ${100-randomTransparency}%, transparent ${randomTransparency}%)`;
}

function GetGoing()
{
    const currentFireworks = document.getElementsByClassName('Child');
    Array.from(currentFireworks).forEach(fw => fw.remove());

    const inputField = document.getElementById('numberInput');
    const fwNumber = parseFloat(inputField.value);
    const parent = document.getElementById('Parent');
    for (let fw = 0; fw < fwNumber; fw++)
    {
        const firework = document.createElement('div');
        let ChildClass = 1 + fw%4;
        firework.classList.add('Child', `Child${ChildClass}`);
        firework.id = `Child${fw}`;
        setRandomFwStyle(firework.style);
        parent.appendChild(firework);
    }
}


class AnimationController {
    constructor(selector) {
        this.animations = Array.from(document.querySelectorAll(selector))
            .map(e => e.getAnimations()[0])
            .filter(a => a !== undefined);
    }

    play() {
        this.animations.forEach( a => a.play() );
    }

    pause() {
        this.animations.forEach( a => a.pause() );
    }

    reset() {
        this.animations.forEach( a => a.cancel() );
        this.animations.forEach( a => a.play() );
    }
}
