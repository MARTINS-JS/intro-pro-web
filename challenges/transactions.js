const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
}

function createTransaction(transaction) {
  if (transaction.type === "debit") {
    user.transactions.push(transaction)
    user.balance += transaction.value
  } else {
    user.transactions.push(transaction)
    user.balance -= transaction.value
  } 
}

function getHigherTransactionByType(transactionType) {
  let bigTransfer = { value: 0 }

  const transfers = user.transactions.filter(function(transaction) {
    return transaction.type === transactionType
  })
  
  for (let transfer of transfers) {
    if (bigTransfer.value < transfer.value) {
      bigTransfer = transfer
    }
  }

  return bigTransfer
}

function getAverageTransactionValue() {
  let sumTransactions = 0

  for (let transaction of user.transactions) {
    sumTransactions += transaction.value
  }

  return sumTransactions / user.transactions.length
}

function getTransactionsCount() {
  let transactionCounter = { 
    debit: 0, 
    credit: 0
  }

  for (let transaction of user.transactions) {
    if (transaction.type === "debit") {
      transactionCounter
      .debit++
    } else {
      transactionCounter
      .credit++
    }
  }

  return transactionCounter
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance)

getHigherTransactionByType("debit")
getHigherTransactionByType("credit")

getAverageTransactionValue()

getTransactionsCount()