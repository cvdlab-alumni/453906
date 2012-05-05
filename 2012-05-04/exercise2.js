//fusoliera del "DH53 Humming Bird"

function nodi (points) { //funzione che mi calcola i nodi a partire dai punti
  var m = points.length;
  var k = 2;
  var n = (m + k + 1);
  var l = n - 3;
  var j = 1;
  var knots = [];
  for (var i = 0; i < 3; i++) {
    knots[i] = 0;
  };
  for (var i = 3; i < l; i++, j++) {
    knots[i] = j;
  };
  for (var i = l; i < n; i++) {
    knots[i] = j;
  };
  return knots;
};


var domain1 = INTERVALS(1)(50);
var domain2 = DOMAIN([[0,1],[0,1]])([30,10]);

var puntiC1 = [[1.7,0.8,0],[1.7,0.8,1.8],[1.7,0.7,2.2],[1.7,0.7,2.2],[1,0.65,2.2],[0.7,0.3,2.5],[0.7,0,2.6],
        [0.7,-0.3,2.5],[1,-0.65,2.2],[1.7,-0.7,2.2],[1.7,-0.7,2.2],[1.7,-0.8,1.8],[1.7,-0.8,0],[1.7,-0.8,0],[1.7,-0.8,0],[1.7,0.8,0]];
var knots1 = nodi(puntiC1);
var c1 = NUBS(S0)(2)(knots1)(puntiC1);
//var curva1 = MAP(c1)(domain1);
//DRAW(curva1);

var puntiC0 = [[-1.2,0.7,0.2],[-1.2,0.7,1.6],[-1.2,0.68,1.7],[-1.2,0.66,1.8],[-1.2,0.5,2],[-1.2,0.3,2.1],[-1.2,0,2.2],
        [-1.2,-0.3,2.1],[-1.2,-0.5,2],[-1.2,-0.66,1.8],[-1.2,-0.68,1.7],[-1.2,-0.7,1.6],[-1.2,-0.7,0.2],[-1.2,-0.7,0.2],[-1.2,-0.7,0.2],[-1.2,0.7,0.2]];
var knots0 = nodi(puntiC0);
var c0 = NUBS(S0)(2)(knots0)(puntiC0);
//var curva0 = MAP(c0)(domain1);
//DRAW(curva0);

var puntiC0a = [[-1.3,0.7,0.2],[-1.3,0.7,1.6],[-1.3,0.68,1.7],[-1.3,0.66,1.8],[-1.3,0.5,2],[-1.3,0.3,2.1],[-1.3,0,2.2],
        [-1.3,-0.3,2.1],[-1.3,-0.5,2],[-1.3,-0.66,1.8],[-1.3,-0.68,1.7],[-1.3,-0.7,1.6],[-1.3,-0.7,0.2],[-1.3,-0.7,0.2],[-1.3,-0.7,0.2],[-1.3,0.7,0.2]];
var knots0a = nodi(puntiC0a);
var c0a = NUBS(S0)(2)(knots0a)(puntiC0a);
//var curva0a = MAP(c0a)(domain1);
//DRAW(curva0a);

var puntiC3b = [[0,0.8,0],[0,0.8,1.6],[0,0.79,1.7],[0,0.78,1.8],[0,0.65,2.2],[0,0.45,2.4],[0,0,2.6],
        [0,-0.45,2.4],[0,-0.65,2.2],[0,-0.78,1.8],[0,-0.79,1.7],[0,-0.8,1.6],[0,-0.8,0],[0,-0.8,0],[0,-0.8,0],[0,0.8,0]];
var knots3b = nodi(puntiC3b);
var c3b = NUBS(S0)(2)(knots3b)(puntiC3b);
//var curva3b = MAP(c3b)(domain1);
//DRAW(curva3b);

var curveFusoliera1 = [c0a,c0,c3b,c1];
var knotsFusoliera1 = nodi(curveFusoliera1);
var fusoliera1 = NUBS(S1)(2)(knotsFusoliera1)(curveFusoliera1);
var mappaFusoliera1 = MAP(fusoliera1)(domain2);
DRAW(mappaFusoliera1);


var puntiC2 = [[1.7,0.8,0],[1.7,0.8,1.8],[1.7,0.7,2.2],[1.7,0.7,2.2],[1.8,0.65,2.25],[2,0.3,2.5],[2,0,2.6],
        [2,-0.3,2.5],[1.8,-0.65,2.25],[1.7,-0.7,2.2],[1.7,-0.7,2.2],[1.7,-0.8,1.8],[1.7,-0.8,0],[1.7,-0.8,0],[1.7,-0.8,0],[1.7,0.8,0]];
