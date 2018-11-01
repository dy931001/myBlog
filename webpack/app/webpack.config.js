const webpack = require('webpack');

module.exports = {

	entry:'./runoob1.js',

	output:{
		path:__dirname,
		filename:'bundle.js'
	},

	module:{
		rules:[
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},

	plugins:[
    	new webpack.BannerPlugin('ldy webpack 实例')
    ]
}