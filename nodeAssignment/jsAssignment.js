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

const arrayOne = valuesList.map((values) => {
  let obj = {};
  values.forEach((val, i) => {
    obj[keyList[i]] = val;
  });
  return obj;
});

console.log(arrayOne);
let [keyList, ...valuesList] = arr2;

const arrayTwo = valuesList.map((values) => {
  let obj = {};
  values.forEach((val, i) => {
    obj[keyList[i]] = val;
  });
  return obj;
});

console.log(arrayTwo);
