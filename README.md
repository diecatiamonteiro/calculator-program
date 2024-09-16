# The Art of Calculation

![calculator img](/img/calculator-icon-10.png)

The Art of Calculation is a JavaScript project that defines a Calculator class with methods for performing a variety of mathematical operations. This project demonstrates how to implement a calculator and provides example usages for each method to help users perform calculations and display results in a stylized manner using Chalk for colorful console output.

## Features

- **Ratio Calculation**: `ratio(x, y, width)` - Calculates the height required to maintain the ratio of x:y for a given width.
- **Percentage Calculation**: `percentage(x, y)` - Calculates the percentage of `x` relative to `y`. Handles division by zero.
- **Addition**: `add(x, y)` - Returns the sum of `x` and `y`.
- **Subtraction**: `subtract(x, y)` - Returns the difference (y - x).
- **Multiplication**: `multiply(x, y)` - Returns the product of `x` and `y`.
- **Division**: `divide(x, y)` - Returns the quotient of `x` divided by `y`. Handles division by zero.
- **Remainder Calculation**: `remainder(x, y)` - Returns the remainder of `x` divided by `y`. Handles division by zero.
- **Exponentiation**: `elevate(x, y)` - Returns `x` raised to the power of `y`.
- **Square Root**: `sqrt(x)` - Returns the square root of `x`. Handles negative numbers.

## Purpose of Constants

The Calculator class includes constants for π (Math.PI) and e (Math.E), which could be useful for additional mathematical operations, such as trigonometry or logarithmic calculations. While the current methods don't utilize these constants, their inclusion allows for future expansion of the calculator’s functionality.

## How to run

1. Clone the repository:
```bach 
git clone git@github.com:diecatiamonteiro/calculator-program.git
```
2. Install dependencies:
```bach 
npm install chalk
```
3. Run the calculator script:
```bach 
node index.js
```

## Calculator preview

![calculator example](/img/calculator-example.png)