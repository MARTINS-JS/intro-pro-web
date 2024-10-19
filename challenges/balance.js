const users = [
  {
    name: "Rubens",
    revenues: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Bianca",
    revenues: [9.8, 120.3, 440.2, 45.3],
    expenses: [450.2, 29.9]
  },
  {
    name: "Rebeca",
    revenues: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  }
]

function calculateBalance(revenues, expenses) {
  const totalRevenues = addNumbers(revenues)
  const totalExpenses = addNumbers(expenses)
  
  return totalRevenues - totalExpenses
}

function addNumbers(numbers) {
  let sum = numbers.reduce(function(accumulator, currentNumber) {
    return accumulator + currentNumber
  }, 0)

  return sum
}

for (let user of users) {
  const balance = calculateBalance(user.revenues, user.expenses);

  if (balance > 0) {
    console.log(`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}.`)
  } else {
    console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}.`)
  }
}