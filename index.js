// 'THE ART OF CALCULATION'

/**
 * Summary:
 * This project defines a Calculator class with various mathematical methods for performing common operations, adding example usages to demonstrate how to utilize each method to perform calculations and display results.
 *
 * Methods include:
 * - `ratio(x, y, width)`: Calculates the height to maintain the ratio x:y for a given width.
 * - `percentage(x, y)`: Calculates the percentage of x relative to y.
 * - `add(x, y)`: Returns the sum of x and y.
 * - `subtract(x, y)`: Returns the difference (y - x).
 * - `multiply(x, y)`: Returns the product of x and y.
 * - `divide(x, y)`: Returns the quotient of x divided by y, with error handling for division by zero.
 * - `remainder(x, y)`: Returns the remainder of x divided by y, with error handling for division by zero.
 * - `elevate(x, y)`: Returns x raised to the power of y.
 * - `sqrt(x)`: Returns the square root of x, with error handling for negative inputs.
 */

// ------------------------------------------------------------ step 0 - import dependency

import chalk from "chalk";

// ------------------------------------------------------------ step 1 - create the class Calculator with all its methods

class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  // This method returns the height based on the ratio x:y (x = original width; y = original height; width = new width I want to scale to).
  ratio(x, y, width) {
    const ratio = x / y;
    const newHeigth = width / ratio;
    return newHeigth;
  }

  // This method calculates the percentage of x in y and return it as a string with a '%' sign. If y is zero, return the error message 'Error! Divisor cannot be zero.'.
  percentage(x, y) {
    if (y !== 0) {
      return (x / y) * 100 + "%";
    } else {
      return "Error! Divisor cannot be zero.";
    }
  }

  // This method returns the sum of x and y.
  add(x, y) {
    return x + y;
  }

  // This method should returns the difference of it (y - x).
  subtract(x, y) {
    return y - x;
  }

  // This method returns the product of x and y.
  multiply(x, y) {
    return x * y;
  }

  // This method returns the quotient of x divided by y. If y is zero, return the error message 'Error! Divisor cannot be zero.'.
  divide(x, y) {
    if (y !== 0) {
      return x / y;
    }
    return "Error! Divisor cannot be zero.";
  }

  // This method returns the remainder of x divided by y. If y is zero, return the error message 'Error! Divisor cannot be zero.'.
  remainder(x, y) {
    if (y !== 0) {
      return x % y;
    }
    return "Error! Divisor cannot be zero.";
  }

  // This method returns the power of x raised to y.
  elevate(x, y) {
    return x ** y;
  }

  // This method returns the square root of x. If x is a negative number, return the error message 'Error! Cannot calculate the square root of a negative number.'.
  sqrt(x) {
    if (x >= 0) {
      return Math.sqrt(x);
    }
    return "Error! Cannot calculate the square root of a negative number.";
  }
}

// ------------------------------------------------------------ step 2 - create an instance of the Calculator

const myCalculator = new Calculator();
console.log(chalk.blue.bold(`\nWELCOME TO MY CALCULATOR!`));
// ------------------------------------------------------------ example usage - calculate ratio (x,y,width) ----> width/(x/y)

console.log(
  chalk.bold.gray(`\nRatio = `) +
    chalk.yellow.bold(myCalculator.ratio(5, 7, 300)) +
    `\n`
); // 420

/**
 * Output explained: 300 / (5 / 7) = 300 / 0.714 ≈ 420
 * This calculation ensures that for every 300 units of width, the height would need to be approximately 420 units to maintain the same ratio.
 */

// ------------------------------------------------------------ example usage - calculate percentage (x,y) ----> x/y*100

console.log(
  chalk.bold.gray(`Percentage = `) +
    chalk.yellow.bold(myCalculator.percentage(3, 12))
); // 25%

// ------------------------------------------------------------ example usage - calculate addition (x,y) ----> x+y

console.log(
  chalk.bold.gray(`\nSum = `) + chalk.yellow.bold(myCalculator.add(5, 7))
); // 12

// ------------------------------------------------------------ example usage - calculate subtraction (x,y) ----> y-x

console.log(
  chalk.bold.gray(`\nDifference = `) +
    chalk.yellow.bold(myCalculator.subtract(5, 7))
); // 2

// ------------------------------------------------------------ example usage - calculate multiplication (x,y) ----> x*y

console.log(
  chalk.bold.gray(`\nProduct = `) +
    chalk.yellow.bold(myCalculator.multiply(5, 7))
); // 35

// ------------------------------------------------------------ example usage - calculate division (x,y) ----> x/y

console.log(
  chalk.bold.gray(`\nQuocient = `) +
    chalk.yellow.bold(myCalculator.divide(35, 7))
); // 5

// ------------------------------------------------------------ example usage - calculate remainder (x,y) ----> x%y

console.log(
  chalk.bold.gray(`\nRemainder = `) +
    chalk.yellow.bold(myCalculator.remainder(7, 5))
); // 2

// ------------------------------------------------------------ example usage - calculate exponentiation (x,y) ----> x**y

console.log(
  chalk.bold.gray(`\nPower = `) + chalk.yellow.bold(myCalculator.elevate(5, 3))
); // 125

// ------------------------------------------------------------ example usage - calculate square root (x) ----> Math.sqrt(x)

console.log(
  chalk.bold.gray(`\nSquare Root = `) +
    chalk.yellow.bold(myCalculator.sqrt(25)) +
    "\n"
); // 5

// ------------------------------------------------------------ code explained

/**
 * Purpose of PI and E:
 *
 * 'this.PI = Math.PI' and 'this.E = Math.E' are included in the constructor to provide the values of π (Pi) and e (Euler's number) as properties of the Calculator class. These values can be useful for mathematical operations that require constants like Pi for calculations involving circles or trigonometry.
 * However, the calculator would still work without PI and E if it only needs to perform basic arithmetic operations. The main methods (addition, subtraction, multiplication, etc.) do not require these constants.
 * Including PI and E might be useful for extending the calculator's functionality in the future, such as adding methods for trigonometric or exponential calculations. If your current project doesn’t need these constants, you can omit them to keep the code more focused on the core functionalities.
 */
