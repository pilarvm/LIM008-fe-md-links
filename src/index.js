import {evaluatePath} from './models/links.js';

const ruta = process.argv[2]

console.log(evaluatePath(ruta))


// const ReadFileAsync = () => {
//     fs.readFile(process.argv[2], (err, buf1) => {
//         if (err) {
//             console.log('-------- aaaaasync', err.message)
//             return
//         }
//         const str1 = buf1.toString()
//         var lines1 = str1.split('\n')
//         return console.log(str1)
//     })
// }




// console.log(ReadFileAsync());