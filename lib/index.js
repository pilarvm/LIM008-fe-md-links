"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _links = require("./models/links.js");

var _validate = require("./models/validate.js");

const fs = require('fs');

const mdLinks = (route, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(route)) {
      const routeMd = (0, _links.transformToAbsPath)(route);
      const arrLinksMd = (0, _links.extractLinks)(routeMd);

      if (arrLinksMd.length === 0) {
        resolve('Tu archivo o carpeta no contiene links');
      }

      if (options.validate) {
        resolve((0, _validate.verifyLinks)(arrLinksMd));
      } else {
        resolve(arrLinksMd);
      }
    } else {
      reject(`Ruta no encontrada: ${(0, _links.transformToAbsPath)(route)}`);
    }
  });
};

exports.mdLinks = mdLinks;