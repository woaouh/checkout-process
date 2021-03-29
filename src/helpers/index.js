export function isObjectKeysFalse(obj) {
  return Object.keys(obj).every((key) => !obj[key]);
}

export function calcArrayTotalItemValue(arr, value) {
  return arr.reduce((acc, item) => item[value] + acc, 0);
}
