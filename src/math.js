export const getRandomInt = (maxNum) => Math.floor(Math.random() * maxNum);

export const isEven = (num) => num % 2 === 0;

export const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return Math.max(num1, num2);
};

export const getProgression = (firstElement, step, length) => {
  const progression = [firstElement];

  for (let i = 1; i < length; i += 1) {
    const nextElement = progression[i - 1] + step;

    progression.push(nextElement);
  }

  return progression;
};
