function say () {
  console.log(this.nickname + ' говорит: ' + this. greeting);
}

const cat = {
  nickname: "Кекс",
  greeting: "Мяу",
  say,
};

const dog = {
  nickname: "Полиграф Шариков",
  greeting: "Абырвалг",
  say,
};

const fox = {
  nickname: "Алиса",
  greeting: "What does the fox say?",
  say,
};

const par = cat.say();

console.log(par);

// Стрелочная функция объявлена просто в файле,
// значит её контекстом станет глобальная область видимости,
// то есть window
const say1 = () => {
  console.log(this.nickname + ' говорит: ' + this.greeting);
}

const cat1 = {
  nickname: 'Кекс',
  greeting: 'Мяу',
  say1,
};

cat1.say1(); // > undefined говорит: undefined


function say2 () {
  console.log(this.nickname + ' говорит: ' + this.greeting);

  this.goodies.forEach(goodie => {
    console.log(this.nickname + " любит: " + goodie);
  });
}

const cat2 = {
  nickname: "Кекс",
  greeting: "Мяу",
  goodies: ["Свежую рыбку", "Шнурки хозяйских кроссовок"],
  say2,
};

cat2.say2();

console.log(cat2.say2())