function Mouse(name){
	this.name=name;
	this.dead=false;
	this.die();
}

Mouse.prototype.die = function() {
	this.dead=true;
};

Mouse.prototype.run=function(){
	console.log('Run....')
}
module.exports= Mouse;