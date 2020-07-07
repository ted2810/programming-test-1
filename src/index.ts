/**
 * Returns the checksum of a number.
 * 
 * A checksum is calculated by adding all the digits
 * that match the next digit of the number. The next
 * digit of the last digit is the first digit.
 */
export function getChecksum(n: number): number {
  const digits = String(n);
  const matches: Array<number> = [];

  if (digits.length === 1) {
    return 0;
  }

  for (let i = 0; i < digits.length; i += 1) {
    const currentIndex = i;
    const nextIndex = i !== digits.length - 1 ? i + 1 : 0;
    const currentDigit = Number(digits[currentIndex]);
    const nextDigit = Number(digits[nextIndex]);
  
    if (currentDigit === nextDigit) {
      matches.push(currentDigit);
    }
  }

  return matches.length
    ? matches.reduce((digit1, digit2) => digit1 + digit2)
    : 0;
};

/**
 * Verifies a checksum against a number.
 */
export function verifyChecksum(n: number, checksum: number) {
  const actualChecksum = getChecksum(n);
  return checksum === actualChecksum;
};
