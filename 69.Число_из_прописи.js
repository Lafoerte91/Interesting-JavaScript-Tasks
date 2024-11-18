/*
Дано некоторое число прописью:
let str = `
  один миллиард двести тридцать четыре миллиона
  пятьсот шестьдесят семь тысяч восемсот девяносто
`
Преобразуйте эту пропись в нормальное число:
1234567890
Ваш код, конечно же, должен быть универсальным и работать для любых чисел в пределах миллиардов.
*/
let str = 'один миллиард двести тридцать четыре миллиона пятьсот шестьдесят семь тысяч восемсот девяносто'

function wordsToNumber(str) {
  const ranks = {
    один: 1,
    два: 2,
    три: 3,
    четыре: 4,
    пять: 5,
    шесть: 6,
    семь: 7,
    восемь: 8,
    девять: 9,
    десять: 10,
    двадцать: 20,
    тридцать: 30,
    сорок: 40,
    пятьдесят: 50,
    шестьдесят: 60,
    семьдесят: 70,
    восемьдесят: 80,
    девяносто: 90,
    сто: 100,
    двести: 200,
    триста: 300,
    четыреста: 400,
    пятьсот: 500,
    шестьсот: 600,
    семьсот: 700,
    восемьсот: 800,
    девятьсот: 900,
    тысяч: 1000,
    тысячи: 1000,
    тысяча: 1000,
    миллион: 1000000,
    миллиона: 1000000,
    миллионов: 1000000,
    миллиард: 1000000000,
    миллиарда: 1000000000,
    миллиардов: 1000000000,
  };
  let number = 0  // сюда запишем преобразованное число
  let currentRank = 0 // текущая степень
  let tempNumber = 0 // временная переменная для хранения числа
  const words = str.split(' ')

  for(const word of words) {
    currentRank = ranks[word]

    if(currentRank !== undefined) {
      if(currentRank == 1000 || currentRank == 1000000 || currentRank == 1000000000) {
        number += tempNumber * currentRank 
        tempNumber = 0
      } else {
        tempNumber += currentRank
      }
    }
  }

  number += tempNumber

  return number
}

console.log(wordsToNumber(str))