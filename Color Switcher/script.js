const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.getAttribute("id") === "red"){
            body.style.backgroundColor = 'red';
        }else if(button.getAttribute("id") === "green"){
            body.style.backgroundColor = 'green';
        }else if(button.getAttribute("id") === "blue"){
            body.style.backgroundColor = 'blue';
        }else if(button.getAttribute("id") === "white"){
            body.style.backgroundColor = 'white';
        }else if(button.getAttribute("id") === "yellow"){
            body.style.backgroundColor = 'yellow';
        }
    })
})