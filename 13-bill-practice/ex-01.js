const guestNumber = Math.floor(parseInt(prompt('Введите количество гостей ')));

if(guestNumber>0){
    const bill = Number(prompt('Введите сумму счёта '));
    if(bill>0){
        let personalBill = (bill + bill*0.1)/guestNumber;
        alert(`Оплата от каждого гостя: ${personalBill.toFixed(2)}`);
    }
}