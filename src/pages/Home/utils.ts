export function generateRandomID() {
  const randomFraction = Math.random();
  const min = 1;
  const max = 999999;
  const randomInt = Math.floor(randomFraction * (max - min + 1)) + min;

  return randomInt;
}
