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
 

function setAnimationProperties()
{
        // Common animation options for all elements
    const commonOptions = {
        // duration: 5000,
        // iterations: 1,
        easing: 'ease-in-out',
        fill: 'forwards'
    };

    animationLen = 5000;


    // Child1 - bottom-right animation
    const childs1 = Array.from(document.querySelectorAll('.Child1'));
    childs1.forEach( child1 => {
        setRandomFwStyle(child1);
        randomRepeats = 5 + Math.floor(5*Math.random()); // 5..9       
        child1.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(2)', opacity: 0.9, offset: 0.3 },
            { 
                transform: 'translate(-100%, -100%) scale(1)',
                opacity: 0,
                top: '100%',
                left: '100%'
            }
        ], {
            ...commonOptions,
            iterations: randomRepeats,
            duration: animationLen / randomRepeats
        });
    });

    // Child2 - upper-left animation
    const childs2  = Array.from(document.querySelectorAll('.Child2'));
    childs2.forEach( child2 => {
        setRandomFwStyle(child2);
        child2.style.transform = 'translate(-100%, -100%)';
        randomRepeats = 5 + Math.floor(5*Math.random()); // 5..9
        child2.animate([
            { transform: 'translate(-100%, -100%) scale(1)', opacity: 1 },
            { transform: 'scale(2)', opacity: 0.8, offset: 0.4 },
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 0,
                top: '0',
                left: '0'
            }
        ], {
            ...commonOptions,
            iterations: randomRepeats,
            duration: animationLen / randomRepeats
        });
    });

    // Child3 - upper-right animation
    const childs3  = Array.from(document.querySelectorAll('.Child3'));
    childs3.forEach( child3 => {
        setRandomFwStyle(child3);
        child3.style.transform = 'translate(0, -100%)';
        randomRepeats = 5 + Math.floor(5*Math.random()); // 5..9
        child3.animate([
            { transform: 'translate(0, -100%) scale(1)', opacity: 1 },
            { transform: 'scale(2)', opacity: 0.8, offset: 0.6 },
            { 
                transform: 'translate(-100%, 0) scale(1)',
                opacity: 0,
                top: '0',
                left: '100%'
            }
        ], {
            ...commonOptions,
            iterations: randomRepeats,
            duration: animationLen / randomRepeats
        });
    });

    // Child4 - lower-left animation
    const childs4  = Array.from(document.querySelectorAll('.Child4'));
    childs4.forEach( child4 => {
        setRandomFwStyle(child4);
        child4.style.transform = 'translate(-100%, 0)';
        randomRepeats = 5 + Math.floor(5*Math.random()); // 5..9
        child4.animate([
            { transform: 'translate(-100%, 0) scale(1)', opacity: 1 },
            { transform: 'scale(2)', opacity: 0.7, offset: 0.5 },
            { 
                transform: 'translate(0, -100%) scale(1)',
                opacity: 0,
                top: '100%',
                left: '0'
            }
        ], {
            ...commonOptions,
            iterations: randomRepeats,
            duration: animationLen / randomRepeats
        });
    });
}


function setRandomFwStyle(fw)
{ 
    let fwStyle = fw.style;

    let size = Math.floor(Math.random() * 70) + 60;
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
        parent.appendChild(firework);
        //setRandomFwStyle(firework);
    }
  
    setAnimationProperties();
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
