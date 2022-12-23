const button1 = document.getElementById('button1');
console.log(button1)
const submitButton = document.querySelector('#submitButton');
const thankUDiv = document.querySelector('.thank-you-state');


const toFocus1 = () => {
        button1.className = 'normal';
}


button1.addEventListener = ("click", toFocus1);

const submit = () => {
    thankUDiv.classList.toggle = 'hidden';
    console.log(thankUDiv);
}

submitButton.addEventListener = ('click', submit);

