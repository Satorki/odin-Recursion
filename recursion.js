function sumTo(n) {
  let sum = 0;
  for (let i = n; i >= 0; i--) {
    sum += i;
  }
  return sum;
}

function recSumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + recSumTo(n - 1);
  }
}

function recFractional(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * recFractional(n - 1);
  }
}

function collatz(n) {
  if (n == 1) {
    return 0;
  } else if (n % 2 == 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
}

function power(x, n) {
  if (n == 0) {
    return 1;
  } else {
    return x * power(x, n - 1);
  }
}

function all(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr.shift() * all(arr);
  }
}

console.log(all([1, 2, 3]));
