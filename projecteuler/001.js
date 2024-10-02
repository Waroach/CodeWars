function total() {
  let i = 0;
  let total = 0;

  while (i < 10) {
    if (i % 3 === 0 || i % 5 === 0) {
      // Check if i is a multiple of 3 or 5
      total = total + i;
    }
    i++; // Increment i in each loop
  }
  return total;
}

// Log to console
console.log(total());
