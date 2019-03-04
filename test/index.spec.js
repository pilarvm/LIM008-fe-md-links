import {
  evaluatePath, transformToAbsPath, recognizeIfIsFile,
  recognizeIfIsMDFile, getMDContent, convertMDToHtml
} from '../src/models/links.js';

const input = '../../Readme.md';
const input2 = 'C:/Users/laboratoria/Desktop/Readme.md';
describe('evaluatePath', () => {
  it('debería ser una función', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('La ruta es absoluta?', () => {
    expect(evaluatePath(input)).toEqual(false);
  });
});

describe('transformToAbsPath', () => {
  it('debería ser una función', () => {
    expect(typeof transformToAbsPath).toBe('function');
  });
  it('Deberia devolver la ruta absoluta', () => {
    expect(transformToAbsPath(input)).toEqual('C:\\Users\\laboratoria\\Desktop\\Readme.md');
  });
});

describe('recognizeIfIsFile', () => {
  it('debería ser una función', () => {
    expect(typeof recognizeIfIsFile).toBe('function');
  });
  it('Deberia reconocer si es un archivo', () => {
    console.log(input2);
    expect(recognizeIfIsFile(input2)).toEqual(true);
  });
});

describe('getMDContent', () => {
  it('debería ser una función', () => {
    expect(typeof getMDContent).toBe('function');
  });
  it('Deberia convertir el archivo .MD a HTML', () => {
    expect(typeof getMDContent(input2)).toBe('object');
  });
    
});

console.log(getMDContent(input2));
