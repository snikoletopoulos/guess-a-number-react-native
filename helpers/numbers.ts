export const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  min = Math.ceil(min);
  min = Math.floor(min);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};