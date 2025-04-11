    
    function personalBillAmmount() {
        const guestNumber = document.getElementById("guestsNumber");
        const billAmount = document.getElementById("billAmount");
        const tipsPercent = document.getElementById("tipsPercent");
        const errorMessage = document.getElementById("error");
        const finalCheck = document.getElementById("finalCheckOutput");

        const checkTotal = parseInt(billAmount.value);
        const guestTotal = parseInt(guestNumber.value);
        const tipsTotal = parseInt(tipsPercent.value);

        if(guestTotal>0 && checkTotal>0 && tipsTotal>=0){ 
            let personalBill = (checkTotal + checkTotal*tipsTotal / 100)/  guestTotal;
            finalCheck.innerHTML = `${personalBill.toFixed(2)} денег`;
            errorMessage.innerHTML = ``;
            
        } else{
            finalCheck.innerHTML = `0 денег`;
            errorMessage.innerHTML = `Ошибка ввода`;
        }
        
    }