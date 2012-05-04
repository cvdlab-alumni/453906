// Ala di un "DH53 Humming Bird"

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

var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);
var profiliAla = [p1,p2,p3,p4,p5,p6,[2.5,12.5,0.075+12.5*0.05]];
var knotsAla = nodi(profiliAla);
var ala = NUBS(S1)(2)(knotsAla)(profiliAla);
var mappaAla = MAP(ala)(domain2);
DRAW(mappaAla);