export default function isObjectKeysFalse(obj) {
  return Object.keys(obj).every((key) => !obj[key]);
}
