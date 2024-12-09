// const { AnimationController } = require('./animationControl.js');
import { AnimationController } from './AnimationController.js';

function PlayAnimation()
{
    console.log('restart animation');
    const controller = new AnimationController('.Child');
    controller.play();
}

function StopAnimation()
{
    console.log('stop animation');
    const controller = new AnimationController('.Child');
    controller.StopAnimation();
}