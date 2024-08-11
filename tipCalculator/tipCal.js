const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

// let calculate = ()=>{
//     const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
//     amount.value ='';
//     guests.value = '';
//     quality.value = '';
//     if (isNaN(tip) || tip === 'Infinity') {
//         tipAmount.innerHTML = 'Tip $0 each';
//     } else {
//         tipAmount.innerHTML = 'Tip $' + tip + ' each';
//     }
//     showTipAmount();
// }

let calculate = ()=>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
   amount.value ='';
     guests.value = '';
    quality.value = '';
    if(tip === 'NaN'){
         tipAmount.innerHTML = 'Tip $0 each'
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'tip $' + tip +'each';
        showTipAmount();
    }
 }

// let showTipAmount = () => {
//     tipAmount.className = 'show';
//     setTimeout(() => { tipAmount.className = tipAmount.className.replace('show', ''); }, 3000);
// }

 let showTipAmount = () =>{
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
};