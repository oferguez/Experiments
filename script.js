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
