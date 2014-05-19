function Render(canvas, ctx, primaryAB, musicManager){
	this.canvas = canvas;
	this.ctx = ctx;
    this.primaryAB = primaryAB; // primary artboard for animation
    this.musicManager = musicManager;
	this.autoOrient = false; // canvas and its elements should resize and reorient with each render
}

Render.prototype.renderCurrentFrame = function(){
    if (this.autoOrient){
		this.primaryAB.resizeToWindow();
		this.primaryAB.primarySpiral.scaleToArtBoard();
	}
    
	if ( this.primaryAB.activePhase == 1) {
		this.phaseOneRender();
	} else if ( this.primaryAB.activePhase == 2) {
		this.phaseTwoRender();
	} else if ( this.primaryAB.activePhase == 3) {
        this.blackout();
    }
};

// The first phase is the close up spiral visual.
Render.prototype.phaseOneRender = function(){
	this.primaryAB.primarySpiral.draw();
};

// The second phase was intended to be the zoomed out bouncing spiral clusters visual.
Render.prototype.phaseTwoRender = function(){
	this.primaryAB.spiralCluster.forEach(function(element, index, array){
		element.draw();
	});
};

Render.prototype.blackout = function(){
    this.primaryAB.blackout();
}