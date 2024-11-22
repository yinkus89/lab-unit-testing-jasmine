function calculateArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || length === undefined || width === undefined) {
      return undefined;
    }
    return length * width;
  }
  