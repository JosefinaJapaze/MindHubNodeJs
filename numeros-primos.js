const primeNumber = num => {
    const limits = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= limits; i++) if (num % i === 0) return false;
    return num >= 2;
  };

  console.log(primeNumber(17));
