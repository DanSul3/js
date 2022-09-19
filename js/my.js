//5
// let a = '1';

// if(a === '1' && typeof a === 'string'){
//     console.log('true')
// }else{
//     console.log('false')
// }


//1.создайте функцию конкатенации строк(value1, value2), которая возвращает результат конкатенации двух строк.
// const str = (value1, value2)=> value1 + value2;
// console.log(str('aa', 'bb'));


//2.создайте функцию getStringLength(значение), которая возвращает длину заданной строки.
// const getStringLength = value => value.length;
// console.log(getStringLength('aaaaa'))


//3. создайте функцию getFirstChar(значение), которая возвращает первый символ заданной строки.
// const getFirstChar = (value)=> value[0];
// console.log(getFirstChar('abvgd'))


//4. создайте функцию removefirstoccurrence(str, value),
//которая удаляет первое вхождение строки внутри другой строки
//(надо удалить указанный 2 параметр со строки, подсказка: replace);
// const removeFirstOccurrences = (str, value)=> str.replace(value ,'');
// console.log(removeFirstOccurrences('To be or not to be', 'not'));
// console.log(removeFirstOccurrences('I like legends', 'end'));
// console.log(removeFirstOccurrences('ABABAB','BA'))

//5. Удалите первую и последнюю угловые скобки из строки тега (используйте replace)
// const removeTag = value => value.replace(/^.|.$/g,"");
// console.log(removeTag('<div>'));

//6.  сделать первый символ в строке "слово" в верхнем регистре
// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1); 
// }

//7
// function hello(name) {
//     if(name){
//         return "Hello, " + name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase() + "!"; 
//     }else{
//         return "Hello, World!";
//     }
// }

//8.Напишите функцию JavaScript для распаковки строки. 
// function uncamelize(str, separator) {
//     // Assume default separator is a single space.
//     if(typeof(separator) == "undefined") {
//       separator = " ";
//     }
//     // Replace all capital letters by separator followed by lowercase one
//     var str = str.replace(/[A-Z]/g, function (letter){
//       return separator + letter.toLowerCase();
//     });
//     return str;
//   }
// console.log(uncamelize('helloWorld'));  //"hello world"
// console.log(uncamelize('helloWorld','-')); //"hello-world"
// console.log(uncamelize('helloWorld','_')); //"hello_world"





//array tasks:

//1. Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.
// let array = ['a', 'b', 'c'];
// for(i = 0; i < array.length; i++){
//     console.log(array[i])
// }




//2. Создайте массив с числами. Прибавьте к каждому элементу массива число 3. 
//Выведите на экран измененный массив.
// let array = [1, 2, 3, 4];
// for(i = 0; i < array.length; i++){
//     array[i] += 3;
// }
// console.log(array)




//3.Вам нужно заполнить массив числами от 1 до n
//(для более полного понятия, посмотрите тесты. Подсказка к решению: push)
// function preFizz(n) {
//     let array = [];

//     for(i = 1; i <= n; i++){
//         array.push(i);
//     }
//     return array;
// }
// console.log(preFizz(6))



//4.В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел a и b. 
//Каждый список будет состоять из 3 положительных целых чисел выше 0, 
//представляющих размеры прямоугольных параллелепипедов a и b. 
//Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше.
//Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), объем a равен 12, а объем b равен 20. 
//Следовательно, функция должна вернуть 8.
// function findDifference(a, b) {
//     let result = Math.abs(divide(a) - divide(b));
//     return result;
// }
// function  divide(array){
//     let result = 1;
//     for(i = 0; i < array.length; i++){
//         result *= array[i];
//     }
//     return result;
// }
// console.log(findDifference([2, 2, 3], [5, 4, 1]));



//5.Завершите функцию, которая принимает два целых числа ( a, b, где a < b) и 
//верните массив всех целых чисел между входными параметрами, включая их.
// function between(a, b) {
//     let array = [];

//     while(a <= b){
//         array.push(a);
//         a++;
//     }
//     return array;
// }
// console.log(between(1, 4))



//6.Напишите функцию getArrayOfPositives(arr), 
//которая будет возвращать массив только из позитивных чисел от оригинального массива
// function getArrayOfPositives(arr){
//     let result = [];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(getArrayOfPositives([0, 1, 2, 3, -4, 5]));



