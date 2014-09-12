##Semantic UI package for meteor

**THIS IS A FORK OF [NOOITAF'S SEMANTIC-UI](https://github.com/nooitaf/meteor-semantic-ui) PACKAGE** 

###What is this?
This is a wrapper for Semantic UI `v0.19.0` for Meteor 0.9.1+, released because I couldn't get icon fonts to work with the existing package.

###What is Semantic UI?
Semantic is a set of specifications for sharing UI elements between developers. Semantic is also a UI library to make front end development simpler and easier to learn. 

[http://semantic-ui.com](http://www.semantic-ui.com/)  
[https://github.com/Semantic-Org/Semantic-UI](https://github.com/Semantic-Org/Semantic-UI)

###Install
`meteor add richsilv:semantic-ui`

####issues:
Javascript elements like dropdowns are not active by default. 
You will have to activate them 'manually' in the `template.rendered` function like: 

```javascript
Template.hello.rendered = function(){
	$('.ui.dropdown').dropdown();
}
```
