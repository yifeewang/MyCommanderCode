const fs = require('fs')
const path = require('path');
const chalk = require('chalk');
const commander = require('commander');

module.exports = answer => {
    const demoPath = '../index.js';
    const targetPath = '../' + answer;
    const ob = [];

    const download = () => {
        getPath(demoPath)
        console.log(ob)
    }
    const getPath = (path) => {
        const files = fs.readdirSync(path);
        console.log(111,files);
        
        files.forEach(item => {
            let nowPath = path + '/' + item;
            let statNews = fs.statSync(nowPath);
            if(statNews.isDirectory()) {
                ob.push(['dir', nowPath])
                getPath(nowPath);
            } else {
                ob.push(['file', nowPath])
            }
        })
    }
    download()
}