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

var muriEsterni = STRUCT([torre,lato,retro,finestreSemic]);
DRAW(muriEsterni);

//colonnato con arcate
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

//mattone A (largo 1m e spesso 20cm)
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

//mattone B (largo 60cm e spesso 30cm)
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

//mattone C (largo 70cm e spesso 30cm)
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

//mattone D (come mattone B ma alto 30cm)
var hmd = 0.3;
var rettangoloM1 = [[0.2,0.3,0],[0.2,0.3,hmd],[0.2,0.3,hmd],[0.8,0.3,hmd],[0.8,0.3,hmd],[0.8,0.3,0],[0.8,0.3,0],[0.2,0.3,0]];
var rettangoloD2 = [[0.2,0.2,0],[0.2,0.2,hmd],[0.2,0.2,hmd],[0.8,0.2,hmd],[0.8,0.2,hmd],[0.8,0.2,0],[0.8,0.2,0],[0.2,0.2,0]];
var rettangoloD3 = [[0.23,0.16,0.03],[0.23,0.16,hmd-0.03],[0.23,0.16,hmd-0.03],[0.77,0.16,hmd-0.03],[0.77,0.16,hmd-0.03],[0.77,0.16,0.03],[0.77,0.16,0.03],[0.23,0.16,0.03]];
var rettangoloD4 = [[0.25,0.14,0.05],[0.25,0.14,hmd-0.05],[0.25,0.14,hmd-0.05],[0.75,0.14,hmd-0.05],[0.75,0.14,hmd-0.05],[0.75,0.14,0.05],[0.75,0.14,0.05],[0.25,0.14,0.05]];

var nodiMatM1 = nodi(rettangoloM1);
var profiloMatM1 = NUBS(S0)(2)(nodiMatM1)(rettangoloM1);
var nodiMatD2 = nodi(rettangoloD2);
var profiloMatD2 = NUBS(S0)(2)(nodiMatD2)(rettangoloD2);
var nodiMatD3 = nodi(rettangoloD3);
var profiloMatD3 = NUBS(S0)(2)(nodiMatD3)(rettangoloD3);
var nodiMatD4 = nodi(rettangoloD4);
var profiloMatD4 = NUBS(S0)(2)(nodiMatD4)(rettangoloD4);

var curveMatD = [profiloMatM1,profiloMatD2,profiloMatD3,profiloMatD4,[0.5,0.14,hmd/2]];
var nodiMatD = nodi(curveMatD);
var profiloMatD = NUBS(S1)(2)(nodiMatD)(curveMatD);
var mattoneD = MAP(profiloMatD)(dominioMattoni);

//mattone E (come mattone C ma alto 30cm)
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

//funzione che genera archi di circonferenza di "gradi" radianti e ruotate di "alpha" radianti
function arcocerchio (r,ty,tz,gradi,alpha) { 
  var funzione = function (p) { 
    var u = alpha + p[0] * gradi;

    return [r * SIN(u) , ty , tz + r * COS(u)];
  };

  return funzione;
};

//segmento parallelo ad asse X traslato anche lungo x
function segmentoX (tx,ty,tz,lunghezza) {
  var funzione = function (p) {
    var u = p[0] * lunghezza;

    return [tx + u,ty,tz];
  };

  return funzione;
};

//mattone F
var l2 = 2*0.9*SIN(PI/52);
var segmento5 = segmento(l2,0.3,3.9);
var segmento5b = segmento(0.2,0.3,4.5);

var linea1 = [[0,0.2,4.5],[0.15,0.2,4.5],[0.2,0.25,4.5],[0.2,0.3,4.5]];
var nodiLinea1 = nodi(linea1);
var profiloLinea1 = NUBS(S0)(2)(nodiLinea1)(linea1);

var linea2 = [[0,0.2,3.9],[l2-0.03,0.2,3.9],[l2,0.25,3.9],[l2,0.3,3.9]];
var nodiLinea2 = nodi(linea2);
var profiloLinea2 = NUBS(S0)(2)(nodiLinea2)(linea2);

var curveMatF = [segmento5,profiloLinea2,profiloLinea1,segmento5b];
var nodiMatF = nodi(curveMatF);
var supMatF = NUBS(S1)(2)(nodiMatF)(curveMatF);
var mattoneF = MAP(supMatF)(dominioMattoni);

