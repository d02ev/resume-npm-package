const chalk = require('chalk');

const logInfo = (message) => {
  console.log(
    chalk.green(message)
  );
};

const logError = (message) => {
  console.log(
    chalk.red(message)
  );
};

module.exports = {
  logInfo,
  logError,
};