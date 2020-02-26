
var Cat=require('./cat');
var Mouse=require('./mouse');

var cat=new Cat();
var mouse=new Mouse('Mickey');
cat.eat(mouse);
console.log(cat);