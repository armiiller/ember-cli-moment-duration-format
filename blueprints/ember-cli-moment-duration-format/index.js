/*jshint node:true*/

module.exports = {
  description: 'Add bower dependencies for moment-duration-format to the project',

  normalizeEntityName: function() {

  }, // :normalizeEntityName

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      {name: 'moment-duration-format', target: 'moment-duration-format#^1.3.0'}
    ]);
  } // :afterInstall

}; // module.exports