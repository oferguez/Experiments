import FireworkExtravaganza from "./FireworkExtravaganza.js";
import AnimationController from "./AnimationController.js";

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
 
function GetGoing() {
    const parent = document.getElementById('Parent');
    let fwExtravaganza = new  FireworkExtravaganza(parent);
    fwExtravaganza.fireAll();
}

function setup() {
    document.getElementById('playButton').addEventListener('click', PlayAnimation);
    document.getElementById('pauseButton').addEventListener('click', PauseAnimation);
    document.getElementById('resetButton').addEventListener('click', ResetAnimation);
    document.getElementById('getGoingButton').addEventListener('click', GetGoing);
}

setup();