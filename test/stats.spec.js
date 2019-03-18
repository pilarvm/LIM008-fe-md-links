// calling functions
import {
  calculateUniqueLinks,
  calculateBrokenLinks,
  calculateStats,
} from '../src/models/stats.js';

const input = [{
  href: 'https://www.google.com',
  status: 200,
  value: 'ok'}, 
{
  href: 'https://www.google.com',
  status: 200,
  value: 'ok'
}, 
{ href: 'https://github.com/soumak77llll/firebase-mock',
  status: 404,
  value: 'fail'
}];

describe('calculate broken links', () => {
  it('should be a function', () => {
    expect(typeof calculateBrokenLinks).toBe('function');
  });
  it('should return the amount of broken links', () => {
    expect(calculateBrokenLinks(input)).toBe(1);
  });
});

describe('calculate unique links', () => {
  it('should be a function', () => {
    expect(typeof calculateUniqueLinks).toBe('function');
  });
  it('should return the amount of unique links', () => {
    expect(calculateUniqueLinks(input)).toBe(2);
  });
});

describe('calculate stats', () => {
  it('should be a function', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('Debería devolver el número de links únicos y totales', () => {
    expect(calculateStats(input)).toEqual('Total: 3' + '\n' + 'Unique: 2');
  });
  it('Debería devolver el número de links únicos, rotos y totales', () => {
    expect(calculateStats(input, 'validate')).toEqual('Total: 3' + '\n' + 'Unique: 2' + '\n' + 'Broken: 1');
  });
});
