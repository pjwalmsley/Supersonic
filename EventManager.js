var primaryAB, musicManager;

function EventManager(primaryAB){
	
	this.primaryAB = primaryAB;
	
	this.timeout = new Array();
	
    Render.prototype.beginAnimation = function(){
        
    }
    
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.outerTightnessPower = .25;
			this.primaryAB.primarySpiral.size = 1;
		},
		1
	));
	
	this.timeout.push( window.setTimeout(
		function(){
            this.primaryAB.primarySpiral.outerTightnessPower = .25;
			this.primaryAB.primarySpiral.size = 1;
			this.primaryAB.primarySpiral.velocity = 12;
		},
		1000
	));

	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 3;
			this.primaryAB.primarySpiral.outerTightnessPower = .2;
            this.primaryAB.primarySpiral.size = 1;
			this.primaryAB.primarySpiral.xNew = 400;
			this.primaryAB.primarySpiral.yNew = 300;
		},
		4000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 12;
			this.primaryAB.primarySpiral.outerTightnessPower = .2;
			this.primaryAB.primarySpiral.size = .4;
			this.primaryAB.primarySpiral.xNew = 300;
			this.primaryAB.primarySpiral.yNew = 500;
		},
		8000
	));

	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 8;
            this.primaryAB.primarySpiral.outerTightnessPower = .2;
			this.primaryAB.primarySpiral.size = .2;
			this.primaryAB.primarySpiral.windDetail = 2;
            this.primaryAB.primarySpiral.xNew = 300;
			this.primaryAB.primarySpiral.yNew = 500;
		},
		9000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 11;
			this.primaryAB.primarySpiral.size = .4;
		},
		10000
	));

	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.xNew = 700;
			this.primaryAB.primarySpiral.yNew = 300;
		},
		10000
	));
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 14;
			this.primaryAB.primarySpiral.windDetail = .4;
			this.primaryAB.primarySpiral.outerTightnessPower = .8;
			this.primaryAB.primarySpiral.xNew = 400;
			this.primaryAB.primarySpiral.yNew = 370;
		},
		18000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.outerTightnessPower = .25;
			this.primaryAB.primarySpiral.size = 1;
		},
		20000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.windDetail = .1;
			this.primaryAB.primarySpiral.velocity = 7;
			this.primaryAB.primarySpiral.windDetail = 2;
			this.primaryAB.primarySpiral.outerTightnessPower = .2;

		},
		23000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 9;
		},
		27000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 12;
		},
		28000
	));	
	
	//this.timeout.push( window.setTimeout(
	//	function(param){
	//		//alert(param[0]+param[1]+param[2]+" hello world");
	//	},
	//	1000,
	//	[
	//		'a',
	//		'b',
	//		'c'
	//	]
	//));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.primarySpiral.velocity = 7;
			this.primaryAB.primarySpiral.windDetail = 2;
			this.primaryAB.primarySpiral.outerTightnessPower = .5;

		},
		30000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.phaseTwoInit();
		},
		32000
	));
	
	this.timeout.push( window.setTimeout(
		function(){
			this.primaryAB.phaseOneInit();
			this.primaryAB.primarySpiral.velocity = 7;
			this.primaryAB.primarySpiral.windDetail = 1;
			this.primaryAB.primarySpiral.outerTightnessPower = .3;

		},
		42000
	));
	
    this.timeout.push( window.setTimeout(
		function(){
            this.primaryAB.blackout();
		},
		49000
	));
    
}