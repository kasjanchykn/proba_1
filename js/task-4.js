/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      amount,
      type,
    };
    return transaction;
  },

  /**
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    const depositInfo = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(depositInfo);
  },

  /**
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return `Your balance is less than ${amount}`;
    }

    this.balance -= amount;
    const withdrawInfo = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(withdrawInfo);
  },

  /**
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /**
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return null;
  },

  /**
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },

  /* ============== Додаткові методи ============== */
  /**
   * Метод видаляє всі транзакції та скидає баланс рахунку до 0.
   */
  resetAccount() {
    this.transactions = [];
    this.balance = 0;
  },

  /**
   * Метод повертає кількість всіх транзакцій.
   */
  getTransactionCount() {
    return this.transactions.length;
  },
  /**
   * Метод повертає середнє значення по типу транзакції за всю історію.
   * Якщо транзакцій немає повертає 0.
   */
  getAverageTransactionValue(type) {
    if (this.transactions.length === 0) {
      return 0;
    }
    let totalAmountByType = 0;
    let totalTransactionsByType = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalAmountByType += transaction.amount;
        totalTransactionsByType += 1;
      }
    }

    return totalAmountByType / totalTransactionsByType;
  },
};
