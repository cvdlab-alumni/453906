//unisco insieme i pezzi del "DH53 Humming Bird"

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


//var domain1 = INTERVALS(1)(50);
var domain2a = DOMAIN([[0,1],[0,1]])([20,30]);
var domain2 = DOMAIN([[0,1],[0,1]])([30,10]);

//ALI
//per inclinare l'ala aggiungo alla coordinata Z una quantità proporzionale alla Y
var puntiProfilo1 = [[3.4,0.8,0+0.8*0.05],[0.4,0.8,0+0.8*0.05],[0.2,0.8,0+0.8*0.05],[0,0.8,0.05+0.8*0.05],
          [0,0.8,0.2+0.8*0.05],[0.7,0.8,0.3+0.8*0.05],[1.1,0.8,0.3+0.8*0.05],[2,0.8,0.25+0.8*0.05],[3.4,0.8,0+0.8*0.05]];
var knots1 = nodi(puntiProfilo1);
var p1 = NUBS(S0)(2)(knots1)(puntiProfilo1);
//var profilo1 = MAP(p1)(domain1);
//DRAW(profilo1);

var puntiProfilo2 = [[3.7,2,0+2*0.05],[0.4,2,0+2*0.05],[0.2,2,0+2*0.05],[0,2,0.1+2*0.05],
          [0,2,0.4+2*0.05],[0.7,2,0.6+2*0.05],[1.1,2,0.6+2*0.05],[2,2,0.5+2*0.05],[3.7,2,0+2*0.05]];
var knots2 = nodi(puntiProfilo2);
var p2 = NUBS(S0)(2)(knots2)(puntiProfilo2);
//var profilo2 = MAP(p2)(domain1);
//DRAW(profilo2);

var puntiProfilo3 = [[3.7,10,0+10*0.05],[0.4,10,0+10*0.05],[0.2,10,0+10*0.05],[0,10,0.1+10*0.05],
          [0,10,0.4+10*0.05],[0.7,10,0.6+10*0.05],[1.1,10,0.6+10*0.05],[2,10,0.5+10*0.05],[3.7,10,0+10*0.05]];
var knots3 = nodi(puntiProfilo3);
var p3 = NUBS(S0)(2)(knots3)(puntiProfilo3);
//var profilo3 = MAP(p3)(domain1);
//DRAW(profilo3);

var puntiProfilo4 = [[3.7,11,0+11*0.05],[0.4,11,0+11*0.05],[0.2,11,0+11*0.05],[0,11,0.07+11*0.05],
          [0,11,0.3+11*0.05],[0.7,11,0.45+11*0.05],[1.1,11,0.45+11*0.05],[2,11,0.37+11*0.05],[3.7,11,0+11*0.05]];
var knots4 = nodi(puntiProfilo4);
var p4 = NUBS(S0)(2)(knots4)(puntiProfilo4);
//var profilo4 = MAP(p4)(domain1);
//DRAW(profilo4);

var puntiProfilo5 = [[3.6,12,0+12*0.05],[1,12,0+12*0.05],[0.8,12,0+12*0.05],[0.6,12,0.05+12*0.05],
          [0.6,12,0.2+12*0.05],[1.3,12,0.3+12*0.05],[1.7,12,0.3+12*0.05],[2.4,12,0.25+12*0.05],[3.6,12,0+12*0.05]];
var knots5 = nodi(puntiProfilo5);
var p5 = NUBS(S0)(2)(knots5)(puntiProfilo5);
//var profilo5 = MAP(p5)(domain1);
//DRAW(profilo5);

var puntiProfilo6 = [[3,12.5,0+12.5*0.05],[2.1,12.5,0+12.5*0.05],[2.05,12.5,0+12.5*0.05],[2,12.5,0.025+12.5*0.05],
          [2,12.5,0.1+12.5*0.05],[2.175,12.5,0.15+12.5*0.05],[2.275,12.5,0.15+12.5*0.05],[2.5,12.5,0.125+12.5*0.05],[3,12.5,0+12.5*0.05]];
var knots6 = nodi(puntiProfilo6);
var p6 = NUBS(S0)(2)(knots6)(puntiProfilo6);
//var profilo6 = MAP(p6)(domain1);
//DRAW(profilo6);

var profiliAla = [p1,p2,p3,p4,p5,p6,[2.5,12.5,0.075+12.5*0.05]];
var knotsAla = nodi(profiliAla);
var ala = NUBS(S1)(2)(knotsAla)(profiliAla);
var mappaAla = MAP(ala)(domain2a);
var ali = STRUCT([mappaAla,S([1])([-1])(mappaAla)]);


//FUSOLIERA
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

var puntiC7 = [[11.9,0.1,1+1.5*0.135],[11.9,0.1,1.5],[11.9,0.096,1.55],[11.9,0.093,1.6],[11.9,0.08,1.8],[11.9,0.05,2],[11.9,0,2.1],
        [11.9,-0.05,2],[11.9,-0.08,1.8],[11.9,-0.093,1.6],[11.9,-0.096,1.55],[11.9,-0.1,1.5],[11.9,-0.1,1+1.5*0.135],[11.9,-0.1,1+1.5*0.135],[11.9,-0.1,1+1.5*0.135],[11.9,0.1,1+1.5*0.135]];
