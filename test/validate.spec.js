// calling functions 
import {
  verifyLinks,
} from '../src/models/validate.js';

// inputs and outputs
const input = [{
  href: 'https://www.google.com',
  text: '1',
  path: `${process.cwd()}\\test\\testFolder\\carpeta 1\\Readme.md`
}];

const inputTwo = [{
  href: 'https://github.com/soumak77llll/firebase-mock',
  text: '2',
  path: `${process.cwd()}\\test\\testFolder\\carpeta 1\\Readme.md`
}];

const output = [{
  href: 'https://www.google.com',
  text: '1',
  path: `${process.cwd()}\\test\\testFolder\\carpeta 1\\Readme.md`,
  status: 200,
  value: 'ok'
}];

const outputTwo = [{
  href: 'https://github.com/soumak77llll/firebase-mock',
  text: '2',
  path: `${process.cwd()}\\test\\testFolder\\carpeta 1\\Readme.md`,
  status: 404,
  value: 'fail'
}];

describe('verify Links', () => {
  it('should return a ok value', (done) => {
    verifyLinks(input).then((response) => {
      expect(response).toEqual(output);
      done();
    });
  });
  it('should return a fail value', (done) => {
    verifyLinks(inputTwo).then((response) => {
      expect(response).toEqual(outputTwo);
      done();
    });
  });
});
