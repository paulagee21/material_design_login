const path = require('path');
const express = require('express');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/app.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,	
				use: [
					{ loader: 'babel-loader' },
				]
			},
			{
				test: /\.html$/,
				use: [
					{ loader: 'html-loader' }
				]
			},
			{
				test: /\.scss$/,
				use: [{ 
				//use: [{
					loader: 'resolve-url-loader' 
				},{
					loader: 'style-loader'	
				},{
					loader: 'css-loader' 
				},{
					loader: 'sass-loader' 
				}]
			},
			{
				test: /\.(png|jpg|jpeg|gif)/,
				use: [
					{ loader: 'url-loader' } 
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html'
		})
	]
};

var app = express();
app.use('/test', express.static(path.join(__dirname, '/public')));
