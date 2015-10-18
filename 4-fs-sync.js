var fs = require('fs');

if(fs.existsSync('temp')){
    console.log('Directory Exists, remomving...');
    if(fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');

if(fs.existsSync('temp')){
    process.chdir('temp');
    fs.writeFileSync('test.txt','smsht');
    fs.renameSync('test.txt','new.txt')
    console.log('File has size:'+fs.statSync('new.txt').size+' bytes');
    console.log('File has contents:'+fs.readFileSync('new.txt').toString());
}

