//      - `date` - a string, in any format.
//      - `name` - a string, the name of the transactions.
//      - `amount` - a number, the amount of the expenditure/income.
//      - `from` - a string, where this expense/income has come from.
// 

//API =2022-07-12

module.exports = [
  {
    date: "2022-07-21",
    name: "EZ-PASS",
    amount: -200.00,
    from: '',
    category: 'Car',
    type: 'Debit'
  },
  {
    date: "2022-07-22",
    name: "Santander",
    amount: 300.00,
    from: 'Santander Bank',
    category: 'Payment',
    type: 'Credit'
  },
  {
    date: "2022-07-20",
    name: "Thai Box",
    amount: -75.90,
    from: 'DoorDash',
    category: 'Food & Drink',
    type: 'Debit'
  },
  {
    date: "2022-07-20",
    name: "Acorn",
    amount: -5.11,
    from: 'Acorns',
    category: 'Investment',
    type: 'Debit'
  },
  {
    date: "2022-07-20",
    name: "Sheltering Arms",
    amount: 200.00,
    from: 'Sheltering Arms',
    category: 'Deposit',
    type: 'Credit'
  },
  {
    date: "2022-07-20",
    name: "Regal Cinema Mobile",
    amount: -77.20,
    from: 'Regal Cinema',
    category: 'Entertainment',
    type: 'Debit'
  }
]