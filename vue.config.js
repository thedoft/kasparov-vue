module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/kasparov-vue/'
  : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}
