let points = 0;
alert(`Начните игру`);
let answer = prompt(
    `Вопрос 1:
    \nКто стал второй матерью для Крошечки-Хаврошечки?
    \n1 Ласточка
    \n2 Корова
    \n3 Матушка Река`
);

if(parseInt(answer) === 2 || answer.toLowerCase() === "корова"){ 
    points += 2;
}

answer = prompt(
    `Вопрос 2:
    \nКто съел охотников в Красной шапочке?
    \n1 Бабушка
    \n2 Волк
    \n3 Никто`
);

if(parseInt(answer) === 3 || answer.toUpperCase() === "НИКТО"){ 
    points += 3;
}

alert(`Вы набрали ${points} баллов из 5 возможных`);