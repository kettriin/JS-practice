let points = 0;
alert(`Начните игру`);
let answer = parseInt(prompt(
    `Вопрос 1:
    \nКто стал второй матерью для Крошечки-Хаврошечки?
    \n1 Ласточка
    \n2 Корова
    \n3 Матушка Река`)
);

if(answer === 2){ 
    points += answer;
    answer = 0;
}

answer = parseInt(prompt(
    `Вопрос 2:
    \nКто съел охотников в Красной шапочке?
    \n1 Бабушка
    \n2 Волк
    \n3 Никто не ел`)
);

if(answer === 3){ 
    points += answer;
    answer = 0;
}

alert(`Вы набрали ${points} баллов из 5 возможных`);