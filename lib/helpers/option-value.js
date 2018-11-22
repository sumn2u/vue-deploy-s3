module.exports = function(commandOption, settings, optionKey, defaultValue) {
  if (commandOption !== undefined) {
    return commandOption;
  }
  if (settings && settings['vue-deploy-s3'] && settings['vue-deploy-s3'][optionKey] !== undefined) {
    return settings['vue-deploy-s3'][optionKey];
  }
  return defaultValue;
};