var knots2 = nodi(puntiC2);
var c2 = NUBS(S0)(2)(knots2)(puntiC2);
//var curva2 = MAP(c2)(domain1);
//DRAW(curva2);

var puntiC3 = [[2.3,0.8,0],[2.3,0.8,1.6],[2.3,0.79,1.7],[2.3,0.78,1.8],[2.3,0.65,2.2],[2.3,0.45,2.4],[2.3,0,2.6],
        [2.3,-0.45,2.4],[2.3,-0.65,2.2],[2.3,-0.78,1.8],[2.3,-0.79,1.7],[2.3,-0.8,1.6],[2.3,-0.8,0],[2.3,-0.8,0],[2.3,-0.8,0],[2.3,0.8,0]];
var knots3 = nodi(puntiC3);
var c3 = NUBS(S0)(2)(knots3)(puntiC3);
//var curva3 = MAP(c3)(domain1);
//DRAW(curva3);

var puntiC3a = [[3,0.8,0],[3,0.8,1.6],[3,0.79,1.7],[3,0.78,1.8],[3,0.65,2.2],[3,0.45,2.4],[3,0,2.6],
        [3,-0.45,2.4],[3,-0.65,2.2],[3,-0.78,1.8],[3,-0.79,1.7],[3,-0.8,1.6],[3,-0.8,0],[3,-0.8,0],[3,-0.8,0],[3,0.8,0]];
var knots3a = nodi(puntiC3a);
var c3a = NUBS(S0)(2)(knots3a)(puntiC3a);
//var curva3a = MAP(c3a)(domain1);
//DRAW(curva3a);

var curveFusoliera2 = [c2,c3,c3a];
var knotsFusoliera2 = nodi(curveFusoliera2);
var fusoliera2 = NUBS(S1)(2)(knotsFusoliera2)(curveFusoliera2);
var mappaFusoliera2 = MAP(fusoliera2)(domain2);
DRAW(mappaFusoliera2);


var puntiC4 = [[10.4,0.5,1],[10.4,0.5,1.5],[10.4,0.49,1.55],[10.4,0.48,1.6],[10.4,0.43,1.8],[10.4,0.3,2],[10.4,0,2.1],
        [10.4,-0.3,2],[10.4,-0.43,1.8],[10.4,-0.48,1.6],[10.4,-0.49,1.55],[10.4,-0.5,1.5],[10.4,-0.5,1],[10.4,-0.5,1],[10.4,-0.5,1],[10.4,0.5,1]];
var knots4 = nodi(puntiC4);
var c4 = NUBS(S0)(2)(knots4)(puntiC4);
//var curva4 = MAP(c4)(domain1);
//DRAW(curva4);

var puntiC5 = [[11,0.4,1+0.6*0.135],[11,0.4,1.5],[11,0.39,1.55],[11,0.38,1.6],[11,0.35,1.8],[11,0.25,2],[11,0,2.1],
        [11,-0.25,2],[11,-0.35,1.8],[11,-0.38,1.6],[11,-0.39,1.55],[11,-0.4,1.5],[11,-0.4,1+0.6*0.135],[11,-0.4,1+0.6*0.135],[11,-0.4,1+0.6*0.135],[11,0.4,1+0.6*0.135]];
var knots5 = nodi(puntiC5);
var c5 = NUBS(S0)(2)(knots5)(puntiC5);
//var curva5 = MAP(c5)(domain1);
//DRAW(curva5);

var puntiC6 = [[11.6,0.2,1+1.2*0.135],[11.6,0.2,1.5],[11.6,0.19,1.55],[11.6,0.18,1.6],[11.6,0.15,1.8],[11.6,0.1,2],[11.6,0,2.1],
        [11.6,-0.1,2],[11.6,-0.15,1.8],[11.6,-0.18,1.6],[11.6,-0.19,1.55],[11.6,-0.2,1.5],[11.6,-0.2,1+1.2*0.135],[11.6,-0.2,1+1.2*0.135],[11.6,-0.2,1+1.2*0.135],[11.6,0.2,1+1.2*0.135]];
var knots6 = nodi(puntiC6);
var c6 = NUBS(S0)(2)(knots6)(puntiC6);
//var curva6 = MAP(c6)(domain1);
//DRAW(curva6);

var puntiC7 = [[11.9,0.1,1+1.5*0.135],[11.9,0.1,1.5],[11.9,0.095,1.55],[11.9,0.09,1.6],[11.9,0.05,1.8],[11.9,0.02,2],[11.9,0,2.1],
        [11.9,-0.02,2],[11.9,-0.05,1.8],[11.9,-0.09,1.6],[11.9,-0.095,1.55],[11.9,-0.1,1.5],[11.9,-0.1,1+1.5*0.135],[11.9,-0.1,1+1.5*0.135],[11.9,-0.1,1+1.5*0.135],[11.9,0.1,1+1.5*0.135]];
