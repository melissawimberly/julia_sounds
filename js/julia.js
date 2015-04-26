// TODO
// 1. make the canvas 100% of screen
// 2. add sleep effect into loop
// 3. communicate with sound team to see if 
// 3a. we need a sound loop in the it
// 4. think about the colors
// 4a. rewrite point function with nicer colors
// 5. figure out a way to step through


var Julia = function(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.maxIterate = 300;
  this.c = [-1, 0];
  // this.c = [-.28, -.528];
  debugger;
  this.drawFractal();
}

Julia.prototype.drawFractal = function() {
  debugger;
  var R = (1 + Math.sqrt(1+4*this.abs(this.c))) / 2,
        z, x, y, i;

  for (var x = 0; x < this.canvas.width; x++ ) {
    for (var y = 0; y < this.canvas.height; y++ ) {
     debugger
      // paint to this.ctx
      i = 0;
      z = this.conversion(x, y, R);
      while (i < this.maxIterate && this.abs(z) < R){
          debugger
          z = this.f(z, this.c);
          if (this.abs(z) > R) break;
          i++;
      }

      if (i) this.point([x, y], i / this.maxIterate);
    }

  }
}

Julia.prototype.f = function(z, c){
    return [z[0]*z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]];
}

Julia.prototype.point = function(pos, color) {
    var c = 125 - Math.round((1 + Math.log(color)/Math.log(this.maxIterate)) * 255);
    c = c.toString(16);

    if (c.length == 1) c = '0'+c;
    this.ctx.fillStyle="#0000"+c;
    this.ctx.fillRect(pos[0], pos[1], 1, 1);
}

Julia.prototype.abs = function(z){
    return Math.sqrt(z[0]*z[0] + z[1]*z[1]);
}

Julia.prototype.conversion = function(x, y, R) {
    var m = R / this.canvas.width;
    var x1 = m * (2 * x - this.canvas.width);
    var y2 = m * (this.canvas.width - 2 * y);
    return [x1, y2];
}

