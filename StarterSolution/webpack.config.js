var webpack = require('webpack');

module.exports = {
	entry: './Site Assets/Alerter.ts',
	output: {
		filename: "bundle.js",
		libraryTarget: "var",
		library: "EntryPoint"
	},
	resolve: {
		enforceExtension: false,
		extensions: ['.js', '.ts'],
	
	},
	module: {
		rules: [{
		   	test: /\.ts$/, 
		   	use: 'ts-loader',
		   	exclude: '/node_modules/'
		   }
		]
	}
}