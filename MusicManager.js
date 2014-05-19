function MusicManager(canvas, ctx){
	this.canvas = canvas;
	this.ctx = ctx;
	
	this.volume = 0;
    
    //get audio element
	//this.audioElement = audioElement;
	this.audioElement = document.getElementById('audio');
	
    //setup audio context
	this.audioContext = new webkitAudioContext();
	this.analyser = this.audioContext.createAnalyser();

    //take the audio input from the audio element
    var source = this.audioContext.createMediaElementSource(this.audioElement);
	//connect that audio source to the analyzer
    source.connect(this.analyser);
    //connect the analyser to the destination
    this.analyser.connect(this.audioContext.destination);
}

MusicManager.prototype.analyze = function(){
	alert('i');
    var freqData = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(freqData);
    
    for (i=0; i<8; i++){
        var a = i*(freqData.length/8);
        var b = i*(freqData.length/8)+(freqData.length/8);
        var magnitudeTally = 0;
        for(ii=a; ii<b; ii++){
            var magnitude = freqData[ii];
            //context.fillRect(ii, canvas.height, 2, -magnitude);
            magnitudeTally += magnitude;
        }
        this.volume = (magnitudeTally/freqData.length);
		alert(this.volume);
        //var radius = volume+10;
        //context.beginPath()
        //var divWidth = canvas.width/8;
        //var x = divWidth*i + divWidth/2;
        //var y = 75;
        //context.arc(x, y, radius, 0, Math.PI*2, true); 
        //context.closePath();
        //context.fill();
    }
};