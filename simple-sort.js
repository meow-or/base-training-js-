/*
let someArray = [7, 3, 4, 8, 34, 12, 16, 43, 5, 9, 101];
console.log(someArray);

for (let currentIndex = 0;  currentIndex <= someArray.length - 2; currentIndex++) {
    
    let minValue = someArray[currentIndex];

    for (let j = currentIndex + 1; j <= someArray.length - 1; j++) {
        if (someArray[j] < minValue) {
            minValue = someArray[j];
            let box = someArray[currentIndex];
            someArray[currentIndex] = minValue;

            someArray[j] = box;

            console.log('Меняем местами ' + box + ' и ' + minValue);
            console.log('Массив сейчас: ' + someArray);

        }
    }
    console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);
}

console.log('Отсортированный по возрастанию массив: ' + someArray);

// медианное значение

let median;

//если длина массива нечетная, то медианное значение ровно посередине

if (someArray.length % 2 !== 0) {
    let medianIndex = (someArray.length - 1) / 2;
    median = someArray[medianIndex];

//иначе берется среднее арифм между двумя средними значениями, стоящими рядом
    
} else {
    let leftIndex = someArray.length / 2 - 1;
    let rightIndex = someArray.length / 2;

    median = (someArray[leftIndex] + someArray[rightIndex]) / 2;
}

console.log('Медианное значение: ' + median);



// отсортировать строку в обратном порядке

let someString = 'abcdef';

let someArr = someString.split('');

console.log(someArr);

for (let i = 0; i <= someArr.length - 2; i++) {

    let maxValue = someArr[i];

    for (let j = i + 1; j <= someArr.length - 1; j++) {

        if (someArr[j] > maxValue) {
            maxValue = someArr[j];

            let box = someArr[i];
            someArr[i] = maxValue;
            someArr[j] = box;
        }
    }
}

console.log(someArr);


console.log(someArr.join(''));
*/

let calculateSalary = function (grossPay) {
  let homePay;
  
  if (grossPay < 100000) {
    homePay = grossPay - grossPay * 0.35;
    
  } else {
    homePay = grossPay - grossPay * 0.45;
  }
  
  return homePay;
 
}

console.log(calculateSalary(120000));