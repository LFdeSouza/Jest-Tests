export default class calculator {
  static add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR";
    }
    return a + b;
  }

  static subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR";
    }
    return a - b;
  }

  static multiply(a, b) {
    if (typeof a === "number" || typeof b === "number") {
      return a * b;
    }
    return "ERROR";
  }

  static divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR";
    }
    return a / b;
  }
}
