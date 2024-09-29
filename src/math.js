export const getRandomInt = (maxNum) => Math.floor(Math.random() * maxNum);

export const isEven = (num) => num % 2 === 0;

export const gcd = (a, b) => {
  while (a > 0 && b > 0) {
    if (a >= b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }  
  return Math.max(a, b);
};