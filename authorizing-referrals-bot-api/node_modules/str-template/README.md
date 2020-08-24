# str-template
String templates for in depth properties replacements


```javascript
var interpolate = require('str-template');

var data = {
	string: 'Martin',
	number: 25,
	object: {
		key: 'NodeJS'
	},
	array: [{},{value:'two'}]
};

var interpolated = interpolate("My name is ${string}, I'm ${number} and I've been a ${object.key} developer for like ${array[1].value} years", data);

console.log(interpolated);
```