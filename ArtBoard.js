function ArtBoard(canvas, ctx, musicManager){
	this.canvas = canvas;
	this.ctx = ctx;
    this.alpha = 1;
	this.primarySpiral = new Spiral(this.canvas, this.ctx);
	this.musicManager = musicManager;
	this.spiralCluster = new Array();
	this.activePhase = 1; // the active element layout. layout one is closeup of spinning spiral. layout 2 is bouncing spiral clusters.
	this.resizeToWindow();
	this.phaseOneInit();
}
		
ArtBoard.prototype.phaseOneInit = function(){	
	this.primarySpiral.scaleToArtBoard();
	this.activePhase = 1;
};

ArtBoard.prototype.phaseTwoInit = function(){
	this.spiralCluster.push( new SpiralCluster(this.canvas, this.ctx, this.musicManager, 3, 300, 400, this.primarySpiral) );
	this.spiralCluster.push( new SpiralCluster(this.canvas, this.ctx, this.musicManager, 3, 500, 700) );
	this.spiralCluster.push( new SpiralCluster(this.canvas, this.ctx, this.musicManager, 4, 900, 200) );
	this.activePhase = 2;
};

ArtBoard.prototype.blackout = function(){
    this.ctx.fillStyle = "rgb(0,0,0, "+this.alpha+")";
    this.ctx.fillRect (0, 0, this.canvas.width, this.canvas.height);
    if (this.alpha != 1){
        this.alpha = this.alpha + 0.01;
    }
};
	
ArtBoard.prototype.resizeToWindow = function(){
	function getWidth() {
		if (self.innerWidth) {
		   return self.innerWidth;
		}
		else if (document.documentElement && document.documentElement.clientHeight){
			return document.documentElement.clientWidth;
		}
		else if (document.body) {
			return document.body.clientWidth;
		}
		return 0;
	}
	
	function getHeight() {
		if (self.innerHeight) {
		   return self.innerHeight;
		}
		else if (document.documentElement && document.documentElement.clientHeight){
			return document.documentElement.clientHeight;
		}
		else if (document.body) {
			return document.body.clientHeight;
		}
		return 0;
	}
	
	canvas.width = getWidth();
	canvas.height = getHeight();	
};