
var Cat=require('./cat')
var Mouse=require('./mouse');
var Dog=require('./dog');

var cat =new Cat();
var mouse=new Mouse('Mickey');
var dog=new Dog('Black');

cat.eat(mouse);
console.log(cat);

try{
	cat.eat(dog);
} catch (error){
	console.log('Error while cat eating');
}
