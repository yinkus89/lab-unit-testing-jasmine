function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a === undefined || b === undefined) {
      return undefined;
    }
    return a / b;
  }
  