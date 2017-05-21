'use strict';

var Elm = require('./Main.elm');
var rootNodeId = '#elm-home';
var node = document.querySelector(rootNodeId);

if (!node) {
  console.error('Root html node ' + rootNodeId + ' is missing.');
} else {
  Elm.Main.embed(node);
}
