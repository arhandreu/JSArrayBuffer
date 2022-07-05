import ArrayBufferConverter from '../src/arraybuffer';

const buf = new ArrayBufferConverter();
const bufString = 'Andrew';

test('toBuf', () => {
  buf.load(bufString);
  expect(buf.buffer).toBeInstanceOf(ArrayBuffer);
});

test('toString', () => {
  expect(buf.toString()).toEqual(bufString);
});
