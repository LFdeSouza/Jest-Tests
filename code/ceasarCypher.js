export default function ceasarCypher(string, key) {
  return string.replace(/[a-z]/gi, (char) => {
    if (char.toUpperCase() === char) {
      return String.fromCharCode(((char.charCodeAt(0) + key - 65) % 26) + 65);
    }
    return String.fromCharCode(((char.charCodeAt(0) + key - 97) % 26) + 97);
  });
}