//chiave
var col20 = SIMPLEX_GRID([[l2],[-0.3,0.7],[-3.9,0.1]]);

//mattone G
var semic8 = arcocerchio(1,0.3,3,PI/13,PI/26);
var segmento6 = segmentoX(0.2,0.3,4.5,0.4);

var linea3 = [[0.2,0.3,4.5],[0.2,0.25,4.5],[0.25,0.2,4.5],[0.55,0.2,4.5],[0.6,0.25,4.5],[0.6,0.3,4.5]];
var nodiLinea3 = nodi(linea3);
var profiloLinea3 = NUBS(S0)(2)(nodiLinea3)(linea3);

var l3 = COS((PI/2)-(PI/26));
var l4 = COS((PI/2)-(PI/26)-(PI/13));
var h4 = 3+SIN((PI/2)-(PI/26)-(PI/13));
var linea4 = [[l3,0.3,4],[l3,0.25,4],[l3+0.03,0.2,4],[l4-0.03,0.2,h4],[l4,0.25,h4],[l4,0.3,h4]];
var nodiLinea4 = nodi(linea4);
var profiloLinea4 = NUBS(S0)(2)(nodiLinea4)(linea4);

var curveMatG = [semic8,profiloLinea4,profiloLinea3,segmento6];
var nodiMatG = nodi(curveMatG);
var supMatG = NUBS(S1)(2)(nodiMatG)(curveMatG);
var mattoneG = MAP(supMatG)(dominioMattoni);

//mattone H
var semic9 = arcocerchio(1,0.3,3,PI/13,PI/13+PI/26);

var linea5 = [[0.6,0.3,4.5],[0.6,0.25,4.5],[0.65,0.2,4.5],[0.75,0.2,4.5],[0.8,0.2,4.5],[0.8,0.2,4.45],[0.8,0.2,4.25],[0.8,0.25,4.2],[0.8,0.3,4.2]];
var nodiLinea5 = nodi(linea5);
var profiloLinea5 = NUBS(S0)(2)(nodiLinea5)(linea5);
var linea5b = [[0.6,0.3,4.5],[0.8,0.3,4.5],[0.8,0.3,4.5],[0.8,0.3,4.2]];
var nodiLinea5b = nodi(linea5b);
var profiloLinea5b = NUBS(S0)(2)(nodiLinea5b)(linea5b);

var l5 = COS((PI/2)-(PI/26)-(PI/13));
var l6 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13));
var h5 = 3+SIN((PI/2)-(PI/26)-(PI/13));
var h6 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13));
var linea6 = [[l5,0.3,h5],[l5,0.25,h5],[l5+0.03,0.2,h5],[l6-0.03,0.2,h6],[l6,0.25,h6],[l6,0.3,h6]];
var nodiLinea6 = nodi(linea6);
var profiloLinea6 = NUBS(S0)(2)(nodiLinea6)(linea6);

var curveMatH = [semic9,profiloLinea6,profiloLinea5,profiloLinea5b];
var nodiMatH = nodi(curveMatH);
var supMatH = NUBS(S1)(2)(nodiMatH)(curveMatH);
var mattoneH = MAP(supMatH)(dominioMattoni);

//mattone I
var semic10 = arcocerchio(1,0.3,3,PI/13,PI/13+PI/13+PI/26);

var linea7 = [[0.8,0.3,4.2],[0.8,0.25,4.2],[0.85,0.2,4.2],[1.05,0.2,4.2],[1.1,0.2,4.2],[1.1,0.2,4.15],[1.1,0.2,3.95],[1.1,0.25,3.9],[1.1,0.3,3.9]];
var nodiLinea7 = nodi(linea7);
var profiloLinea7 = NUBS(S0)(2)(nodiLinea7)(linea7);
var linea7b = [[0.8,0.3,4.2],[1.1,0.3,4.2],[1.1,0.3,4.2],[1.1,0.3,3.9]];
var nodiLinea7b = nodi(linea7b);
var profiloLinea7b = NUBS(S0)(2)(nodiLinea7b)(linea7b);

var l7 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13));
var l8 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13));
var h7 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13));
var h8 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13));
var linea8 = [[l7,0.3,h7],[l7,0.25,h7],[l7+0.03,0.2,h7],[l8-0.02,0.2,h8],[l8,0.25,h8],[l8,0.3,h8]];
var nodiLinea8 = nodi(linea8);
var profiloLinea8 = NUBS(S0)(2)(nodiLinea8)(linea8);

