// 1. cube
const cube = function(x) {
  return x * x * x;
};

// 2. fullName
const fullName = function(first, last) {
  return first + " " + last;
};

// 3. power (recursive function)
const power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

// 4. sumCubes
const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};

// Test outputs:
console.log(cube(3));                 // 27
console.log(fullName("Alice", "He")); // "Alice He"
console.log(power(2, 4));             // 16
console.log(sumCubes([1, 2, 3]));     // 36
