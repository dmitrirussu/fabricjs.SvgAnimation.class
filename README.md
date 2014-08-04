fabricJs.SvgAnimation.class
===========================

Using this fabric.SvgAnimation class offer possibility tot animate an Svg object

Important:
===
	- Vectorial SVG - canvas animation


Example of using:
===

	var canvas = fabric.createCanvasElement();

	//One Play Svg Animation
	new fabric.SvgAnimation('assets/animation.svg', function(obj){
		obj.set({
			left: 100,
			top: 200
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
