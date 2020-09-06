
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sun.jpg') {
        myImage.setAttribute('src', 'images/leave.jpg');
    } else {
        myImage.setAttribute('src', 'images/sun.jpg');
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('please enter your name...');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "Welcome to LanceMai's homePage " + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome to LanceMai's homePage " + storedName;
}

myButton.onclick = function() {
    setUserName();
}






















