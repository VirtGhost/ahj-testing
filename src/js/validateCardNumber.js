export default function validateCardNumber(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let cardNum = parseInt(num[i], 10);

    if ((num.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return sum % 10 === 0;
}
