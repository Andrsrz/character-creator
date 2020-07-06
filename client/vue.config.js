module.exports = {
	publicPath: '/test-mevn',
	chainWebpack: config => {
		config
		.plugin('html')
		.tap(args => {
			args[0].title = 'Character Creator'
			return args
		})
	}
}
