const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

const uSelected = document.querySelector('#uSelected');

const submitButton = document.querySelector('#submitButton');
const thankUDiv = document.querySelector('.thank-you-state');

var buttonValue = "";


const toFocus = (btn) => {
    if(btn.className === 'normal'){
        btn.className = 'selected';
       } else {
        btn.className = 'normal'
       }
       buttonValue = btn.value;
       uSelected.innerHTML = `You selected ${buttonValue} out of 5`;
}

button1.addEventListener("click", toFocus(button1));
button2.addEventListener("click", toFocus(button2));
button3.addEventListener("click", toFocus(button3));
button4.addEventListener("click", toFocus(button4));
button5.addEventListener("click", toFocus(button5));




const submit = () => {
thankUDiv.classList.toggle('hidden');
}
submitButton.addEventListener('click', submit);


