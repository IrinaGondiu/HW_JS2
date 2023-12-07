let rate = 0.000024;

function exchangeReverse(){
    
    let currentValue = +document.querySelector(".input-1").value;
    let result = (currentValue/ rate);

    document.querySelector(".result-1").innerHTML = currentValue + " BTC = " + result + '$';
}
// ==========================================================================

// Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.

// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет вычитание (-) второго числа из первого и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат вычитания.
// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 - 4 = 4
// 
function substract(){

let firstNum = +document.querySelector('.input-2').value
let secondNum= +document.querySelector('.input-3').value
let result = firstNum-secondNum

document.querySelector(".result-2").innerHTML = `The result is: ${firstNum} - ${secondNum} = ${result}`

}
// =========================================================================

// Функция multiply() будет выполнять умножение двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// // Выполняет умножение (*) первого числа на второе и сохраняет результат в переменную result.
// // Обновляет содержимое элемента с классом result, выводя в нем выражение и результат умножения.
// Пример если input1 = 3, input2 = 4 то результат будет: Результат: 3 * 4 = 12
// 

function multiply(){

  let firstNum = +document.querySelector('.input-4').value
  let secondNum = +document.querySelector('.input-5').value
  let result =firstNum*secondNum
  
  document.querySelector(".result-3").innerHTML = `The result is: ${firstNum} * ${secondNum} = ${result}`
  
  }

  // ============================================================

  // Функция divide() будет выполнять деление двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// // Выполняет деление (/) первого числа на второе и сохраняет результат в переменную result.
// // Обновляет содержимое элемента с классом result, выводя в нем выражение и результат деления.
// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 / 4 = 2

function divide(){

  let firstNum = +document.querySelector('.input-6').value
  let secondNum = +document.querySelector('.input-7').value
  let result = firstNum/secondNum
  
  document.querySelector(".result-4").innerHTML = `The result is: ${firstNum} / ${secondNum} = ${result}`
  
  }

  // =================================================================================

  // Функция getMinutes() будет получать количество часов и возвращать количество минут
// Получает значения из одного input-поле
// Преобразует полученные значение в число с помощью Number() или +.
// Преобразует введенное число в минуты
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.
// Пример если input = 2 то результат будет: Результат: 2 часа = 120 минут

function getMinutes(){

  let num = +document.querySelector('.input-8').value
  let result = (num * 60)
  document.querySelector(".result-5").innerHTML = `Result: ${num} hrs = ${result} minutes`
}

// ============================================================

// Функция calculateAverage() будет показывать среднее значение из трех чисел
// Эта функция получает значения из трех input-полей
// Преобразует полученные значение в число с помощью Number() или +.
// Вычисляет среднее значение, разделив сумму чисел на их количество
// // Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.
// // Пример если input1 = 5, input2 = 2, input3 = 8 то результат будет: Среднее значение от: 5 + 2 + 8 = 15 / 3 = 5

function calculateAverage(){

  let num1 = +document.querySelector(".input-9").value
  let num2 = +document.querySelector(".input-10").value
  let num3 = +document.querySelector(".input-11").value
let sum = num1+num2+num3
  let result = sum / 3
  document.querySelector(".result-6").innerHTML = `Average value: ${num1} + ${num2} + ${num3} = ${sum} / 3 = ${result}`
}