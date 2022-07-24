function solveEquation(a, b, c) {
  let arr;
  const discriminant = b**2-4*a*c;
  if (discriminant < 0 ) {
    arr = []
  }
  else if (discriminant == 0) {
    const result = -b/(2*a)
    arr = [result]
  }
  else if (discriminant > 0) {
    const result1 = (-b + Math.sqrt(discriminant) )/(2*a)
    const result2 = (-b - Math.sqrt(discriminant) )/(2*a)
    arr = [result1, result2]  
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let mouths;
  let now_date = new Date();

  // str -> number приведение типов
  // если не число, то выдать ошибку

  let user_percent = Number(percent)
  let user_contribution = Number(contribution)
  let user_amount = Number(amount)

  if (isNaN(user_percent)){
    alert ('Проценты должны быть числом')
  } 
  else{
    if (isNaN(user_contribution)){
      alert ('Первоначальный взнос должны быть числом')
    }
    else{
      if (isNaN(user_amount)){ // if user_amount == None:, if user_amount:
        alert ('Общая стоимость должны быть числом')
      }
      else{
        let date_diff = date - now_date
        if (date_diff < 0){
          alert('Неверная дата')
        }
        else {
          mouths = (date.getFullYear() - now_date.getFullYear()) * 12; //2025 -2022, 36 - 7 + 1 = 30   
          mouths -= now_date.getMonth();
          mouths += date.getMonth();
          // console.log(mouths);
    
          let S = amount - contribution
          let P = percent / 1200
          mouth_cost = S * (P + (P / ((Math.pow(1 + P, mouths)) - 1)))
          // console.log(mouth_cost)
        
          totalAmount = mouth_cost * mouths;
          // console.log(totalAmount.toFixed(2))        
          return totalAmount.toFixed(2);
        }      
      }
    }
  }
}
