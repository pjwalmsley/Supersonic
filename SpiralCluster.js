function SpiralCluster(canvas, ctx, musicManager, spiralCount, x, y, rootSpiral){
    console.log('t');
    this.ctx = ctx;
    this.canvas = canvas;
    this.spiralCount = spiralCount;
    this.musicManager = musicManager;
    this.x = x;
    this.y = y;
    
    this.innerLegLength = 30;
    this.spiralSize = 40;
    this.rotation = 0;
    this.velocity = 5;
    
    this.spiral = new Array();
    
    this.spiral[0] = rootSpiral || new Spiral(this.canvas, this.ctx);
    
    // create spirals
    for (var i=0; i<this.spiralCount-1; i++) {
        this.spiral[i] = new Spiral(this.canvas, this.ctx);
        this.spiral[i].xNew = Math.cos(this.innerLegLength*Math.PI*2/this.spiralCount*i);
        this.spiral[i].yNew = Math.sin(this.innerLegLength*Math.PI*2/this.spiralCount*i);
    }
    
}

SpiralCluster.prototype.draw = function(){
    console.log('phase 2 draw');
    //translate canvas
    console.log(this.x+', '+this.y);
	this.rotation = this.velocity * Math.PI/180 + this.rotation;
    for (var i=0; i<this.spiralCount-1; i++) {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
		this.ctx.rotate(this.rotation);
	    this.ctx.beginPath();
	    this.ctx.moveTo(0, 0);
        this.ctx.strokeStyle = '#ff';
		this.ctx.lineWidth = 1;
        this.ctx.lineTo(this.spiral[i].x, this.spiral[i].y);
        //this.musicManager.analyze();
        //alert(this.musicManager.volume);
        //this.spiral[i].scaleOutterLineWidth = (this.musicManager.volume)*1;
        this.spiral[i].draw();
		this.ctx.stroke();
		this.ctx.restore();
    }
};