import {getChecksum, verifyChecksum} from '../index';

describe('getChecksum()', () => {
  test('with numbers with matches', () => {
    expect(getChecksum(1111)).toBe(4);
    expect(getChecksum(1122)).toBe(3);
    expect(getChecksum(1223)).toBe(2);
    expect(getChecksum(1231)).toBe(1);
  });
  test('with numbers without matches', () => {
    expect(getChecksum(5)).toBe(0);
    expect(getChecksum(1234)).toBe(0);
    expect(getChecksum(1212)).toBe(0);
  });
});

describe('verifyChecksum()', () => {
  test('with numbers with matches', () => {
    expect(verifyChecksum(1111, 4)).toBe(true);
    expect(verifyChecksum(1122, 3)).toBe(true);
    expect(verifyChecksum(1223, 2)).toBe(true);
    expect(verifyChecksum(1231, 1)).toBe(true);
  
    expect(verifyChecksum(1111, 10)).toBe(false);
    expect(verifyChecksum(1122, 10)).toBe(false);
    expect(verifyChecksum(1223, 10)).toBe(false);
    expect(verifyChecksum(1231, 10)).toBe(false);  
  });

  test('with numbers without matches', () => {
    expect(verifyChecksum(5, 0)).toBe(true);
    expect(verifyChecksum(1234, 0)).toBe(true);
    expect(verifyChecksum(1212, 0)).toBe(true);
  
    expect(verifyChecksum(5, 10)).toBe(false);
    expect(verifyChecksum(1234, 10)).toBe(false);
    expect(verifyChecksum(1212, 10)).toBe(false);
  });
});
