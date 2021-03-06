
function getAverageAge(list) {
  return Math.round(list.reduce((acc, el) => acc + el.age, 0)/list.length);//с помощью редьюс посчитали сумму всех возрастов, результат поделили на длинну массива, так как длинна равна количеству участников и округлили результат
}

function pendulum(values) {
    let min = Math.min(...values); //нашли минимальний элемент массива
    values.splice(values.indexOf(min), 1); //удалили минимальный элемент из входящего массива
    values.sort((a,b) => a - b); //отсортировали массив без минимального элемента по возрастанию
    let rightArr = values.filter((el, i) => i % 2 === 0);//формируем правую часть маятника
    let leftArr = values.filter((el, i) => i % 2 !== 0).reverse();//формируем левую часть маятника
    return [...leftArr, min, ...rightArr]; //
  }

