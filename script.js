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


function SayHi()
{
    console.log('Hi');
}
 

class AnimationController {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    play() {
        this.elements.forEach( e => ((e.getAnimations())[0]).play() );
    }

    pause() {
        this.elements.forEach( e => e.getAnimations()[0].pause() );
    }

    reset() {
        this.animation.cancel();
        this.animation.play();
    }
}
