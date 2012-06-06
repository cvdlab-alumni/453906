//funzione per il calcolo dei nodi a partire da un array di punti
function nodi (points) {
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



//scalini
var hS = 0.14;
var lS = 0.24;
var dominioScalini = DOMAIN([[0,1],[3*PI/2,2*PI]])([30,20]); //primo per l'altezza, secondo per circonferenza
var puntiScalini = [[0,0,0],[1,0,0],[1,0,0],[1,0,-hS],[1,0,-hS],[1+lS,0,-hS],[1+lS,0,-hS],[1+lS,0,-2*hS],[1+lS,0,-2*hS],[1+2*lS,0,-2*hS],[1+2*lS,0,-2*hS],
                    [1+2*lS,0,-3*hS],[1+2*lS,0,-3*hS],[1+3*lS,0,-3*hS],[1+3*lS,0,-3*hS],[1+3*lS,0,-4*hS],[1+3*lS,0,-4*hS],[1+4*lS,0,-4*hS],[1+4*lS,0,-4*hS],
                    [1+4*lS,0,-5*hS],[1+4*lS,0,-5*hS],[1+5*lS,0,-5*hS],[1+5*lS,0,-5*hS],[1+5*lS,0,-6*hS]];
var nodiScalini = nodi(puntiScalini);
var profiloScalini = NUBS(S0)(2)(nodiScalini)(puntiScalini);
var mappaScalini = ROTATIONAL_SURFACE(profiloScalini);
var scalini = MAP(mappaScalini)(dominioScalini);
DRAW(scalini);

//base
var base = T([2])([-hS])(SIMPLEX_GRID([[11],[16.6],[hS]]));
DRAW(base);

//muri esterni sopra la base
var torreA = SIMPLEX_GRID([[-5.8,2],[-0.2,0.5],[8.4]]);
var torreB = SIMPLEX_GRID([[-7.8,1],[-0.2,0.5],[0.8,-2,2.9,-2,0.7]]);
var torreC = SIMPLEX_GRID([[-8.8,2],[-0.2,0.5],[8.4]]);
var torre = STRUCT([torreA,torreB,torreC]);
DRAW(torre);

var latoA = SIMPLEX_GRID([[-10.3,0.5],[-0.7,1.5],[8.4]]);
var latoB = SIMPLEX_GRID([[-10.3,0.5],[-2.2,1],[0.8,-2,2.9,-2,0.7]]);
var latoC = SIMPLEX_GRID([[-10.3,0.5],[-3.2,2],[8.4]]);
var latoD = SIMPLEX_GRID([[-10.3,0.5],[-5.2,0.7],[7.4]]);
var latoE = SIMPLEX_GRID([[-10.3,0.5],[-5.9,1],[0.8,-2,2.5,-0.9,1.2]]);
var latoF = SIMPLEX_GRID([[-10.3,0.5],[-6.9,2.8],[7.4]]);
var latoG = SIMPLEX_GRID([[-10.3,0.5],[-9.7,1],[0.8,-2,2.5,-0.9,1.2]]);
var latoH = SIMPLEX_GRID([[-10.3,0.5],[-10.7,2.7],[7.4]]);
var latoI = SIMPLEX_GRID([[-10.3,0.5],[-13.4,1],[0.8,-2,2.5,-0.9,1.2]]);
var latoJ = SIMPLEX_GRID([[-10.3,0.5],[-14.4,1.5],[7.4]]);
var lato = STRUCT([latoA,latoB,latoC,latoD,latoE,latoF,latoG,latoH,latoI,latoJ]);
DRAW(lato);

var retroA = SIMPLEX_GRID([[-8.8,2],[-15.9,0.5],[7.4]]);
var retroB = SIMPLEX_GRID([[-7.8,1],[-15.9,0.5],[0.8,-2,2.5,-0.9,1.2]]);
var retroC = SIMPLEX_GRID([[-5.2,2.6],[-15.9,0.5],[7.4]]);
var retroD = SIMPLEX_GRID([[-4.2,1],[-15.9,0.5],[0.8,-2,2.5,-0.9,1.2]]);
var retroE = SIMPLEX_GRID([[-2.1,2.1],[-15.9,0.5],[7.4]]);
var retroF = SIMPLEX_GRID([[-2,0.1],[-15.9,0.5],[4.5]]);
var retroG = SIMPLEX_GRID([[-1,1],[-15.9,0.5],[0.8,-2,1.7]]);
var retroH = SIMPLEX_GRID([[-0.5,0.5],[-15.9,0.5],[4.5]]);
var retroI = SIMPLEX_GRID([[0.5],[-15.9,0.5],[-2,2.5]]);
var retroJ = SIMPLEX_GRID([[2.1],[-15.9,0.5],[-6.6,0.8]]);
var retro = STRUCT([retroA,retroB,retroC,retroD,retroE,retroF,retroG,retroH,retroI,retroJ]);
DRAW(retro);

function semicerchio (r,ty,tz) { 
  var funzione = function (p) { 
    var u = p[0] * PI/2;

    return [r * SIN(u),ty,tz + r * COS(u)];
  };

  return funzione;
};

//segmento parallelo ad asse X
function segmento (lunghezza,ty,tz) {
  var funzione = function (p) {
    var u = p[0] * lunghezza;

    return [u,ty,tz];
  };

  return funzione;
}

var dominioSemic = DOMAIN([[0,1],[0,1]])([20,20]);

var semic1 = semicerchio(2.1,16.4,4.5);
var semic2 = semicerchio(1.8,16.4,4.5);
var semic3 = semicerchio(1.8,15.9,4.5);
var semic4 = semicerchio(2.1,15.9,4.5);
var segmento1 = segmento(2.1,16.4,6.6);
var segmento2 = segmento(2.1,15.9,6.6);

var curveSemic1 = [semic1,segmento1,segmento1,segmento2,segmento2,semic4];
var nodiSemic1 = nodi(curveSemic1);
var supSemic1 = NUBS(S1)(2)(nodiSemic1)(curveSemic1);
var mappaSemic1 = MAP(supSemic1)(dominioSemic);

var curveSemic2 = [semic1,semic2,semic2,semic3,semic3,semic4];
var nodiSemic2 = nodi(curveSemic2);
var supSemic2 = NUBS(S1)(2)(nodiSemic2)(curveSemic2);
var mappaSemic2 = MAP(supSemic2)(dominioSemic);

var sogliaSemic = SIMPLEX_GRID([[1.8],[-15.9,0.5],[-4.5,0.3]]);
var colonninaSemic = SIMPLEX_GRID([[-0.5,0.3],[-15.9,0.5],[-4.8,1.5]]);

var finestreSemic = STRUCT([sogliaSemic,colonninaSemic,mappaSemic1,mappaSemic2]);
DRAW(finestreSemic);


var col1 = SIMPLEX_GRID([[-1,1,-2,1.8],[-0.3,0.7],[6.2]]);
var col2 = SIMPLEX_GRID([[1,-1,2],[-0.3,0.7],[-4,2.2]]);

var semic5 = semicerchio(1,0.3,3);
var semic6 = semicerchio(1,1,3);
var segmento3 = segmento(1,0.3,4);
var segmento4 = segmento(1,1,4);

var dominioCol = DOMAIN([[0,1],[0,1]])([20,20]);
var curveCol3 = [segmento3,semic5,semic5,semic6,semic6,segmento4];
var nodiCol3 = nodi(curveCol3);
var supCol3 = NUBS(S1)(2)(nodiCol3)(curveCol3);
var col3 = MAP(supCol3)(dominioCol);

var dominioMattoni = DOMAIN([[0,1],[0,1]])([20,20]);
var hma = 2.6/9; //altezza mattone A
var rettangoloA1 = [[0,0.3,0],[0,0.3,hma],[0,0.3,hma],[1,0.3,hma],[1,0.3,hma],[1,0.3,0],[1,0.3,0],[0,0.3,0]];
var rettangoloA2 = [[0,0.25,0],[0,0.25,hma],[0,0.25,hma],[1,0.25,hma],[1,0.25,hma],[1,0.25,0],[1,0.25,0],[0,0.25,0]];
var rettangoloA3 = [[0.03,0.22,0.03],[0.03,0.22,hma-0.03],[0.03,0.22,hma-0.03],[0.97,0.22,hma-0.03],[0.97,0.22,hma-0.03],[0.97,0.22,0.03],[0.97,0.22,0.03],[0.03,0.22,0.03]];
var rettangoloA4 = [[0.05,0.2,0.05],[0.05,0.2,hma-0.05],[0.05,0.2,hma-0.05],[0.95,0.2,hma-0.05],[0.95,0.2,hma-0.05],[0.95,0.2,0.05],[0.95,0.2,0.05],[0.05,0.2,0.05]];

var nodiMatA1 = nodi(rettangoloA1);
var profiloMatA1 = NUBS(S0)(2)(nodiMatA1)(rettangoloA1);
var nodiMatA2 = nodi(rettangoloA2);
var profiloMatA2 = NUBS(S0)(2)(nodiMatA2)(rettangoloA2);
var nodiMatA3 = nodi(rettangoloA3);
var profiloMatA3 = NUBS(S0)(2)(nodiMatA3)(rettangoloA3);
var nodiMatA4 = nodi(rettangoloA4);
var profiloMatA4 = NUBS(S0)(2)(nodiMatA4)(rettangoloA4);

var curveMatA = [profiloMatA1,profiloMatA2,profiloMatA3,profiloMatA4,[0.5,0.2,hma/2]];
var nodiMatA = nodi(curveMatA);
var profiloMatA = NUBS(S1)(2)(nodiMatA)(curveMatA);
var mattoneA = MAP(profiloMatA)(dominioMattoni);

var rettangoloB1 = [[0.2,0.3,0],[0.2,0.3,hma],[0.2,0.3,hma],[0.8,0.3,hma],[0.8,0.3,hma],[0.8,0.3,0],[0.8,0.3,0],[0.2,0.3,0]];
var rettangoloB2 = [[0.2,0.2,0],[0.2,0.2,hma],[0.2,0.2,hma],[0.8,0.2,hma],[0.8,0.2,hma],[0.8,0.2,0],[0.8,0.2,0],[0.2,0.2,0]];
var rettangoloB3 = [[0.23,0.16,0.03],[0.23,0.16,hma-0.03],[0.23,0.16,hma-0.03],[0.77,0.16,hma-0.03],[0.77,0.16,hma-0.03],[0.77,0.16,0.03],[0.77,0.16,0.03],[0.23,0.16,0.03]];
var rettangoloB4 = [[0.25,0.14,0.05],[0.25,0.14,hma-0.05],[0.25,0.14,hma-0.05],[0.75,0.14,hma-0.05],[0.75,0.14,hma-0.05],[0.75,0.14,0.05],[0.75,0.14,0.05],[0.25,0.14,0.05]];

var nodiMatB1 = nodi(rettangoloB1);
var profiloMatB1 = NUBS(S0)(2)(nodiMatB1)(rettangoloB1);
var nodiMatB2 = nodi(rettangoloB2);
var profiloMatB2 = NUBS(S0)(2)(nodiMatB2)(rettangoloB2);
var nodiMatB3 = nodi(rettangoloB3);
var profiloMatB3 = NUBS(S0)(2)(nodiMatB3)(rettangoloB3);
var nodiMatB4 = nodi(rettangoloB4);
var profiloMatB4 = NUBS(S0)(2)(nodiMatB4)(rettangoloB4);

var curveMatB = [profiloMatB1,profiloMatB2,profiloMatB3,profiloMatB4,[0.5,0.14,hma/2]];
var nodiMatB = nodi(curveMatB);
var profiloMatB = NUBS(S1)(2)(nodiMatB)(curveMatB);
var mattoneB = MAP(profiloMatB)(dominioMattoni);

var rettangoloC1 = [[0,0.3,0],[0,0.3,hma],[0,0.3,hma],[0.7,0.3,hma],[0.7,0.3,hma],[0.7,0.3,0],[0.7,0.3,0],[0,0.3,0]];
var rettangoloC2 = [[0,0.2,0],[0,0.2,hma],[0,0.2,hma],[0.7,0.2,hma],[0.7,0.2,hma],[0.7,0.2,0],[0.7,0.2,0],[0,0.2,0]];
var rettangoloC3 = [[0.03,0.16,0.03],[0.03,0.16,hma-0.03],[0.03,0.16,hma-0.03],[0.67,0.16,hma-0.03],[0.67,0.16,hma-0.03],[0.67,0.16,0.03],[0.67,0.16,0.03],[0.03,0.16,0.03]];
var rettangoloC4 = [[0.05,0.14,0.05],[0.05,0.14,hma-0.05],[0.05,0.14,hma-0.05],[0.65,0.14,hma-0.05],[0.65,0.14,hma-0.05],[0.65,0.14,0.05],[0.65,0.14,0.05],[0.05,0.14,0.05]];

var nodiMatC1 = nodi(rettangoloC1);
var profiloMatC1 = NUBS(S0)(2)(nodiMatC1)(rettangoloC1);
var nodiMatC2 = nodi(rettangoloC2);
var profiloMatC2 = NUBS(S0)(2)(nodiMatC2)(rettangoloC2);
var nodiMatC3 = nodi(rettangoloC3);
var profiloMatC3 = NUBS(S0)(2)(nodiMatC3)(rettangoloC3);
var nodiMatC4 = nodi(rettangoloC4);
var profiloMatC4 = NUBS(S0)(2)(nodiMatC4)(rettangoloC4);

var curveMatC = [profiloMatC1,profiloMatC2,profiloMatC3,profiloMatC4,[0.5,0.14,hma/2]];
var nodiMatC = nodi(curveMatC);
var profiloMatC = NUBS(S1)(2)(nodiMatC)(curveMatC);
var mattoneC = MAP(profiloMatC)(dominioMattoni);

var hmd = 0.3;
var rettangoloD1 = [[0.2,0.3,0],[0.2,0.3,hmd],[0.2,0.3,hmd],[0.8,0.3,hmd],[0.8,0.3,hmd],[0.8,0.3,0],[0.8,0.3,0],[0.2,0.3,0]];
var rettangoloD2 = [[0.2,0.2,0],[0.2,0.2,hmd],[0.2,0.2,hmd],[0.8,0.2,hmd],[0.8,0.2,hmd],[0.8,0.2,0],[0.8,0.2,0],[0.2,0.2,0]];
var rettangoloD3 = [[0.23,0.16,0.03],[0.23,0.16,hmd-0.03],[0.23,0.16,hmd-0.03],[0.77,0.16,hmd-0.03],[0.77,0.16,hmd-0.03],[0.77,0.16,0.03],[0.77,0.16,0.03],[0.23,0.16,0.03]];
var rettangoloD4 = [[0.25,0.14,0.05],[0.25,0.14,hmd-0.05],[0.25,0.14,hmd-0.05],[0.75,0.14,hmd-0.05],[0.75,0.14,hmd-0.05],[0.75,0.14,0.05],[0.75,0.14,0.05],[0.25,0.14,0.05]];

var nodiMatD1 = nodi(rettangoloD1);
var profiloMatD1 = NUBS(S0)(2)(nodiMatD1)(rettangoloD1);
var nodiMatD2 = nodi(rettangoloD2);
var profiloMatD2 = NUBS(S0)(2)(nodiMatD2)(rettangoloD2);
var nodiMatD3 = nodi(rettangoloD3);
var profiloMatD3 = NUBS(S0)(2)(nodiMatD3)(rettangoloD3);
var nodiMatD4 = nodi(rettangoloD4);
var profiloMatD4 = NUBS(S0)(2)(nodiMatD4)(rettangoloD4);

var curveMatD = [profiloMatD1,profiloMatD2,profiloMatD3,profiloMatD4,[0.5,0.14,hmd/2]];
var nodiMatD = nodi(curveMatD);
var profiloMatD = NUBS(S1)(2)(nodiMatD)(curveMatD);
var mattoneD = MAP(profiloMatD)(dominioMattoni);

var rettangoloE1 = [[0,0.3,0],[0,0.3,hmd],[0,0.3,hmd],[0.7,0.3,hmd],[0.7,0.3,hmd],[0.7,0.3,0],[0.7,0.3,0],[0,0.3,0]];
var rettangoloE2 = [[0,0.2,0],[0,0.2,hmd],[0,0.2,hmd],[0.7,0.2,hmd],[0.7,0.2,hmd],[0.7,0.2,0],[0.7,0.2,0],[0,0.2,0]];
var rettangoloE3 = [[0.03,0.16,0.03],[0.03,0.16,hmd-0.03],[0.03,0.16,hmd-0.03],[0.67,0.16,hmd-0.03],[0.67,0.16,hmd-0.03],[0.67,0.16,0.03],[0.67,0.16,0.03],[0.03,0.16,0.03]];
var rettangoloE4 = [[0.05,0.14,0.05],[0.05,0.14,hmd-0.05],[0.05,0.14,hmd-0.05],[0.65,0.14,hmd-0.05],[0.65,0.14,hmd-0.05],[0.65,0.14,0.05],[0.65,0.14,0.05],[0.05,0.14,0.05]];

var nodiMatE1 = nodi(rettangoloE1);
var profiloMatE1 = NUBS(S0)(2)(nodiMatE1)(rettangoloE1);
var nodiMatE2 = nodi(rettangoloE2);
var profiloMatE2 = NUBS(S0)(2)(nodiMatE2)(rettangoloE2);
var nodiMatE3 = nodi(rettangoloE3);
var profiloMatE3 = NUBS(S0)(2)(nodiMatE3)(rettangoloE3);
var nodiMatE4 = nodi(rettangoloE4);
var profiloMatE4 = NUBS(S0)(2)(nodiMatE4)(rettangoloE4);

var curveMatE = [profiloMatE1,profiloMatE2,profiloMatE3,profiloMatE4,[0.5,0.14,hmd/2]];
var nodiMatE = nodi(curveMatE);
var profiloMatE = NUBS(S1)(2)(nodiMatE)(curveMatE);
var mattoneE = MAP(profiloMatE)(dominioMattoni);

var col4 = STRUCT([T([0,2])([1,0.2]),mattoneA,T([2])([hma]),mattoneA,T([2])([hma]),mattoneA,T([2])([hma]),mattoneA,T([2])([hma]),mattoneA,T([2])([hma]),
                    mattoneA,T([2])([hma]),mattoneA,T([2])([hma]),mattoneA,T([2])([hma]),mattoneA]);
var col5 = STRUCT([T([0,2])([1,0.2]),mattoneB,T([2])([hma]),mattoneB,T([2])([hma]),mattoneB,T([2])([hma]),mattoneB,T([2])([hma]),mattoneB,T([2])([hma]),
                    mattoneB,T([2])([hma]),mattoneB,T([2])([hma]),mattoneB,T([2])([hma]),mattoneB]);
var col6 = STRUCT([T([2])([0.2]),mattoneC,T([2])([hma]),mattoneC,T([2])([hma]),mattoneC,T([2])([hma]),mattoneC,T([2])([hma]),mattoneC,T([2])([hma]),
                    mattoneC,T([2])([hma]),mattoneC,T([2])([hma]),mattoneC,T([2])([hma]),mattoneC]);
var col7 = STRUCT([T([0,2])([1,3]),mattoneD,T([2])([hmd]),mattoneD,T([2])([hmd]),mattoneD,T([2])([hmd]),mattoneD]);
var col8 = STRUCT([T([2])([3]),mattoneE,T([2])([hmd]),mattoneE,T([2])([hmd]),mattoneE,T([2])([hmd]),mattoneE]);

var col9 = SIMPLEX_GRID([[-0.9,0.1,-1,0.1,-1.8,0.1],[-0.3,0.7],[-2.8,0.2]]);

var colonnato = STRUCT([col1,col2,col3,T([0])([3])(col3),T([0])([3])(S([0])([-1])(col3)),col4,col5,T([0])([3])(col4),T([0])([4.2])(col6),T([0])([4.9])(col6),col7,
                        T([0])([4.2])(col8),T([0])([4.9])(col8),col9,T([0,2])([4.2,2.8])(S([2])([2/3])(mattoneE)),T([0,2])([4.9,2.8])(S([2])([2/3])(mattoneE)),
                        T([0,2])([1.2,2.8])(S([0,2])([6/7,2/3])(mattoneE))]);
DRAW(colonnato);