import {
  isObjectKeysFalse,
  calcArrayTotalItemValue,
  mapObjectAndSetValues,
} from './';

it('isObjectKeysFalse helper function works correctly', () => {
  const obj = { 1: 0, 2: '', 3: '', 4: false, 5: null, 6: undefined };
  const result = isObjectKeysFalse(obj);
  expect(result).toEqual(true);
});

it('calcArrayTotalItemValue helper function works correctly', () => {
  const arr = [{ val: 40 }, { val: 50 }, { val: 10 }];
  const result = calcArrayTotalItemValue(arr, 'val');
  expect(result).toEqual(100);
});

it('mapObjectAndSetValues helper function works correctly', () => {
  const func = (key, value) => ({ [key]: value });
  const obj = { 1: 'value-1', 2: 'value-2', 3: 'value-3' };
  const result = mapObjectAndSetValues(obj, func);
  expect(result).toEqual([
    { 1: 'value-1' },
    { 2: 'value-2' },
    { 3: 'value-3' },
  ]);
});
