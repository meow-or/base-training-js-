/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

*/



let firstPlayer = {
  name: 'One',
  goals: 7,
  passes: 3
}

let secondPlayer = {
  name: 'Two',
  goals: 12,
  passes: 4
}

let thirdPlayer = {
  name: 'Three',
  goals: 33,
  passes: 10
}

let players = [firstPlayer, secondPlayer, thirdPlayer];



let getStatistics = function (igroki) {

  let goalsSum = 0;
  
  for (let i = 0; i < igroki.length; i++) {
    
    goalsSum += igroki[i].goals;

    igroki[i].coefficient = igroki[i].goals * 2 + igroki[i].passes;

  }

  for (j = 0; j < igroki.length; j++) {
    igroki[j].percent = Math.round(igroki[j].goals / (goalsSum / 100));
  }
 
  
  return igroki;
}


getStatistics(players);

console.log(players);