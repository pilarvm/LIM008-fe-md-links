"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = exports.getFiles = exports.isADirectory = exports.transformToAbsPath = exports.evaluatePath = void 0;

const fs = require('fs');

const path = require('path');

const marked = require('marked');

const evaluatePath = route => path.isAbsolute(route);

exports.evaluatePath = evaluatePath;

const transformToAbsPath = route => path.resolve(route);

exports.transformToAbsPath = transformToAbsPath;

const isADirectory = route => fs.lstatSync(route).isDirectory();

exports.isADirectory = isADirectory;

const getFiles = route => {
  const applyDirStats = isADirectory(route);
  let arrFiles = [];

  if (applyDirStats === false) {
    arrFiles.push(route);
  } else {
    const file = fs.readdirSync(route);
    file.forEach(element => {
      const childOfDir = path.join(route, element);
      const stats = fs.lstatSync(childOfDir);

      if (stats.isDirectory()) {
        arrFiles = arrFiles.concat(getFiles(childOfDir));
      } else {
        arrFiles.push(childOfDir);
      }
    });
  }

  return arrFiles;
};

exports.getFiles = getFiles;

const extractLinks = route => {
  const links = [];
  const getArrRoutes = getFiles(route);
  getArrRoutes.forEach(file => {
    const dataFile = fs.readFileSync(file, 'utf8');
    const renderer = new marked.Renderer();

    renderer.link = (href, title, text) => {
      links.push({
        href: href,
        text: text.slice(0, 50),
        path: file
      });
    };

    marked(dataFile, {
      renderer: renderer
    });
  });
  return links;
};

exports.extractLinks = extractLinks;