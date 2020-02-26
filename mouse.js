function Mouse(name){
	this.name=name;
	this.dead=false;
}

mouse.prototype.die = function() {
	this.dead=true;
};
module.export= Mouse;