const crypto = require("crypto");

class PaymentService {
  constructor() {
    this.retryLimit = 3;
    this.cache = new Map();
  }

  generateTransactionId(userId) {
    return crypto
      .createHash("sha256")
      .update(userId + Date.now())
      .digest("hex");
  }

  processPayment(userId, amount) {
    if (!userId || amount <= 0) {
      throw new Error("Invalid payment details");
    }

    const transactionId = this.generateTransactionId(userId);

    return {
      success: true,
      transactionId,
      amount,
    };
  }
}

module.exports = PaymentService;
