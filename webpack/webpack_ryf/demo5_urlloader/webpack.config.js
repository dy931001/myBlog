module.exports = {

	entry:'./main.js',

	output:{
		path:__dirname,
		filename:'bundle.js'
	},

	module:{
		rules:[
			{
				test:/\.(png|jpg)$/,
				use:[
					{
						loader:'url-loader',
						options: {
			              	limit: 8192
			            }
					}
				]
			}
		]
	}
}