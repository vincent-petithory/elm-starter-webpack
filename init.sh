#!/bin/sh
pkgs="babel-core babel-loader babel-preset-env css-loader elm-webpack-loader file-loader html-webpack-plugin style-loader url-loader webpack webpack-dev-server"

which yarn && {
  yarn add $pkgs --dev
} || {
  npm install $pkgs --save-dev
}
