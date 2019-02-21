const path = require('path')

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, 'source', 'index.tsx'),
	output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js',
        
	},
	resolve: {
		alias: {
			'react-native$': 'react-native-web',
        },
        
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader' },
		],
	},
}
