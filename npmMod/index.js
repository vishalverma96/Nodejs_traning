const chalk = require("chalk");
const validtor = require("validator");

console.log(chalk.blue.underline.inverse("hello world"));
const result = validtor.isEmail("soni.vishu96@gmail.com");
console.log(result ? chalk.green.inverse(result): chalk.red.inverse(result));