//7. Напишите функцию getArrayOfStrings(arr), 
//которая будет возвращать массив только из строк от оригинального массива
//(подсказка: typeof)
// function getArrayOfStrings(arr){
//     let result = [];

//     for(i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'string'){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(getArrayOfStrings([ 0, 1, 'cat', 3, true, 'dog' ]));



//8. Создайте функцию removeFalsyValues(arr), 
//которая удаляет ложные значения из указанного массива
// function removeFalsyValues(arr){
//     let result = [];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i]){
//            result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(removeFalsyValues([0, false, 'cat', NaN, true, '']))
// console.log(removeFalsyValues([1, 2, 3, 4, 5, 'false']))
// console.log(removeFalsyValues([false, 0, NaN, '', undefined]))



//9. создать функцию getUpperCaseStrings(arr), 
//которая возвращает массив строк в верхнем регистре из указанного массива
// let array = [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ];
// let result = [];
// for(i = 0; i < array.length; i++){
//     result.push(array[i].toUpperCase());
// }
// console.log(result)



//10. создать функцию getStringsLength(arr), 
//которая возвращает массив длин строк из заданного массива строк.
// function getStringsLength(arr){
//     for(i = 0; i < arr.length; i++){
//         arr[i] = arr[i].length;
//     }
//     return arr;
// }
// console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]));



//11.Вы получаете массив чисел, возвращаете сумму всех положительных.
//Примечание: если суммировать нечего, сумма по умолчанию равна 0.
// function positiveSum(arr) {
//     let sum = 0;
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(positiveSum([1,-4,7,12]))



//12.Завершите функцию квадратной суммы, 
//чтобы она возводила в квадрат каждое переданное ей число, 
//а затем суммировала результаты.
// function squareSum(numbers){
//     let sum = 0;
//     for(i = 0; i < numbers.length; i++){
//         sum += Math.pow(numbers[i], 2) 
//     }
//     return sum;
    
// }
// console.log(squareSum([0, 3, 4, 5]));




//13.сумму всех их элементов.
//1 - способ:
// function arrayPlusArray(arr1, arr2) {
//     let result = arrSum(arr1) + arrSum(arr2);
//     return result;
// }

//2 - способ:
// const arrayPlusArray = (arr1, arr2)=> arrSum(arr1) + arrSum(arr2);

// const arrSum = array => array.reduce(((sum, elem) => sum + elem), 0);

//3- способ:
//function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));




//14.надо суммировать ЧИСЛА в массиве и вывести результат суммы, 
//не считая строки(используйте typeof для проверки типа данных элемента массива)

//1 - способ:
// function sumMix(x){
//     let sum = 0;
//     for(i = 0; i < x.length; i++){
//         sum += +x[i];
//     }
//     return sum;
// }

//2 - способ:
//const sumMix = x => x.map(elem => +elem).reduce((sum, elem) => sum + elem);

//console.log(sumMix([9, 3, '7', '3']));



//1.Напишите функцию JavaScript для форматирования числа с точностью до 
//заданных знаков после запятой.
// const decimals = (num, d)=> num.toFixed(d);
// console.log(decimals(2.100212, 2));



//2. Напишите функцию JavaScript для генерации случайного целого числа
// function rand(min, max){
//     if (min==null && max==null){
//         return 0;
//     }
//     if (max == null) {
//         max = min;
//         min = 0;
//     }
//     return min + Math.floor(Math.random() * (max - min + 1));
// }
// console.log(rand(20,1));
// console.log(rand(1,10));
// console.log(rand(6));
// console.log(rand());


//3.Напишите функцию JavaScript, 
//чтобы получить наибольшее число из трех разных чисел
// const highest_of_three = (...num)=> Math.max.apply(null, num);
// console.log(highest_of_three(-5, 4, 2));



//4. Дано число n. Найдите сумму всех квадратов до числа n
// function sumOfSquare(n){
//     let sum = 0;
//     for(i = 1; i <= n; i++){  
//         sum += Math.pow(i, 2);
//     }
//     return sum;
// }
// console.log(sumOfSquare(3));