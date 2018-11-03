module.exports = {
	entry: './src/createClient.js',
	output: {
		path: `${ __dirname }/public/js/bundles`,
		filename: 'bundle.js',
		publicPath: './js/bundles/'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: [ /node_modules/ ],
				loader: 'babel-loader'
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: [ '.js', '.jsx' ]
	}
};
