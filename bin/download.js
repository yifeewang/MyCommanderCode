let fs = require('fs')
let path = require('path');
let chalk = require('chalk');
let commander = require('commander');

module.exports = answer => {
    let demoPath = '/project';
    let targetPath = '/' + answer;
    let ob = [];

    let download = () => {
        fs.mkdir(process.cwd() + targetPath, async function(){
            await getPath(demoPath)
            console.log(ob)
            ob.forEach((item, index) => {
                if(item[0] ==='file') {
                    fs.readFile(process.cwd() + item[1], function(err, data){
                        fs.writeFile(process.cwd() + targetPath+ item[1].replace("/project","/"), data, function(err){
                            console.log(chalk.blue(`${process.cwd() + targetPath+ item[1].replace("/project","/")}`)+ chalk.yellow(' has been dowmload success'))
                        } )
                    })
                }else{
                    fs.mkdir(process.cwd() + targetPath + item[1].replace("/project",""),function () {})
                }
            })
        })
    }
    let getPath = (path) => {
        let files = fs.readdirSync(process.cwd() + path);
        files.forEach(item => {
            let nowPath = path + '/' + item;
            let statNews = fs.statSync(process.cwd() + nowPath);
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