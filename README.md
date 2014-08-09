fabricJs.SvgAnimation.class
===========================

Using this fabric.SvgAnimation class offer possibility to animate an Svg object

Important:
===
	- Vectorial SVG - Canvas animation


Example of using:
===

	var canvas = fabric.Canvas('canvas-element-id');

	//One Play Svg Animation
	new fabric.SvgAnimation('assets/animation.svg', function(obj){
		obj.set({
			left: 100,
			top: 200
			//,loop: true
		});

		obj.onePlay().setDelay(100);
		canvas.add(obj).renderAll();
	});

	//Play object in loop
	new fabric.SvgAnimation('assets/animation.svg', function(obj){

		obj.play().setDelay(100);

		canvas.centerObject(obj).add(obj).renderAll();
	});
	
	canvas.renderAll();

<a href="https://github.com/kangax/fabric.js" ta>Fabric JS</a>
===
