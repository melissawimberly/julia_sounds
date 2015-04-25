// TODO
// write Julia object w params c, canvas
// figure out how turtle works and drawing on canvas

var Julia = function(c, canvas) {
  this.c = c;
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.drawFractal(this.c);
}

var Julia.prototype.drawFractal = function(c) {
  for (var x = 0; x < this.canvas.width; x++ ) {
    for (var y = 0; y < this.canvas.width; y++ ) {
      // julia algorithm here
      // paint to this.ctx
    }
  }
}
// var Julia = function(){
// }
// o = {
//     length : 500,
//     width : 500,
//     c : [0, 1], // c = x + iy will be [x, y]
//     maxIterate : 300,
//     canvas : null
// }

// function point(pos, color){
//     var c = 125 - Math.round((1 + Math.log(color)/Math.log(o.maxIterate)) * 255);
//     c = c.toString(16);
//     //generates the color that it is based on pos?



//     if (c.length == 1) c = '0'+c;
//     o.canvas.fillStyle="#0000"+c;
//     o.canvas.fillRect(pos[0], pos[1], 1, 1);
// }

// function conversion(x, y, R){
//     var m = R / o.width;
//     var x1 = m * (2 * x - o.width);
//     var y2 = m * (o.width - 2 * y);
//     return [x1, y2];
// }

// function f(z, c){
//     return [z[0]*z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]];
// }

// function abs(z){
//     return Math.sqrt(z[0]*z[0] + z[1]*z[1]);
// }

// function init(){
//     var R = (1 + Math.sqrt(1+4*abs(o.c))) / 2,
//         z, x, y, i;

//     o.canvas = document.getElementById('a').getContext("2d");
//     for (x = 0; x < o.width; x++){
//         for (y = 0; y < o.length; y++){
//             i = 0;
//             z = conversion(x, y, R);
//             while (i < o.maxIterate && abs(z) < R){
//                 z = f(z, o.c);
//                 if (abs(z) > R) break;
//                 i++;
//             }


//             if (i) point([x, y], i / o.maxIterate);
//         }
//     }
// }
