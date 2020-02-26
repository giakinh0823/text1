function Mouse(name){
	this.name=name;
	this.dead=false;
	this.die();
}

Mouse.prototype.die = function() {
	this.dead=true;
};
module.exports= Mouse;