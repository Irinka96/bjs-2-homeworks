function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b**2-4*a*c;
  if (discriminant == 0) {
    const result = -b/(2*a);
    arr = [result];
  }
  else if (discriminant > 0) {
    const result1 = (-b + Math.sqrt(discriminant) )/(2*a);
    const result2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr = [result1, result2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let mouths;
  let nowDate = new Date();

  // str -> number приведение типов
  // если не число, то выдать ошибку

  let userPercent = Number(percent);
  let userContribution = Number(contribution);
  let userAmount = Number(amount);

  if (isNaN(userPercent)){
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } 
  else if (isNaN(userContribution)){
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }
  else if (isNaN(userAmount)){ // if userAmount == None:, if userAmount:
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }
  
  let dateDiff = date - nowDate;
  if (dateDiff < 0){
    return (`Параметр "Дата" содержит неправильное значение "${date}"`);
  }
  mouths = (date.getFullYear() - nowDate.getFullYear()) * 12; //2025 -2022, 36 - 7 + 1 = 30   
  mouths -= nowDate.getMonth();
  mouths += date.getMonth();
  // console.log(mouths);

  let S = amount - contribution;
  let P = percent / 1200;
  mouthCost = S * (P + (P / ((Math.pow(1 + P, mouths)) - 1)));
  // console.log(mouthCost);

  totalAmount = mouthCost * mouths;
  // console.log(totalAmount.toFixed(2));       
  return Number(totalAmount.toFixed(2));
}      

