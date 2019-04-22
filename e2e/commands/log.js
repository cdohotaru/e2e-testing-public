exports.command = function log(message) {
  return this.perform((browser, done) => {
    console.log(`${Date.now()} ${message}`); // eslint-disable-line
    done();
  });
};