var curveMatI = [semic10,profiloLinea8,profiloLinea7,profiloLinea7b];
var nodiMatI = nodi(curveMatI);
var supMatI = NUBS(S1)(2)(nodiMatI)(curveMatI);
var mattoneI = MAP(supMatI)(dominioMattoni);

//mattone J
var semic11 = arcocerchio(1,0.3,3,PI/13,PI/13+PI/13+PI/13+PI/26);

var linea9 = [[1.1,0.3,3.9],[1.1,0.25,3.9],[1.13,0.2,3.9],[1.17,0.2,3.9],[1.2,0.2,3.9],[1.2,0.2,3.85],[1.2,0.2,3.55],[1.2,0.25,3.6],[1.2,0.3,3.6]];
var nodiLinea9 = nodi(linea9);
var profiloLinea9 = NUBS(S0)(2)(nodiLinea9)(linea9);
var linea9b = [[1.1,0.3,3.9],[1.2,0.3,3.9],[1.2,0.3,3.9],[1.2,0.3,3.6]];
var nodiLinea9b = nodi(linea9b);
var profiloLinea9b = NUBS(S0)(2)(nodiLinea9b)(linea9b);

var l9 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13));
var l10 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var h9 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13));
var h10 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var linea10 = [[l9,0.3,h9],[l9,0.25,h9],[l9+0.02,0.2,h9],[l10,0.2,h10+0.02],[l10,0.25,h10],[l10,0.3,h10]];
var nodiLinea10 = nodi(linea10);
var profiloLinea10 = NUBS(S0)(2)(nodiLinea10)(linea10);

var curveMatJ = [semic11,profiloLinea10,profiloLinea9,profiloLinea9b];
var nodiMatJ = nodi(curveMatJ);
var supMatJ = NUBS(S1)(2)(nodiMatJ)(curveMatJ);
var mattoneJ = MAP(supMatJ)(dominioMattoni);

//mattone K
var semic12 = arcocerchio(1,0.3,3,PI/13,PI/13+PI/13+PI/13+PI/13+PI/26);

var linea11 = [[1.2,0.2,3.6],[1.2,0.25,3.6],[1.2,0.2,3.55],[1.2,0.2,3.35],[1.2,0.25,3.3],[1.2,0.3,3.3]];
var nodiLinea11 = nodi(linea11);
var profiloLinea11 = NUBS(S0)(2)(nodiLinea11)(linea11);
var linea11b = [[1.2,0.2,3.6],[1.2,0.2,3.6],[1.2,0.3,3.3],[1.2,0.3,3.3]];
var nodiLinea11b = nodi(linea11b);
var profiloLinea11b = NUBS(S0)(2)(nodiLinea11b)(linea11b);

var l11 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var l12 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var h11 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var h12 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var linea12 = [[l11,0.3,h11],[l11,0.25,h11],[l11+0.02,0.2,h11],[l12,0.2,h12+0.02],[l12,0.25,h12],[l12,0.3,h12]];
var nodiLinea12 = nodi(linea12);
var profiloLinea12 = NUBS(S0)(2)(nodiLinea12)(linea12);

var curveMatK = [semic12,profiloLinea12,profiloLinea11,profiloLinea11b];
var nodiMatK = nodi(curveMatK);
var supMatK = NUBS(S1)(2)(nodiMatK)(curveMatK);
var mattoneK = MAP(supMatK)(dominioMattoni);

//mattone L
var semic13 = arcocerchio(1,0.3,3,PI/13,PI/13+PI/13+PI/13+PI/13+PI/13+PI/26);

var linea13 = [[1.2,0.2,3.3],[1.2,0.25,3.3],[1.2,0.2,3.25],[1.2,0.2,3.05],[1.2,0.25,3],[1.2,0.3,3]];
var nodiLinea13 = nodi(linea13);
var profiloLinea13 = NUBS(S0)(2)(nodiLinea13)(linea13);
var linea13b = [[1.2,0.2,3.3],[1.2,0.2,3.3],[1.2,0.3,3],[1.2,0.3,3]];
var nodiLinea13b = nodi(linea13b);
var profiloLinea13b = NUBS(S0)(2)(nodiLinea13b)(linea13b);

