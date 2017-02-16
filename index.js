/* jshint node: true */
'use strict';

var fs = require('fs');

module.exports = {
  name: 'ember-cli-moment-duration-format',

  included: function(app, parentAddon) {

      // Per the ADDON_HOOKS.md document
      // https://github.com/ember-cli/ember-cli/blob/master/ADDON_HOOKS.md#included
      this._super.included.apply(this, arguments);

      // Per the ember-cli documentation
      // http://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
      var target = (parentAddon || app);

      // Addon options from the apps ember-cli-build.js
      var options = target.options[this.name] || {};
      if (typeof options === 'string') {
        options = {
        };
      }

      // Other local variables needed
      var path = target.bowerDirectory + '/moment-duration-format';

      // Make sure bootswatch is available
      if (!fs.existsSync(path)) {
        throw new Error(
          this.name + ': moment-duration-format is not available from bower (' + path + '), ' +
          'install into your project by running `bower install admin-lte --save`'
        );
      } else {
        target.import({
          development: path + '/lib/moment-duration-format.js',
          production: path + '/lib/moment-duration-format.js'
        });
      } // :else
    } // :included

}; // module.exports
