const guestNumber = Math.floor(parseInt(prompt('Введите количество гостей ')));

if(guestNumber>0){
    const bill = Number(prompt('Введите сумму счёта '));
    if(bill>0){
        const tips = parseInt(prompt('Введите процент чаевых '));
        let personalBill = (bill + bill*tips/100)/guestNumber;
        alert(
            `Общий счёт: ${bill} 
            \nСервисный сбор: ${tips}%
            \nКоличество гостей: ${guestNumber}
            \nОплата от каждого гостя: ${personalBill.toFixed(2)}`
        );
    }
}