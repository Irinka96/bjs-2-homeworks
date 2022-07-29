// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (const item in arr) {
    if (arr[item] > max) {
      max = arr[item];
    }
    if (arr[item] < min) {
      min = arr[item];
    }
    sum += arr[item];
  }
  avg = sum / arr.length;
  // console.log(`sum = ${sum}`);
  // console.log(`length = ${arr.length}`);
  // console.log(`avg = ${avg}`);

  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i in arr){
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let currentSum = 0;
  for (let i in arrOfArr){
    currentSum = func(arrOfArr[i])
    if (currentSum > max){
      max = currentSum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i in arr){
    if (max < arr[i]){
      max = arr[i];
    }
    if (min > arr[i]){
      min = arr[i];
    }
  }
  return Math.abs(max - min);
}
