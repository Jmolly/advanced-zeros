module.exports = function getZerosCount(number, base) {
  
  let minZerosCount = Number.MAX_VALUE;

  for (let i = 2; i <= base; i++) {
    if (isPrime(i, base)) {
      let primesInExp = 0;
      let zerosCount = 0;
      let expForZeros = 1;
      let exponent = 0;

      while (base % i == 0) {
        base /= i;
        exponent++;
      }

      while (primesInExp < number) {
        primesInExp = Math.pow(i, expForZeros++);
        zerosCount += Math.floor(number / primesInExp);
      }

      minZerosCount = Math.min(minZerosCount, Math.floor(zerosCount / exponent));
    }
  }

  return minZerosCount;
};

function isPrime(num, base) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }

  return base % num == 0;
}
