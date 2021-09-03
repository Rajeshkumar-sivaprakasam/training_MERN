let arr1 = [
  ["id", "name", "gender"],
  ["1", "John", "M"],
  ["2", "Boby", "M"],
  ["3", "Doe", "M"],
];

let arr2 = [
  ["id", "age"],
  ["1", "15"],
  ["2", "22"],
  ["3", "33"],
];

let [keyList, ...valuesList] = arr1;

let arrayOne = valuesList.map((values) => {
  let obj = {};
  values.forEach((val, i) => {
    obj[keyList[i]] = val;
  });
  return obj;
});

console.log(arrayOne);
let [keyList1, ...valuesList1] = arr2;

let arrayTwo = valuesList1.map((values) => {
  let obj = {};
  values.forEach((val, i) => {
    obj[keyList1[i]] = val;
  });
  return obj;
});
let arrayKeyList = [];
console.log(arrayKeyList.concat(keyList, keyList1));
// console.log(keyList);
// console.log({ ...arrayOne });
// console.log({ ...arrayTwo });
// console.log(arrayTwo);

let answer = {
  ...arrayOne,
  ...arrayTwo,
};
// console.log(answer);
// console.log(keyList);
let array1 = [];
console.log(array1.concat(arrayOne, arrayTwo));
