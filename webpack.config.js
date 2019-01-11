const Encore = require('@symfony/webpack-encore');

// ==============================================================================================
// Awesome theme setup
// ==============================================================================================
Encore
  .setOutputPath('public/build/awesome-theme')
  .setPublicPath('/build/awesome-theme')
  .addEntry('app', './themes/awesome-theme/SyliusShopBundle/private/app.js')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const awesomeTheme = Encore.getWebpackConfig();
awesomeTheme.name = 'awesomeTheme';

Encore.reset();

// ==============================================================================================
// Another theme setup
// ==============================================================================================
Encore
  .setOutputPath('public/build/another-theme')
  .setPublicPath('/build/another-theme')
  .addEntry('app', './themes/another-theme/SyliusShopBundle/private/app.js')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const anotherTheme = Encore.getWebpackConfig();
anotherTheme.name = 'anotherTheme';

module.exports = [awesomeTheme, anotherTheme];
