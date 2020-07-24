
var numberOfDrumButton = document.querySelectorAll(".drum");

/*
===========
Click Event
===========
*/

// for (let i = 0; i < numberOfDrumButton.length; i++) {

//     numberOfDrumButton[i].addEventListener("click", function() {

//         var buttonTrigger = this.innerHTML;
       
//         switch (buttonTrigger) {
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();
//                 break;

//             case "a":
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play();
//                 break;

//             case "s":
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play();
//                 break;

//             case "d":
//                 var audio = new Audio("sounds/tom-4.mp3");
//                 audio.play();
//                 break;

//             case "j":
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play();
//                 break;

//             case "k":
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play();
//                 break;   

//             case "l":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;                
        
//             default:
//                 break;
//         }

//     });
// }

/*
===========
Keypress Event
===========
*/

// document.addEventListener("keypress", function(event) {
//     var keyTrigger = event.key;

//     switch (keyTrigger) {
//         case "w":
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//             break;

//         case "a":
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//             break;

//         case "s":
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//             break;

//         case "d":
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//             break;

//         case "j":
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//             break;

//         case "k":
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//             break;   

//         case "l":
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//             break;                
    
//         default:
//             break;
//     }   
// });

/*
===============
Code Optimized
===============
*/

// For click event
for (let i = 0; i < numberOfDrumButton.length; i++) {

    numberOfDrumButton[i].addEventListener("click", function() {

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
       
    });
}

// For keypress event
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});

// Make sound function
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;   

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;                
    
        default:
            break;
    }    
}

function buttonAnimation(currentKey) {
    var key = "." + currentKey;
    var activeButton = document.querySelector(key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}