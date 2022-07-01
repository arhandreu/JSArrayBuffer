export default class ArrayBufferConverter {
  static load(bufString) {
    return ((input) => {
      const buffer = new ArrayBuffer(bufString.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(bufString);
  }

  static toString(buffer) {
    const bufferView = new Uint16Array(buffer);
    let bufString = '';
    for (const symbol of bufferView) {
      bufString += String.fromCharCode(symbol);
    }
    return bufString;
  }
}
