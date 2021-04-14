export const isObjectKeysFalse = (obj) =>
  Object.keys(obj).every((key) => !obj[key]);

export const calcArrayTotalItemValue = (arr, val) =>
  arr.reduce((acc, item) => item[val] + acc, 0);

export const mapObjectAndSetValues = (obj, cb) =>
  Object.keys(obj).map((key) => cb(key, obj[key]));

export const getErrorMessage = (errors, name) =>
  errors[name]?.message && errors[name]?.message;
