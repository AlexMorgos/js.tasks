function multiplesOf(numbers) {
    var multiples = numbers[0];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % multiples === 0) {
        multiples = numbers[i];
      }
    }
  
    return multiples;
  }
  
  console.log(multiplesOf([4, 6, 8, 10, 12], 2));