var knots7 = nodi(puntiC7);
var c7 = NUBS(S0)(2)(knots7)(puntiC7);
//var curva7 = MAP(c7)(domain1);
//DRAW(curva7);

var curveFusoliera3 = [c3a,c4,c5,c6,c7,c7,[11.9,0,1.5]];
var knotsFusoliera3 = nodi(curveFusoliera3);
var fusoliera3 = NUBS(S1)(2)(knotsFusoliera3)(curveFusoliera3);
var mappaFusoliera3 = MAP(fusoliera3)(domain2);

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


//STABILIZZATORI
//Timone di coda, da traslare di [11.9,0,2.0725]
var puntiV1 = [[0,0.1,-0.87],[0,0.1,0],[0,0.1,0],[-1.5,0,0],[-1.5,0,0],[-0.9,0,1.2],[0,0,2.2],[0.8,0,2.65],[1,0,2.75],[1,0,2.75],
              [1.45,0,2],[1.7,0,1.1],[1.71,0,0.7],[1.7,0,0.3],[1.1,0.05,-0.7],[0,0.1,-0.87]];
var knotsV1 = nodi(puntiV1);
var cV1 = NUBS(S0)(2)(knotsV1)(puntiV1);
//var curvaV1 = MAP(cV1)(domain1);
//DRAW(curvaV1);

var puntiV2 = [[0,-0.1,-0.87],[0,-0.1,0],[0,-0.1,0],[-1.5,0,0],[-1.5,0,0],[-0.9,0,1.2],[0,0,2.2],[0.8,0,2.65],[1,0,2.75],[1,0,2.75],
              [1.45,0,2],[1.7,0,1.1],[1.71,0,0.7],[1.7,0,0.3],[1.1,-0.05,-0.7],[0,-0.1,-0.87]];
var knotsV2 = nodi(puntiV2);
var cV2 = NUBS(S0)(2)(knotsV2)(puntiV2);
//var curvaV2 = MAP(cV2)(domain1);
//DRAW(curvaV2);

var curveVerticalS = [[0.5,0.1,1],cV1,cV1,cV2,cV2,[0.5,-0.1,1]];
var knotsVerticalS = nodi(curveVerticalS);
var verticalS = NUBS(S1)(2)(knotsVerticalS)(curveVerticalS);
var mappaVerticalS = MAP(verticalS)(domain2);

//Orizontal Stabilizers, da traslare di [11.9,0,2.0725]
var puntiO1 = [[-1.5,0,0],[-1.5,1,0],[-1.2,2.5,0],[0,3.7,0],[1.2,4,0],[1.2,4,0],[1.4,3,0],[1.4,2,0],[1.1,0.7,0],[0.1,0.1,0],[0,0,0],[-1.5,0,0]];
var knotsO1 = nodi(puntiO1);
var cO1 = NUBS(S0)(2)(knotsO1)(puntiO1);
//var curvaO1 = MAP(cO1)(domain1);
//DRAW(curvaO1);

var puntiO2 = [[-0.75,0,0.1],[-0.75,0.7,0.1],[-0.6,2.5*0.7,0.1],[0,3.7*0.7,0.1],[0.6,4*0.7,0.1],[0.6,4*0.7,0.1],[0.7,3*0.7,0.1],[0.7,2*0.7,0.1],[0.55,0.7*0.7,0.1],[0.05,0.1*0.7,0.1],[0,0,0.1],[-0.75,0,0.1]];
var knotsO2 = nodi(puntiO2);
var cO2 = NUBS(S0)(2)(knotsO2)(puntiO2);
//var curvaO2 = MAP(cO2)(domain1);
//DRAW(curvaO2);

var puntiO3 = [[-0.75,0,-0.1],[-0.75,0.7,-0.1],[-0.6,2.5*0.7,-0.1],[0,3.7*0.7,-0.1],[0.6,4*0.7,-0.1],[0.6,4*0.7,-0.1],[0.7,3*0.7,-0.1],[0.7,2*0.7,-0.1],[0.55,0.7*0.7,-0.1],[0.05,0.1*0.7,-0.1],[0,0,-0.1],[-0.75,0,-0.1]];
var knotsO3 = nodi(puntiO3);
var cO3 = NUBS(S0)(2)(knotsO3)(puntiO3);
//var curvaO3 = MAP(cO3)(domain1);
//DRAW(curvaO3);

var curveOrizontalS = [[0,1,0.1],cO2,cO1,cO1,cO3,[0,1,-0.1]];
var knotsOrizontalS = nodi(curveOrizontalS);
var orizontalS = NUBS(S1)(2)(knotsOrizontalS)(curveOrizontalS);
var mappaOrizontalS = MAP(orizontalS)(domain2);
var OrizontalStabilizers = STRUCT([mappaOrizontalS, S([1])([-1])(mappaOrizontalS)]);


//unisco in una struct e disegno
var modello = STRUCT([ali,mappaFusoliera1,mappaFusoliera2,mappaFusoliera3,mappaFusolieraM,T([0,2])([11.9,2.0725]),mappaVerticalS,OrizontalStabilizers]);
DRAW(modello);