var canvas = document.getElementById("myCanvas");
canvas.style.border = "1px solid #000";
var context = canvas.getContext('2d');
var window = document.window;
	
var primaryAB = new ArtBoard(canvas, context); // model
var musicManager = new MusicManager(canvas, ctx); // library
var eventManager = new EventManager(primaryAB, musicManager); // controller
var render = new Render(canvas, context, primaryAB, musicManager); // view
var sp = new Spiral(canvas, context);

animationLoop();
    
function animationLoop(){
	context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	requestAnimFrame(animationLoop, 1000/60);
	//render.renderCurrentFrame();
	sp.draw();
}