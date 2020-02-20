const ora = require('ora');
const fs = require('fs');
const inquirer = require('inquirer');
const commander = require('commander');
const chalk = require('chalk');
const download = require('./bin/download.js');

commander
  .version('0.1.0', '-v, --version')
  .option('-p, --peppers', 'Add peppers')
  .parse(process.argv);

const spinner = ora(chalk.yellow('loading start,please wait a little!')).start();

const startDownload = async() => {
    await download('newDir')
    setTimeout(() => {
        spinner.stop()
    }, 4000);
}
startDownload()