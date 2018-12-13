var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return (
      'mongodb://' +
      configValues.uname +
      ':' +
      configValues.pwd +
      '@ds231374.mlab.com:31374/nodegitodo'
    );
  }
};
