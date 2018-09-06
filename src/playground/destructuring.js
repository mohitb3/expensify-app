// Object destructuring
console.log('Object destructuring');

const person = {
  age: 69,
  location: {
    city: 'Herndon',
    temp: 50
  }
};
const { name: firstName = 'Anon', age, location: { city: location, temp } } = person;
console.log(`${firstName} is ${age}.`);
location && temp && console.log(`It is ${temp} in ${location}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};
const { name: publisherName = 'Self Publish' } = book.publisher;
console.log('publisherName = ', publisherName);

console.log('');

// Array destructuring
console.log('Array destructuring');

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`)

const address2 = [];
const [, city2, state2 = 'New York'] = address2;
console.log(`You are in ${city2}, ${state2}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [name, , medium_price] = item;
console.log(`A medium ${name} costs ${medium_price}.`);

console.log('');

// Array destructuring
console.log('Function parameter destructuring');

const add = ({ a, b }) => {
  return a + b;
};
console.log('add({ a : 1, b: 2 }) = ', add({ a : 1, b: 2 }));
console.log('add({ a : 1, b: 2, c: 3 }) = ', add({ a : 1, b: 2, c: 3 }));
console.log('add({ d: 1, a : 1, b: 2, c: 3 }) = ', add({ d: 1, a : 1, b: 2, c: 3 }));

const add2 = ({ a, b }, c) => {
  return a + b + c;
};
console.log('add2({ a : 1, b: 2 }, 3) = ', add2({ a : 1, b: 2 }, 3));
console.log('add2({ a : 1, b: 2 }) = ', add2({ a : 1, b: 2 }));
