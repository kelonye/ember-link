require('ember');

module.exports = Em.Mixin.create({
  tagName: 'a',
  attributeBindings: 'href target'.w()
});