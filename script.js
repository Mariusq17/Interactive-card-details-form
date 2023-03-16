const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const cardMonth = document.getElementById('cardMonth');
const cardYear = document.getElementById('cardYear');
const cardCvc = document.getElementById('cardCvc');
const allInputs = document.getElementsByTagName('input');
const formBtn = document.getElementById('formBtn');

const cardNameShow = document.getElementById('card-name');
const cardNumberShow = document.getElementById('card-number');
const cardCvcShow = document.getElementById('card-cvc');
const cardDate = document.getElementById('card-date');
    let cardDateMonth = '', cardDateYear = '';

window.addEventListener('unload', resetInputFields);

cardName.addEventListener('keyup', () => {
    cardNameShow.innerText = cardName.value;
    if(cardName.value.length == 0) cardNameShow.innerText = 'Jane Appleseed';
});
cardNumber.addEventListener('keyup', () => {
    if(cardNumber.value.match(/^[0-9]*/g) != cardNumber.value) {
        let errorMsg = cardNumber.nextSibling.nextSibling;
        errorMsg.innerText = "Wrong format, numbers only";
        cardNumber.classList.add('invalid');
    }
    else cardNumber.classList.remove('invalid');
    
    if(cardNumber.value.length == 0) cardNumberShow.innerText = '0000 0000 0000 0000';
    else {
        let finalText = '', numberOfChr = 0;
        for(let i = 0; i < cardNumber.value.length; i++) {
            finalText += cardNumber.value[i];
            numberOfChr++;
            if(numberOfChr % 4 == 0) finalText += ' ';
        }
        cardNumberShow.innerText = finalText;
    }
});
cardNumber.addEventListener('change', () => {
    if(Number(cardNumber.value.length) != 16) {
        cardNumber.classList.add('invalid');
        let errorMsg = cardNumber.nextSibling.nextSibling;
        errorMsg.innerText = "The card number must contain exactly 16 digits";
    }
    else if(Number(cardNumber.value.length) == 16 && 
        cardNumber.value.match(/^[0-9]*/g) != cardNumber.value){
        let errorMsg = cardNumber.nextSibling.nextSibling;
        errorMsg.innerText = "Wrong format, numbers only";
        cardNumber.classList.add('invalid');
    }
    
    if(cardNumber.value.length == 0) cardNumberShow.innerText = '0000 0000 0000 0000';
    else {
        let finalText = '', numberOfChr = 0;
        for(let i = 0; i < cardNumber.value.length; i++) {
            finalText += cardNumber.value[i];
            numberOfChr++;
            if(numberOfChr % 4 == 0) finalText += ' ';
        }
        cardNumberShow.innerText = finalText;
    }
});
cardCvc.addEventListener('keyup', () => {
    cardCvcShow.innerText = cardCvc.value;
    
    if(cardCvc.value.match(/^[0-9]*/g) != cardCvc.value) cardCvc.classList.add('invalid');
    else cardCvc.classList.remove('invalid');
    
    if(cardCvc.value.length == 0) cardCvcShow.innerText = '000';
});
cardYear.addEventListener('keyup', () => {
    cardDateYear = cardYear.value;
    changeDate();

    if(cardYear.value.match(/^[0-9]*/g) != cardYear.value) cardYear.classList.add('invalid');
    else cardYear.classList.remove('invalid');
});
cardMonth.addEventListener('keyup', () => {
    cardDateMonth = cardMonth.value;
    changeDate();

    if(cardMonth.value.match(/^[0-9]*/g) != cardMonth.value) {
        cardMonth.classList.add('invalid');
        let errorMsg = cardMonth.nextSibling.nextSibling;
        errorMsg.innerText = "Wrong format, numbers only";
    }
    else cardMonth.classList.remove('invalid');

    if(Number(cardMonth.value) > 12) {
        cardMonth.classList.add('invalid');
        let errorMsg = cardMonth.nextSibling.nextSibling;
        errorMsg.innerText = "The value can't exceed 12";
    }
    else cardMonth.classList.remove('invalid');
});
formBtn.addEventListener('click', () => {
    let form = formBtn.parentElement;
    if(verifyInputFields()) form.classList.add('active');
});

function changeDate() {
    if(cardDateMonth.length == 0) cardDateMonth = '00';
    if(cardDateYear.length == 0) cardDateYear = '00';
    if(cardDateMonth.length == 1) cardDateMonth = '0' + cardDateMonth;
    if(cardDateYear.length == 1) cardDateYear = '0' + cardDateYear;
    cardDate.innerText = `${cardDateMonth}/${cardDateYear}`;
}
function resetInputFields() {
    for(let i = 0; i < allInputs.length; i++)
        allInputs[i].value = '';
}
function verifyInputFields() {
    for(let i = 0; i < allInputs.length; i++) 
        if(allInputs[i].value == '' || allInputs[i].classList.contains('invalid'))
            return false;
    return true;
}