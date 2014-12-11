Package.describe({
  summary: "Semantic UI (0.19.0) packaged for Meteor 0.9.1+ (including icons), SCSS version",
  version: "1.0.10",
  name: "richsilv:semantic-ui-sass",
  git: "https://github.com/richsilv/meteor-semantic-ui-sass.git"
});


Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');
  api.use('jquery@1.0.1','client');
  api.use("fourseven:scss@1.0.0", ['server', 'client']);
  api.imply('fourseven:scss@1.0.0', ['server', 'client']);

  var path = Npm.require('path');
  var assetPath = path.join('assets/');
  var jsFiles = [
    'modules/accordion.js',
    'modules/behavior/api.js',
    'modules/behavior/colorize.js',
    'modules/behavior/form.js',
    'modules/behavior/state.js',
    'modules/chatroom.js',
    'modules/checkbox.js',
    'modules/dimmer.js',
    'modules/dropdown.js',
    'modules/modal.js',
    'modules/nag.js',
    'modules/popup.js',
    'modules/rating.js',
    'modules/search.js',
    'modules/shape.js',
    'modules/sidebar.js',
    'modules/tab.js',
    'modules/transition.js',
    'modules/video.js',
  ].map(function(path) {
    return assetPath + path;
  });
  var assetFiles = [
    'fonts/basic.icons.eot',
    'fonts/basic.icons.svg',
    'fonts/basic.icons.ttf',
    'fonts/basic.icons.woff',
    'fonts/icons.eot',
    'fonts/icons.otf',
    'fonts/icons.svg',
    'fonts/icons.ttf',
    'fonts/icons.woff',
    'images/loader-large-inverted.gif',
    'images/loader-large.gif',
    'images/loader-medium-inverted.gif',
    'images/loader-medium.gif',
    'images/loader-mini-inverted.gif',
    'images/loader-mini.gif',
    'images/loader-small-inverted.gif',
    'images/loader-small.gif'
  ].map(function(path) {
    return assetPath + path;
  });    
  var scssFiles = [
    'stylesheets/_semantic-ui.scss',
    'stylesheets/semantic-ui/collections/_all.scss',
    'stylesheets/semantic-ui/collections/_breadcrumb.scss',
    'stylesheets/semantic-ui/collections/_form.scss',
    'stylesheets/semantic-ui/collections/_grid.scss',
    'stylesheets/semantic-ui/collections/_menu.scss',
    'stylesheets/semantic-ui/collections/_message.scss',
    'stylesheets/semantic-ui/collections/_table.scss',
    'stylesheets/semantic-ui/depends/_basic.icon.scss',
    'stylesheets/semantic-ui/depends/_icon.scss',
    'stylesheets/semantic-ui/depends/_loader.scss',
    'stylesheets/semantic-ui/elements/_all.scss',
    'stylesheets/semantic-ui/elements/_basic.icon.scss',
    'stylesheets/semantic-ui/elements/_button.scss',
    'stylesheets/semantic-ui/elements/_divider.scss',
    'stylesheets/semantic-ui/elements/_header.scss',
    'stylesheets/semantic-ui/elements/_icon.scss',
    'stylesheets/semantic-ui/elements/_image.scss',
    'stylesheets/semantic-ui/elements/_input.scss',
    'stylesheets/semantic-ui/elements/_label.scss',
    'stylesheets/semantic-ui/elements/_loader.scss',
    'stylesheets/semantic-ui/elements/_progress.scss',
    'stylesheets/semantic-ui/elements/_reveal.scss',
    'stylesheets/semantic-ui/elements/_segment.scss',
    'stylesheets/semantic-ui/elements/_step.scss',
    'stylesheets/semantic-ui/modules/_accordion.scss',
    'stylesheets/semantic-ui/modules/_all.scss',
    'stylesheets/semantic-ui/modules/_chatroom.scss',
    'stylesheets/semantic-ui/modules/_checkbox.scss',
    'stylesheets/semantic-ui/modules/_dimmer.scss',
    'stylesheets/semantic-ui/modules/_dropdown.scss',
    'stylesheets/semantic-ui/modules/_modal.scss',
    'stylesheets/semantic-ui/modules/_nag.scss',
    'stylesheets/semantic-ui/modules/_popup.scss',
    'stylesheets/semantic-ui/modules/_rating.scss',
    'stylesheets/semantic-ui/modules/_reveal.scss',
    'stylesheets/semantic-ui/modules/_search.scss',
    'stylesheets/semantic-ui/modules/_shape.scss',
    'stylesheets/semantic-ui/modules/_sidebar.scss',
    'stylesheets/semantic-ui/modules/_tab.scss',
    'stylesheets/semantic-ui/modules/_transition.scss',
    'stylesheets/semantic-ui/modules/_video.scss',    
    'stylesheets/semantic-ui/views/_all.scss',
    'stylesheets/semantic-ui/views/_comment.scss',
    'stylesheets/semantic-ui/views/_feed.scss',
    'stylesheets/semantic-ui/views/_item.scss',
    'stylesheets/semantic-ui/views/_list.scss',
    'stylesheets/semantic-ui/views/_statistic.scss'
  ].map(function(path) {
    return assetPath + path;
  });
  api.add_files(jsFiles, 'client');
  api.add_files(assetFiles, 'client', {isAsset: true});
  api.add_files(scssFiles, 'server', {isAsset: true});
  api.add_files('pathOveride.css', 'client');
});