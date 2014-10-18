Package.describe({
  summary: "Semantic UI (0.19.0) packaged for Meteor 0.9.1+ (including icons), SCSS version",
  version: "1.0.3",
  name: "richsilv:semantic-ui-sass",
  git: "https://github.com/richsilv/meteor-semantic-ui-sass.git"
});


Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');
  api.use('jquery','client');
  api.use("fourseven:scss@0.9.5", ['server', 'client']);
  api.imply('fourseven:scss@0.9.5', ['server', 'client']);

  var path = Npm.require('path');
  var assetPath = path.join('assets/');
  var assetFiles = [
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
    'images/loader-small.gif',
    '_stylesheets/semantic-ui/semantic-ui.scss',
    '_stylesheets/semantic-ui/collections/_all.scss',
    '_stylesheets/semantic-ui/collections/_breadcrumb.scss',
    '_stylesheets/semantic-ui/collections/_form.scss',
    '_stylesheets/semantic-ui/collections/_grid.scss',
    '_stylesheets/semantic-ui/collections/_menu.scss',
    '_stylesheets/semantic-ui/collections/_message.scss',
    '_stylesheets/semantic-ui/collections/_table.scss',
    '_stylesheets/semantic-ui/depends/_basic.icon.scss',
    '_stylesheets/semantic-ui/depends/_icon.scss',
    '_stylesheets/semantic-ui/depends/_loader.scss',
    '_stylesheets/semantic-ui/elements/_all.scss',
    '_stylesheets/semantic-ui/elements/_basic.icon.scss',
    '_stylesheets/semantic-ui/elements/_button.scss',
    '_stylesheets/semantic-ui/elements/_divider.scss',
    '_stylesheets/semantic-ui/elements/_header.scss',
    '_stylesheets/semantic-ui/elements/_icon.scss',
    '_stylesheets/semantic-ui/elements/_image.scss',
    '_stylesheets/semantic-ui/elements/_input.scss',
    '_stylesheets/semantic-ui/elements/_label.scss',
    '_stylesheets/semantic-ui/elements/_loader.scss',
    '_stylesheets/semantic-ui/elements/_progress.scss',
    '_stylesheets/semantic-ui/elements/_reveal.scss',
    '_stylesheets/semantic-ui/elements/_segment.scss',
    '_stylesheets/semantic-ui/elements/_step.scss',
    '_stylesheets/semantic-ui/modules/_accordion.scss',
    '_stylesheets/semantic-ui/modules/_all.scss',
    '_stylesheets/semantic-ui/modules/_chatroom.scss',
    '_stylesheets/semantic-ui/modules/_checkbox.scss',
    '_stylesheets/semantic-ui/modules/_dimmer.scss',
    '_stylesheets/semantic-ui/modules/_dropdown.scss',
    '_stylesheets/semantic-ui/modules/_modal.scss',
    '_stylesheets/semantic-ui/modules/_nag.scss',
    '_stylesheets/semantic-ui/modules/_popup.scss',
    '_stylesheets/semantic-ui/modules/_rating.scss',
    '_stylesheets/semantic-ui/modules/_reveal.scss',
    '_stylesheets/semantic-ui/modules/_search.scss',
    '_stylesheets/semantic-ui/modules/_shape.scss',
    '_stylesheets/semantic-ui/modules/_sidebar.scss',
    '_stylesheets/semantic-ui/modules/_tab.scss',
    '_stylesheets/semantic-ui/modules/_transition.scss',
    '_stylesheets/semantic-ui/modules/_all.scss',
    '_stylesheets/semantic-ui/modules/_comment.scss',
    '_stylesheets/semantic-ui/modules/_feed.scss',
    '_stylesheets/semantic-ui/modules/_item.scss',
    '_stylesheets/semantic-ui/modules/_list.scss',
    '_stylesheets/semantic-ui/modules/_statistic.scss'
  ].map(function(path) {
    return assetPath + path;
  });
  api.add_files(assetFiles, 'client');  
  api.add_files('pathOveride.css', 'client');
});