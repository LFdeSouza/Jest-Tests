export default function reverseString(string) {
  if (typeof string === "string") {
    const reversed = [...string].reverse().join("");
    return reversed;
  } else {
    return "";
  }
}
