const fs = require('node:fs');
const builder=require('./student/createStudent')


// fs.readFile('./text.txt',(err, data)=>{
//     console.log(err);
//
//     console.log(data. toString());
//
// })
//
// fs.appendFile('./text.txt', 'HELLO CHAT \n', (err)=>{
//     console.log('ERR', err);
// })
//
// fs.writeFile('./text.txt','write file', (err)=>{
//     console.log('ERR', err);
// })
//
// fs.readFile('./text.txt',(err, data)=>{
//     fs.appendFile('./copy.txt', data, ()=>{})
// })
//
// fs.mkdir('./students',(err)=>{
//     console.log(err)
// })
//
// fs.appendFile('./students/data.json',JSON.stringify({name:'Dima'}),(err)=>{
//     console.log(err);
// })
//
// fs.unlink('./copy.txt', (err)=>{
//     console.log(err)
// })
//
// fs.rmdir('./students', {recursive:true},err => {
//     console.log(err)
// })
//
// fs.rename('./text.txt', './users.txt', (err)=>{
//     console.log(err);
// })



fs.readdir('./student',(err, files)=>{
    console.log(files);

    for (const fileName of files){
        fs.stat(`./student/${fileName}`,(err1, stats)=>{
            console.log('_____');
            console.log(`./student/${fileName}`);
            console.log(stats.isDirectory());
            if (stats.isFile()){
                fs.readFile(`./student/${fileName}`,(err2, data)=>{
                    console.log(data.toString());
                })
            }



        })
    }

})

// console.log(builder);
//
// let student1= builder.studentBuilder('Sonya', 16);
//
// console.log(student1.name);
// console.log(student1.age);