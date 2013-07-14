require('ember');

module.exports = Em.Mixin.create({
  tagName: 'a',
  href: 'javascript:',
  attributeBindings: 'href target'.w()
});