var webpack = require('webpack');

module.exports = {
	entry: ['whatwg-fetch','./Site Assets/Alerter.ts'],
	//entry: './Site Assets/Alerter.ts',

	output: {
		filename: "bundle.js",
		libraryTarget: "var",
		library: "EntryPoint"
	},
	devtool: 'source-map',
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
	},
	plugins: [
		new webpack.ProvidePlugin({
			'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
			'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		})
]
}