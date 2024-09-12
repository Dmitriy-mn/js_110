

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */
  

// const stones = [
//     { name: "Смарагд", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2700, quantity: 3 },
//     { name: "Сапфір", price: 400, quantity: 7 },
//     { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(arr, name) {
//   let sum = 0;

//   for(const stone of arr) {
//     if(stone.name === name) {
//       sum += stone.price * stone.quantity;
//     }
//   }
//   return sum;
// }

// console.log(calcTotalPrice(stones, "Сапфір"));







// ------------------------------------ 4

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {
      const transaction = { id: amount, amount, type };
      return transaction;
    },


  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {
      this.balance += amount;
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
    },
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {
      if(this.balance < amount) {
        console.log("недостатньо коштів");
        return;
      } 

      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    },
  


    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      for(const item of this.transactions) {
        if(item.id === id) {
          return item;
        }
      }
      return "Not found";
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      let sum = 0;
      for(const item of this.transactions) {
        if(item.type === type) {
          sum += item.amount;
        }
      }

      return sum;
    },
};
  


account.deposit(500);
account.deposit(200);
account.withdraw(100);
console.log(account.getTransactionDetails(200))

// console.log(account);
// console.log(account.getBalance());

console.log(account.getTransactionTotal(Transaction.WITHDRAW));
