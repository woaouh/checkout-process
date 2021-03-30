export function isObjectKeysFalse(obj) {
  return Object.keys(obj).every((key) => !obj[key]);
}

export function calcArrayTotalItemValue(arr, value) {
  return arr.reduce((acc, item) => item[value] + acc, 0);
}

export function mapObjectAndSetValues(obj, cb) {
  Object.keys(obj).map((key) => cb(key, obj[key]));
}
