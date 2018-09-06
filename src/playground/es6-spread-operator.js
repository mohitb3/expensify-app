const userOrig = {
  name: 'Jen',
  age: 24
};
console.log('userOrig = ', userOrig);

const userNew = {
  ...userOrig,
  location: 'Philadelphia'
};
console.log('userNew = ', userNew);

const userNew2 = {
  ...userOrig,
  location: 'Philadelphia',
  age: 27
};
console.log('userNew2 = ', userNew2);

const userNew3 = {
  age: 38,
  ...userOrig,
  location: 'Philadelphia',
};
console.log('userNew3 = ', userNew3);

const userNew4 = {
  age: 38,
  location: 'Philadelphia',
  ...userOrig,
};
console.log('userNew4 = ', userNew4);
