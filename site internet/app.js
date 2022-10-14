'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark theme";
    } else {
        this.textContent = "Light theme";
    }
    console.log('current class name: ' + className);
});

function change(e){
    let color = e.value;
    e.style.color = color;
}