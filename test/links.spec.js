
import {evaluatePath, transformToAbsPath, isADirectory, getFiles, extractLinks} from '../src/models/links.js';


const route = `${process.cwd()}\\test\\testFolder`;
const routeRel = './test/testFolder';

describe('evaluatePath', () => {
  it('La ruta es absoluta?', () => {
    expect(evaluatePath(route)).toEqual(true);
  });
});
 
describe('transformToAbsPath', () => {
  it('Deberia devolver la ruta absoluta', () => {
    expect(transformToAbsPath(routeRel)).toEqual(route);
  });
});

describe('isADirectory', () => {
  it('Deberia reconocer si es un directorio', () => {
    expect(isADirectory(route)).toEqual(true);
  });
});


describe('getFiles', () => {
  it('Deberia devolver el array de archivos md', () => {
    expect(getFiles(route)).toEqual([ `${process.cwd()}\\test\\testFolder\\carpeta 1\\Readme.md`,
    `${process.cwd()}\\test\\testFolder\\carpeta 2\\Readme.md`,
    `${process.cwd()}\\test\\testFolder\\Readme.md` ]);
  });
});



describe('extractLinks', () => {
  it('Deberia devolver un objeto con los href ', () => {
    expect(extractLinks(route)).toEqual([ { 
      href: 'https://www.google.com',
      text: '1',
      path: `${process.cwd()}\\test\\testFolder\\carpeta 1\\Readme.md` },
    { href: 'https://github.com/soumak77llll/firebase-mock',
    text: '2',
    path: `${process.cwd()}\\test\\testFolder\\carpeta 1\\Readme.md` },
    { href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    path: `${process.cwd()}\\test\\testFolder\\carpeta 2\\Readme.md` },
    { href: 'https://www.google.com',
    text: '4',
    path: `${process.cwd()}\\test\\testFolder\\Readme.md` },
    { href: 'https://github.com/soumak77llll/firebase-mock',
    text: '5',
    path: `${process.cwd()}\\test\\testFolder\\Readme.md` } ]
    );
  });
});


