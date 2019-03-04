const fs = require('fs');
const path = require('path');
//const ruta = process.argv[2]
const route = '../../planing.txt';
const myMarked = require('marked');

// export const mdLinks = (path, options) => {
//     evaluatePath(path)
// }

export const evaluatePath = (input) => {
    if (path.isAbsolute(input)) return true;
    else return false;
}

export const transformToAbsPath = (input) => {
    input = path.resolve(input);
    return (path.normalize(input));
}

export const recognizeIfIsFile = (input) => {
    return fs.lstatSync(input).isFile();
    // fs.lstat(input, (err, stats) => {
    //     if(err) return console.log(err); //Handle error
    //     cb(stats.isFile())  
    // });
};

export const recognizeIfIsMDFile = (input) => {
    if (path.extname(input) === '.md') return true;
    return false;
};

export const getMDContent = (route) => {
    const data = fs.readFileSync(route, 'utf8');
    let links = [];
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
        links.push({ href, text, file: route });
        return '';
    };
    myMarked(data, { renderer });
    return links;
};



