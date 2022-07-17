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

  // код для задачи №2 писать здесь

  return totalAmount;
}
