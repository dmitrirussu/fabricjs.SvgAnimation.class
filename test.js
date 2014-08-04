/**
 * Created by DRU on 04.08.2014.
 */
(function(){
	var canvas = fabric.createCanvasElement();

	//One Play
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

})();