var l13 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var l14 = COS((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var h13 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var h14 = 3+SIN((PI/2)-(PI/26)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13)-(PI/13));
var linea14 = [[l13,0.3,h13],[l13,0.25,h13],[l13+0.02,0.2,h13],[l14,0.2,h14+0.02],[l14,0.25,h14],[l14,0.3,h14]];
var nodiLinea14 = nodi(linea14);
var profiloLinea14 = NUBS(S0)(2)(nodiLinea14)(linea14);

var curveMatL = [semic13,profiloLinea14,profiloLinea13,profiloLinea13b];
var nodiMatL = nodi(curveMatL);
var supMatL = NUBS(S1)(2)(nodiMatL)(curveMatL);
var mattoneL = MAP(supMatL)(dominioMattoni);

var arcata = STRUCT([mattoneF,col20,mattoneG,mattoneH,mattoneI,mattoneJ,mattoneK,mattoneL])

//mattone M (largo 80cm, spesso 20cm, alto 30cm)
var hmd = 0.3;
var rettangoloM1 = [[0,0.3,0],[0,0.3,hmd],[0,0.3,hmd],[0.8,0.3,hmd],[0.8,0.3,hmd],[0.8,0.3,0],[0.8,0.3,0],[0,0.3,0]];
var rettangoloM2 = [[0,0.25,0],[0,0.25,hmd],[0,0.25,hmd],[0.8,0.25,hmd],[0.8,0.25,hmd],[0.8,0.25,0],[0.8,0.25,0],[0,0.25,0]];
var rettangoloM3 = [[0.03,0.22,0.03],[0.03,0.22,hmd-0.03],[0.03,0.22,hmd-0.03],[0.77,0.22,hmd-0.03],[0.77,0.22,hmd-0.03],[0.77,0.22,0.03],[0.77,0.22,0.03],[0.03,0.22,0.03]];
var rettangoloM4 = [[0.05,0.2,0.05],[0.05,0.2,hmd-0.05],[0.05,0.2,hmd-0.05],[0.75,0.2,hmd-0.05],[0.75,0.2,hmd-0.05],[0.75,0.2,0.05],[0.75,0.2,0.05],[0.05,0.2,0.05]];

var nodiMatM1 = nodi(rettangoloM1);
var profiloMatM1 = NUBS(S0)(2)(nodiMatM1)(rettangoloM1);
var nodiMatM2 = nodi(rettangoloM2);
var profiloMatM2 = NUBS(S0)(2)(nodiMatM2)(rettangoloM2);
var nodiMatM3 = nodi(rettangoloM3);
var profiloMatM3 = NUBS(S0)(2)(nodiMatM3)(rettangoloM3);
var nodiMatM4 = nodi(rettangoloM4);
var profiloMatM4 = NUBS(S0)(2)(nodiMatM4)(rettangoloM4);

var curveMatM = [profiloMatM1,profiloMatM2,profiloMatM3,profiloMatM4,[0.4,0.2,hmd/2]];
var nodiMatM = nodi(curveMatM);
var profiloMatM = NUBS(S1)(2)(nodiMatM)(curveMatM);
var mattoneM = MAP(profiloMatM)(dominioMattoni);

var colonnato = STRUCT([col1,col2,col3,T([0])([3])(col3),T([0])([3])(S([0])([-1])(col3)),col4,col5,T([0])([3])(col4),T([0])([4.2])(col6),T([0])([4.9])(col6),col7,
                        T([0])([4.2])(col8),T([0])([4.9])(col8),col9,T([0,2])([4.2,2.8])(S([2])([2/3])(mattoneE)),T([0,2])([4.9,2.8])(S([2])([2/3])(mattoneE)),
                        T([0,2])([1.2,2.8])(S([0,2])([6/7,2/3])(mattoneE)),arcata,T([0])([3])(arcata),T([0])([3])(S([0])([-1])(arcata)),T([0,2])([1.1,3.9])(mattoneM),
                        T([0,2])([4.1,3.9])(mattoneM),T([0,2])([0.8,4.2])(S([0])([35/80])(mattoneM)),T([0,2])([1.85,4.2])(S([0])([35/80])(mattoneM)),T([0,2])([3.8,4.2])(S([0])([35/80])(mattoneM))]);
DRAW(colonnato);