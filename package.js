Package.describe({
  summary: "Semantic UI (0.19.0) packaged for Meteor 0.9.1+ (including icons), SCSS version",
  version: "1.0.0",
  name: "richsilv:semantic-ui-sass",
  git: "https://github.com/richsilv/meteor-semantic-ui-sass.git"
});


Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');
  api.use('jquery','client');
  api.use("fourseven:scss@0.9.5", ['client']);
  api.imply('fourseven:scss@0.9.5', ['client']);

  var path = Npm.require('path');
  var assetPath = path.join('assets/');
  var assetFiles = [
    assetPath + 'modules/accordion.js',
    assetPath + 'modules/behavior/api.js',
    assetPath + 'modules/behavior/colorize.js',
    assetPath + 'modules/behavior/form.js',
    assetPath + 'modules/behavior/state.js',
    assetPath + 'modules/chatroom.js',
    assetPath + 'modules/checkbox.js',
    assetPath + 'modules/dimmer.js',
    assetPath + 'modules/dropdown.js',
    assetPath + 'modules/modal.js',
    assetPath + 'modules/nag.js',
    assetPath + 'modules/popup.js',
    assetPath + 'modules/rating.js',
    assetPath + 'modules/search.js',
    assetPath + 'modules/shape.js',
    assetPath + 'modules/sidebar.js',
    assetPath + 'modules/tab.js',
    assetPath + 'modules/transition.js',
    assetPath + 'modules/video.js',
    assetPath + 'fonts/basic.icons.eot',
    assetPath + 'fonts/basic.icons.svg',
    assetPath + 'fonts/basic.icons.ttf',
    assetPath + 'fonts/basic.icons.woff',
    assetPath + 'fonts/icons.eot',
    assetPath + 'fonts/icons.otf',
    assetPath + 'fonts/icons.svg',
    assetPath + 'fonts/icons.ttf',
    assetPath + 'fonts/icons.woff',
    assetPath + 'images/loader-large-inverted.gif',
    assetPath + 'images/loader-large.gif',
    assetPath + 'images/loader-medium-inverted.gif',
    assetPath + 'images/loader-medium.gif',
    assetPath + 'images/loader-mini-inverted.gif',
    assetPath + 'images/loader-mini.gif',
    assetPath + 'images/loader-small-inverted.gif',
    assetPath + 'images/loader-small.gif'
  ];
  api.add_files(assetFiles, 'client');  
  api.add_files('pathOveride.css', 'client');
});