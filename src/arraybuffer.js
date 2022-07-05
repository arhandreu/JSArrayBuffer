export default class ArrayBufferConverter {
  load(bufString) {
    ((input) => {
      const buffer = new ArrayBuffer(bufString.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      this.buffer = buffer;
    })(bufString);
  }

  toString() {
    const buffer16Arr = new Uint16Array(this.buffer);
    return String.fromCharCode(...buffer16Arr);
  }
}
