// Создание кастомных select-ов
(function(){

    const   cardMonth = document.getElementById('cardMonth'),
            cardYear = document.getElementById('cardYear'),
            cardMonthDivWrapper = document.getElementById('cardMonthDivWrapper'),
            cardMonthDivOptions = document.getElementById('cardMonthDivOptions'),
            cardYearDivWrapper = document.getElementById('cardYearDivWrapper'),
            cardYearDivOptions = document.getElementById('cardYearDivOptions');

    cardMonthDivWrapper.addEventListener('click', function(evt){
        cardMonthDivOptions.classList.toggle('visually-hidden');
    });

    cardYearDivWrapper.addEventListener('click', function(evt){
        cardYearDivOptions.classList.toggle('visually-hidden');
    });

    cardMonthDivOptions.addEventListener('click', function(evt) {
        let target = evt.target;
        while (target !== cardMonthDivOptions) {
            if (target.classList.contains('div-options__item')) {
                document.querySelector('.card-month_div-wrapper__value').innerHTML = target.innerHTML;
                cardMonth.value = target.innerHTML;
                return
            }
            target = target.parentNode;
        }
    });

    cardYearDivOptions.addEventListener('click', function(evt) {
        let target = evt.target;
        while (target !== cardMonthDivOptions) {
            if (target.classList.contains('div-options__item')) {
                document.querySelector('.card-year_div-wrapper__value').innerHTML = target.innerHTML;
                cardYear.value = target.innerHTML;
                return
            }
            target = target.parentNode;
        }
    });

})();

// Объединение полей input для передачи информации о номере банковской карты
(function(){

    const   card1 = document.getElementById('cardNumber1'),
            card2 = document.getElementById('cardNumber2'),
            card3 = document.getElementById('cardNumber3'),
            card4 = document.getElementById('cardNumber4'), 
            cardNumber = document.getElementById('cardNumber');

    function getCardNumber(obj) {
        cardNumber.value = card1.value + ' ' + card2.value + ' ' + card3.value + ' ' + card4.value;

        if (obj.value.length == 4) {
            var next = obj.nextSibling;
            while(next.nodeType != 1 && next.nextSibling)
                next = next.nextSibling;
            if (next.nodeType == 1)
                next.focus();
        }
    }

    function validate(inp) {
    inp.value = inp.value.replace(/[^0-9]/, "");
    }

    document.querySelector('.card-wrapper__input').addEventListener('keyup', function(evt) {
        
        let target = evt.target;
        while (target !== document.querySelector('.card-wrapper__input')) {
            if (target.tagName == 'INPUT') {
                getCardNumber(target);
                validate(target);
                return;
            }
            target = target.parentNode;
        }
    });
})();