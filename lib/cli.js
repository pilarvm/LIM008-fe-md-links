#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _stats = require("./models/stats.js");

const args = process.argv.slice(2);
const options = {
  validate: false,
  stats: false
};
let path = args[0]; // si no ingresa ruta

if (args.length === 0) {
  console.log('Ingrese una ruta');
} // si solo ingresa la ruta


if (args.length === 1) {
  (0, _index.mdLinks)(path, options).then(resp => resp.forEach(element => console.log(`${element.path} ${element.href} ${element.text}`))).catch(err => console.log(err));
}

; // si el usuario ingresa una opción, en este caso validate

if (args.length === 2) {
  if (args[1] === '--validate') {
    options.validate = true;
    (0, _index.mdLinks)(path, options).then(resp => resp.forEach(element => console.log(` ${element.path}  ${element.href}  ${element.value}   ${element.status}  ${element.text}`))).catch(err => err); // si el ususario ingresa una opción, en este caso stats
  } else if (args[1] === '--stats') {
    options.stats = true;
    (0, _index.mdLinks)(path, options).then(resp => console.log((0, _stats.calculateStats)(resp))).catch(err => console.log(err));
  }
}

; // si el usuario ingresa ambas opciones

if (args.length === 3) {
  if (args[1] === '--validate' && args[2] === '--stats') {
    options.stats = true;
    options.validate = true;
    (0, _index.mdLinks)(path, options).then(resp => console.log((0, _stats.calculateStats)(resp, 'validate'))).catch(err => console.log(err));
  } else if (args[1] === '--stats' && args[2] === '--validate') {
    options.stats = true;
    options.validate = true;
    (0, _index.mdLinks)(path, options).then(resp => console.log((0, _stats.calculateStats)(resp, 'validate'))).catch(err => console.log(err));
  }
}

;