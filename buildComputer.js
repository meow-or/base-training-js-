let processorPrice = {
  'i5': 5000,
  'i7': 10000
}

let displayPrice = {
  13: 5000,
  15: 10000
}

let memoryPrice = {
  8: 3000,
  16: 4000
}

let buildComputer = function(memory, display, processor) {
  let customComputer = {
    basicPrice: 5000,
    processor: processor,
    display: display,
    memory: memory,
  

    getDescription: function () {
      return 'компьютер с процессором ' + this.processor + ', диагональю ' + this.display +  ', оперативной памятью ' + this.memory;
    },

    getPrice: function () {
      return this.basicPrice + processorPrice[this.processor] + displayPrice[this.display] + memoryPrice[this.memory];
    }
  }
  return customComputer;
}

let myComputer = buildComputer(8, 13, 'i7');

console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());

let anotherComputer = buildComputer(16, 15, 'i5');

console.log('В корзине ' + anotherComputer.getDescription() + ' стоимостью ' + anotherComputer.getPrice());

// Object as a dictionary

let catsFavouriteFood = {
  Кекс: 'рыба',
  Рудольф: 'котлета',
  Снежок: 'сметана'
}

let printFavouriteFood = function(name) {
  // let's use [] notation
  return 'My favourite food - ' + catsFavouriteFood[name];

}

console.log(printFavouriteFood('Рудольф'));

// this

let cat = {
  name: 'Keks',
  color: 'orange',
  age: 5,

  getGreeting: function() {
    return 'Мяу, привет! Меня зовут ' + this.name;
  }
}

console.log(cat.getGreeting());