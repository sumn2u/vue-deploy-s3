var chalk = require('chalk');
var green  = chalk.green;

module.exports = {
  description: 'Generate config for react deployments',
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
  afterInstall: function() {
    var hasPlugins = this.project.addons.some(function(addon) {
      var isPlugin = addon.pkg.keywords.indexOf('vue-deploy-s3-plugin') !== -1;
      return isPlugin;
    });

    if (!hasPlugins) {
      this.ui.write(green('vue-deploy-s3 needs plugins to actually do the deployment work.\n'));
    }
  }
};
