import ArrayBufferConverter from '../src/arraybuffer';

test('toBuf', () => {
  const bufString = 'Andrew';
  expect(ArrayBufferConverter.load(bufString)).toBeInstanceOf(ArrayBuffer);
});

test('toString', () => {
  const bufString = 'Andrew';
  expect(ArrayBufferConverter.toString(ArrayBufferConverter.load(bufString))).toEqual(bufString);
});
