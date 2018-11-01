module.exports = {

	entry:'./main.jsx',

	output:{
		path:__dirname,
		filename:'bundle.js'
	},

	module:{

		rules:[

			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},

			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015','react']
					}
				}
			}

		]

	}

}