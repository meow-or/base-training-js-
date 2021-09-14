let calculateSalary = function (grossPay) {
  let homePay;
  
  if (grossPay < 100000) {
    homePay = grossPay - grossPay * 0.35;
    
  } else {
    homePay = grossPay - grossPay * 0.45;
  }
  
  return homePay;
 
}

console.log(calculateSalary(120000));