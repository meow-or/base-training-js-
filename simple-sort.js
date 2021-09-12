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

