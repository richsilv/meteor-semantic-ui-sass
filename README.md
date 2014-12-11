##Semantic UI package for meteor, Sass version

###What is this?
This is a wrapper for the Sass version of Semantic-UI `v0.19.3` for Meteor 0.9.1+, released because I couldn't get icon fonts to work with the existing package.  Unfortunately, at present there are no Sass variables actually defined in the SCSS port of Semantic-UI, so it's not really a great deal of use.  However, I hope for that to change in the future...

###What is Semantic UI?
Semantic is a set of specifications for sharing UI elements between developers. Semantic is also a UI library to make front end development simpler and easier to learn. 

[http://semantic-ui.com](http://www.semantic-ui.com/)  
[https://github.com/Semantic-Org/Semantic-UI](https://github.com/Semantic-Org/Semantic-UI)

###Install
`meteor add richsilv:semantic-ui-sass`

You then need to import the SCSS in your main SCSS file:

```css
@import ".meteor/local/build/programs/server/assets/packages/richsilv_semantic-ui-sass/assets/stylesheets/semantic-ui";
```

####issues:
Javascript elements like dropdowns are not active by default. 
You will have to activate them 'manually' in the `template.rendered` function like: 

```javascript
Template.hello.rendered = function(){
	$('.ui.dropdown').dropdown();
}
```
