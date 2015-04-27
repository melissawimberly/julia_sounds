var RecursiveSquare = function(canvas) {
	this.canvas = canvas;
  	this.ctx = canvas.getContext('2d');
  	this.ctx.fillStyle="#FF0000";

  	var width = this.canvas.width / 2;  
	var height = this.canvas.height / 2;

	var w = 50;
	var h = 50;

	var x = width - ( w / 2 );
	var y = height - ( h / 2 );

  	// start with w and h of 100px
  	// and x and y to center the square in the canvas
  	this.drawSquares(x, y, w, h, 4);
}

RecursiveSquare.prototype.fillAll = function(x, y, w, h) {
	// fill up
	var w2 = w / 2;
	var h2 = h / 2;
	var x2 = x + ( w / 4 );
	var y2 = y + h;

	this.ctx.fillRect(x2, y2, w2, h2);
	
	// fill down
	w2 = w / 2;
	h2 = h / 2;
	x2 = x + ( w / 4 );
	y2 = y - ( h / 2 );

	this.ctx.fillRect(x2, y2, w2, h2);
	
	// fill right
	w2 = w / 2;
	h2 = h / 2;
	x2 = x + w;
	y2 = y + ( h / 4 );
	
	this.ctx.fillRect(x2, y2, w2, h2);

	// fill left
	w2 = w / 2;
	h2 = h / 2;
	x2 = x - ( w / 2 );
	y2 = y + ( h / 4 );

	this.ctx.fillRect(x2, y2, w2, h2);
}

RecursiveSquare.prototype.drawSquares = function(x, y, w, h, limit) {
	
	this.ctx.fillRect(x, y, w, h);

	if (limit > 0) {
		this.fillAll(x2, y2, w2, h2);
	} 

	// // recurse up
	// w2 = w / 2;
	// h2 = h / 2;
	// x2 = x + ( w / 4 );
	// y2 = y - ( h / 2 );

	// this.drawSquares(x2, y2, w2, h2, limit - 1);

	// // recurse right
	// w2 = w / 2;
	// h2 = h / 2;
	// x2 = x + w;
	// y2 = y + ( h / 4 );

	// this.drawSquares(x2, y2, w2, h2, limit - 1);

	// // recurse left
	// w2 = w / 2;
	// h2 = h / 2;
	// x2 = x - ( w / 2 );
	// y2 = y + ( h / 4 );

	this.drawSquares(x2, y2, w2, h2, limit - 1);

}

