var buttonEl = document.querySelector('.calc-btn')

var combineNumbers = function (x, y) {
  return x + y
}

var getResult = function () {
  var result = combineNumbers(3, 5)
  console.log(result)
  return 'the result is ' + result
}

// Your code goes here
buttonEl.addEventListener('click', getResult)
