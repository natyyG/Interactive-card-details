const submit = document.getElementById('submit');
const form = document.getElementById('form');
const complete = document.getElementById('complete')
const confirmBtn = document.getElementById('continue');
confirmBtn.addEventListener('click', ()=>{
    form.style.display = "flex";
    complete.style.display = "none";
    location.reload();
})
const name = document.getElementById('name');
const nameDisp = document.getElementById('nameDisp');
name.addEventListener('input', ()=>{
    nameDisp.innerHTML = name.value;
})
const cardNumber = document.getElementById('cardNumber');
const cardNumberDisp = document.getElementById('cardNumberDisp');
cardNumber.addEventListener('input', ()=>{
    cardNumberDisp.innerHTML = cardNumber.value;
} )
const month= document.getElementById('month');
const year = document.getElementById('year');
const monthDisp = document.getElementById('monthDisp');
const yearDisp = document.getElementById('yearDisp');
month.addEventListener('input', ()=>{
    monthDisp.innerHTML = month.value + "/";
} )
year.addEventListener('input', ()=>{
    yearDisp.innerHTML = year.value;
    console.log(year.value);
}
)
const cvc = document.getElementById('cvc');
const cvcDisp = document.getElementById('cvcDisp');
cvc.addEventListener('input', ()=>{
    cvcDisp.innerHTML = cvc.value;
}
)
let value = 0;
function clearerr(){
    const err = document.querySelectorAll('.err');
    for(let error of err){
        error.style.display = 'none';
    }
}
    submit.addEventListener('click', ()=>{
        clearerr();
        if(name.value == ''){
            name.style.border = '1px solid hsl(0, 100%, 66%)';
            const errName = document.getElementById('errName');
            errName.style.display = 'block';
        }else{
            name.style.border = '1px solid hsl(279, 6%, 55%)';
            value += 1;
        }
        let str = cardNumber.value.trim();
            let trimstr = str.split(' ').join('');
        const errNumber = document.getElementById('errNumber');
        if(cardNumber.value == ''){
            cardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
            errNumber.innerHTML = 'Can\'t be blank'
            errNumber.style.display = 'block';
            
        }else if(isNaN(trimstr) === true){
            cardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
            errNumber.innerHTML = 'Wrong format, numbers only'
            errNumber.style.display = 'block';
            console.log(isNaN(cardNumber.value));
        }else if(cardNumber.value.length < 16){
            cardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
            errNumber.innerHTML = 'Length must be 16'
            errNumber.style.display = 'block';
        }else{
            cardNumber.style.border = '1px solid hsl(279, 6%, 55%)';
            value += 1;
        }
        if(month.value == '' && year.value == ''){
            month.style.border = '1px solid hsl(0, 100%, 66%)';
            const errMonth = document.getElementById('errMonth');
            errMonth.style.display = 'block';
        }else if(isNaN(month.value)===true){
            month.style.border = '1px solid hsl(0, 100%, 66%)';
            const errMonth = document.getElementById('errMonth');
            errMonth.innerHTML = 'Wrong format, numbers only'
            errMonth.style.display = 'block';
        }else if(month.value.length > 2){
            month.style.border = '1px solid hsl(0, 100%, 66%)';
            const errMonth = document.getElementById('errMonth');
            errMonth.innerHTML = 'Length must be 2'
            errMonth.style.display = 'block';
        }else{
            month.style.border = '1px solid hsl(279, 6%, 55%)';
            value += 1;
        }
        if(cvc.value == ''){
            cvc.style.border = '1px solid hsl(0, 100%, 66%)';
            const errCvc = document.getElementById('errCvc');
            errCvc.style.display = 'block';
        }
        else if(isNaN(cvc.value) === true){
            const errCvc = document.getElementById('errCvc');
            errCvc.innerHTML = 'Wrong format, numbers only'
            errCvc.style.display = 'block';
        }else{
            cvc.style.border = '1px solid hsl(279, 6%, 55%)';
            value += 1;
        }
        if(value === 4){
            form.style.display = 'none';
            complete.style.display = "flex";
            console.log('clicked');
        }
    
    })