let number = 15;
let taskResult;



  let fizbuzFun = function () {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz'
    } else if (number % 5 === 0) {
      return 'Buzz'
    } else if (number % 3 === 0) {
      return 'Fizz'
    } else {
      return number
    }
  } 

  taskResult = fizbuzFun();

  console.log(taskResult);




/* Техническое задание

Программа должна анализировать числа.

Если число делится на 3, результат работы программы — строка 'Fizz'.

Если число делится на 5 — строка 'Buzz'.

Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.

В остальных случаях результат работы программы — изначальное число.

Число записано в переменную number.

Результат работы программы записывайте в переменную taskResult.

*/