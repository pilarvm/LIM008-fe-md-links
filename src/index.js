import {transformToAbsPath, extractLinks} from './models/links.js';
import {verifyLinks} from './models/validate.js';
const fs = require('fs');

export const mdLinks = (route, options) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(route)) {
            const routeMd = transformToAbsPath(route);
            const arrLinksMd = extractLinks(routeMd);
            if (arrLinksMd.length === 0) {
                resolve('Tu archivo o carpeta no contiene links');
            }
            if (options.validate) {
                resolve(verifyLinks(arrLinksMd));
            } else {
                resolve(arrLinksMd);
            }
        } else {
            reject(`Ruta no encontrada: ${transformToAbsPath(route)}`);
        }
    });
};