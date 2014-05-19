function Spiral(canvas, ctx){
	this.x = Math.floor(canvas.width/2);
	this.y = Math.floor(canvas.height/2);
	this.xNew = Math.floor(canvas.width/2);
	this.yNew = Math.floor(canvas.height/2);
	this.size = .3; // between 
	this.scaleOutterLineWidth = 0.05; // between .1 and .8
	this.windDetail = .1; // how blocky the spiral looks.  between .01 and 7.  recomended: . lower = more detail.  effects spiral size.
	this.velocityRandFactor = 3;
	this.velocity = Math.random()*this.velocityRandFactor+4; // additional degrees to rotate.  between 1 and 30
	this.angleScaler = 1; // between
	this.rotation = 0;
	this.innerTightness = 3.7;//between .8 and 1.7
	this.outerTightness = 3.3;
	this.innerTightnessPower = .2;
	this.outerTightnessPower = .2; // between .85 and .95
	this.xMoveIntervalUnsigned = 10;
	this.yMoveIntervalUnsigned = 10;
	
	this.ctx = ctx;
	this.canvas = canvas;
}

Spiral.prototype.scaleToArtBoard = function(){
	this.x = Math.floor(this.canvas.width/2);
	this.y = Math.floor(this.canvas.height/2);
};

Spiral.prototype.draw = function(){

		// define variables
		var inner = {
			x: new Array(),
			y: new Array(),
			scale: this.size
		};
		var outer = {
			x:  new Array(),
			y: new Array(),
			scale: this.size+this.scaleOutterLineWidth
		};
		var angle, length;
		
		// move and scale
		var xMoveIntervalSigned, yMoveIntervalSigned, xMoveIntervalUnsigned, yMoveIntervalUnsigned;
		// calculate exact ammount we need to move
		if (this.x-this.xMoveIntervalUnsigned < this.xMoveIntervalUnsigned) {
			xMoveIntervalUnsigned = this.x % this.xMoveIntervalUnsigned;
		} else {
			xMoveIntervalUnsigned = this.xMoveIntervalUnsigned;
		}
		if (this.y-this.yMoveIntervalUnsigned < this.yMoveIntervalUnsigned) {
			yMoveIntervalUnsigned = this.y % this.yMoveIntervalUnsigned;
		} else {
			yMoveIntervalUnsigned = this.yMoveIntervalUnsigned;
		}
		console.log(yMoveIntervalUnsigned);
		// set movement direction
		if (this.xNew<this.x) {
			xMoveIntervalSigned = -xMoveIntervalUnsigned;
			if (this.x+xMoveIntervalSigned < this.xNew) {
				//if( this.x%this.xMoveIntervalUnsigned != 0 ){
					xMoveIntervalSigned = -(this.x % this.xMoveIntervalUnsigned);
				//}
			}
		} else if (this.x < this.xNew) {
			xMoveIntervalSigned = xMoveIntervalUnsigned;
			if (this.x+xMoveIntervalSigned > this.xNew) {
				//if( this.x%this.xMoveIntervalUnsigned != 0 ){
					xMoveIntervalSigned = -(this.x % this.xMoveIntervalUnsigned);
				//}
			}
		} else {
			xMoveIntervalSigned = 0;
		}
		
		if (this.y > this.yNew) {
			yMoveIntervalSigned = -yMoveIntervalUnsigned;
			if (this.y+yMoveIntervalSigned < this.yNew) {
				//if( this.y%this.yMoveIntervalUnsigned != 0 ){
					yMoveIntervalSigned = -(this.y % this.yMoveIntervalUnsigned);
				//}
			}
		} else if (this.y < this.yNew){
			yMoveIntervalSigned = yMoveIntervalUnsigned;
			if (this.y+yMoveIntervalSigned > this.yNew) {
				//if( this.y%this.yMoveIntervalUnsigned != 0 ){
					yMoveIntervalSigned = -(this.y % this.yMoveIntervalUnsigned);
				//}
			}
		} else {
			yMoveIntervalSigned = 0;
		}
		console.log(xMoveIntervalSigned+', '+yMoveIntervalSigned+', '+this.y+', '+this.yNew);
		// move
		this.x = this.x + xMoveIntervalSigned;
		this.y = this.y + yMoveIntervalSigned;
		
		// calculate points
		for (var i=0; i<720; i++) {
			angle = i * this.windDetail;
			
			length = 1+(inner.scale*angle)*this.innerTightness*Math.pow( i, this.innerTightnessPower)*(i/360);
            inner.x[i]=length*Math.cos(angle*this.angleScaler);
            inner.y[i]=length*Math.sin(angle*this.angleScaler);
			
			length =1+(outer.scale*angle)*this.outerTightness*Math.pow(i, this.outerTightnessPower)*(i/360);
            outer.x[i]=length*Math.cos(angle);
            outer.y[i]=length*Math.sin(angle);
        }
		this.rotation = this.velocity * Math.PI/180 + this.rotation;
		
		// draw shape
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
		this.ctx.rotate(this.rotation);
	    this.ctx.beginPath();
	    this.ctx.moveTo(0, 0);
        this.ctx.strokeStyle = '#ff';
		this.ctx.lineWidth = 1;
        for(i=0; i<720; i++){
        	this.ctx.lineTo(inner.x[i], inner.y[i]);
		}
		this.ctx.lineTo(outer.x[719], outer.y[719]);
		for(i=720; 0<i; i--){
        	this.ctx.lineTo(outer.x[i], outer.y[i]);
		}
        this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
		
};