const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('test generateGreeting from name', () => {
  const result = generateGreeting('Mohit');
  expect(result).toBe('Hello Mohit!');
});

test('test generateGreeting from no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});

test('test generateGreeting from empty name', () => {
  const result = generateGreeting('');
  expect(result).toBe('Hello !');
});