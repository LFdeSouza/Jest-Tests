export default function analyze(array) {
  const length = array.length;
  const average =
    array.reduce((previous, current) => previous + current) / length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return { length, average, max, min };
}