var knots7 = nodi(puntiC7);
var c7 = NUBS(S0)(2)(knots7)(puntiC7);
//var curva7 = MAP(c7)(domain1);
//DRAW(curva7);

var curveFusoliera3 = [c3a,c4,c5,c6,c7];
var knotsFusoliera3 = nodi(curveFusoliera3);
var fusoliera3 = NUBS(S1)(2)(knotsFusoliera3)(curveFusoliera3);
var mappaFusoliera3 = MAP(fusoliera3)(domain2);
DRAW(mappaFusoliera3);


//cilindro raggio r, altezza h, n risoluzione, colore color (opzionale default grigio), trasla [x,y,z] (opzionali)
var drawCylinder = function (r,h,n,trasla,color) {
  var domain = DOMAIN([[0,2*PI],[0,h]])([n,1]);

  if (trasla === undefined) {
    trasla = [];
  };
  var x = trasla[0] || 0;
  var y = trasla[1] || 0;
  var z = trasla[2] || 0;

  if (color === undefined) { color = [1,1,1]; };
  if (color[0] === undefined) { color[0] = 1; };
  if (color[1] === undefined) { color[1] = 1; };
  if (color[2] === undefined) { color[2] = 1; };
  var rosso  = color[0];
  var giallo = color[1];
  var blu    = color[2];

  var cylinder = function (p) {
    var u = p[0];
    var w = p[1];

    return [x + r * COS(u), y + r * SIN(u), z + w];
  }

  var mapped = MAP(cylinder)(domain);
  DRAW(mapped);
  COLOR([rosso,giallo,blu])(mapped);

  return mapped;
};

//alberino su cui ruota il timone di coda
var cilindo = drawCylinder(0.1,0.87,20,[11.9,0,1+1.5*0.135]);


var puntiC0b = [[-1.5,0.7,0.3],[-1.5,0.7,1.6],[-1.5,0.68,1.7],[-1.5,0.66,1.8],[-1.5,0.5,1.92],[-1.5,0.3,2.03],[-1.5,0,2.13],
        [-1.5,-0.3,2.03],[-1.5,-0.5,1.92],[-1.5,-0.66,1.8],[-1.5,-0.68,1.7],[-1.5,-0.7,1.6],[-1.5,-0.7,0.3],[-1.5,-0.65,0.2],[-1.5,0.65,0.2],[-1.5,0.7,0.3]];
var knots0b = nodi(puntiC0b);
var c0b = NUBS(S0)(2)(knots0b)(puntiC0b);
//var curva0a = MAP(c0a)(domain1);
//DRAW(curva0a);

var puntiM1 = [[-1.7,0.5,0.7],[-1.7,0.5,1.5],[-1.7,0.49,1.55],[-1.7,0.48,1.6],[-1.7,0.38,1.8],[-1.7,0.25,1.9],[-1.7,0,2],
       [-1.7,-0.25,1.9],[-1.7,-0.38,1.8],[-1.7,-0.48,1.6],[-1.7,-0.49,1.55],[-1.7,-0.5,1.5],[-1.7,-0.5,0.7],[-1.7,-0.45,0.6],[-1.7,0.45,0.6],[-1.7,0.5,0.7]];
var knotsM1 = nodi(puntiM1);
var cM1 = NUBS(S0)(2)(knotsM1)(puntiM1);
//var curvaM1 = MAP(cM1)(domain1);
//DRAW(curvaM1);

var puntiM2 = [[-2.3,0.4,0.9],[-2.3,0.4,1.4],[-2.3,0.39,1.45],[-2.3,0.38,1.5],[-2.3,0.33,1.6],[-2.3,0.25,1.7],[-2.3,0,1.8],
       [-2.3,-0.25,1.7],[-2.3,-0.33,1.6],[-2.3,-0.38,1.5],[-2.3,-0.39,1.45],[-2.3,-0.4,1.4],[-2.3,-0.4,0.9],[-2.3,-0.35,0.8],[-2.3,0.35,0.8],[-2.3,0.4,0.9]];
var knotsM2 = nodi(puntiM2);
var cM2 = NUBS(S0)(2)(knotsM2)(puntiM2);
//var curvaM2 = MAP(cM2)(domain1);
//DRAW(curvaM2);

//musetto della fusoliera
var curveFusolieraM = [c0a,c0b,cM1,cM2,[-2.3,0,1.5]];
var knotsFusolieraM = nodi(curveFusolieraM);
var fusolieraM = NUBS(S1)(2)(knotsFusolieraM)(curveFusolieraM);
var mappaFusolieraM = MAP(fusolieraM)(domain2);
DRAW(mappaFusolieraM);