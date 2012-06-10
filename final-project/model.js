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

//scalini semicircolari
var hS = 0.14; //altezza scalini
var lS = 0.24; //larghezza scalini
var dominioScalini = DOMAIN([[0,1],[3*PI/2,2*PI]])([30,20]); //primo per l'altezza, secondo per circonferenza
var puntiScalini = [[0,0,0],[1,0,0],[1,0,0],[1,0,-hS],[1,0,-hS],[1+lS,0,-hS],[1+lS,0,-hS],[1+lS,0,-2*hS],[1+lS,0,-2*hS],[1+2*lS,0,-2*hS],[1+2*lS,0,-2*hS],
                    [1+2*lS,0,-3*hS],[1+2*lS,0,-3*hS],[1+3*lS,0,-3*hS],[1+3*lS,0,-3*hS],[1+3*lS,0,-4*hS],[1+3*lS,0,-4*hS],[1+4*lS,0,-4*hS],[1+4*lS,0,-4*hS],
                    [1+4*lS,0,-5*hS],[1+4*lS,0,-5*hS],[1+5*lS,0,-5*hS],[1+5*lS,0,-5*hS],[1+5*lS,0,-6*hS]];
var nodiScalini = nodi(puntiScalini);
var profiloScalini = NUBS(S0)(2)(nodiScalini)(puntiScalini);
var mappaScalini = ROTATIONAL_SURFACE(profiloScalini);
var scalini = MAP(mappaScalini)(dominioScalini);
DRAW(scalini);

//scalinata posteriore
var hS2 = 1.4/12 //altezza scalini
var lS2 = 0.284; //larghezza scalini
var scalinata = [];
for (var i = 0; i < 12; i++) {
  scalinata[i] = SIMPLEX_GRID([[2.2],[-(18+(lS2*i)),lS2],[-(hS2*(11-i)),hS2]]);
};
var scalino1 = SIMPLEX_GRID([[2.2],[-16.6,1.4],[-1.4,hS]]);

var dominioScale = DOMAIN([[0,1],[0,1]])([20,20]);
var bordoScale1 = [[2.4,21.8,0],[2.4,21.8,hS2+0.02],[2.4,21.8,hS2+0.02],[2.43,21.8,hS2+0.02],[2.43,21.8,hS2+0.02],[2.43,21.8,hS2+0.05],[2.43,21.8,hS2+0.05],
                  [2.17,21.8,hS2+0.05],[2.17,21.8,hS2+0.05],[2.17,21.8,hS2+0.02],[2.17,21.8,hS2+0.02],[2.2,21.8,hS2+0.02],[2.2,21.8,hS2+0.02],[2.2,21.8,0],[2.2,21.8,0],[2.4,21.8,0]];
var bordoScale2 = [[2.4,21.4,0],[2.4,21.4,hS2+0.02],[2.4,21.4,hS2+0.02],[2.43,21.4,hS2+0.02],[2.43,21.4,hS2+0.02],[2.43,21.4,hS2+0.05],[2.43,21.4,hS2+0.05],
                  [2.17,21.4,hS2+0.05],[2.17,21.4,hS2+0.05],[2.17,21.4,hS2+0.02],[2.17,21.4,hS2+0.02],[2.2,21.4,hS2+0.02],[2.2,21.4,hS2+0.02],[2.2,21.4,0],[2.2,21.4,0],[2.4,21.4,0]];
var bordoScale3 = [[2.4,18,0],[2.4,18,hS+1.4+0.02],[2.4,18,hS+1.4+0.02],[2.43,18,hS+1.4+0.02],[2.43,18,hS+1.4+0.02],[2.43,18,hS+1.4+0.05],[2.43,18,hS+1.4+0.05],
                  [2.17,18,hS+1.4+0.05],[2.17,18,hS+1.4+0.05],[2.17,18,hS+1.4+0.02],[2.17,18,hS+1.4+0.02],[2.2,18,hS+1.4+0.02],[2.2,18,hS+1.4+0.02],[2.2,18,0],[2.2,18,0],[2.4,18,0]];
var bordoScale4 = [[2.4,16.4,0],[2.4,16.4,hS+1.4+0.02],[2.4,16.4,hS+1.4+0.02],[2.43,16.4,hS+1.4+0.02],[2.43,16.4,hS+1.4+0.02],[2.43,16.4,hS+1.4+0.05],[2.43,16.4,hS+1.4+0.05],
                  [2.17,16.4,hS+1.4+0.05],[2.17,16.4,hS+1.4+0.05],[2.17,16.4,hS+1.4+0.02],[2.17,16.4,hS+1.4+0.02],[2.2,16.4,hS+1.4+0.02],[2.2,16.4,hS+1.4+0.02],[2.2,16.4,0],[2.2,16.4,0],[2.4,16.4,0]];
var nodiBordoScale1 = nodi(bordoScale1);
var profiloBordoScale1 = NUBS(S0)(2)(nodiBordoScale1)(bordoScale1);
var nodiBordoScale2 = nodi(bordoScale2);
var profiloBordoScale2 = NUBS(S0)(2)(nodiBordoScale2)(bordoScale2);
var nodiBordoScale3 = nodi(bordoScale3);
var profiloBordoScale3 = NUBS(S0)(2)(nodiBordoScale3)(bordoScale3);
var nodiBordoScale4 = nodi(bordoScale4);
var profiloBordoScale4 = NUBS(S0)(2)(nodiBordoScale4)(bordoScale4);

var profiliBordoScale = [[2.3,21.8,hS2+0.05],profiloBordoScale1,profiloBordoScale1,profiloBordoScale2,profiloBordoScale2,profiloBordoScale3,profiloBordoScale3,profiloBordoScale4];
var nodiBordoScale = nodi(profiliBordoScale);
var bordoScale = NUBS(S1)(2)(nodiBordoScale)(profiliBordoScale);
var mappaBordoScale = MAP(bordoScale)(dominioScale);

var scalini2 = STRUCT([T([2])([-(hS+1.4)]),STRUCT(scalinata),scalino1,mappaBordoScale]);
DRAW(scalini2);

//base di 22x16.6 metri
var base = T([2])([-hS])(SIMPLEX_GRID([[11],[16.6],[hS]])); //base alta come uno scalino
DRAW(base);

//muri esterni
var torreA = SIMPLEX_GRID([[-5.8,2],[-0.2,0.5],[1.4,-hS,8.4]]);
var torreB = SIMPLEX_GRID([[-7.8,1],[-0.2,0.5],[0.2,-1,0.2,-hS,0.8,-2,2.9,-2,0.7]]);
var torreC = SIMPLEX_GRID([[-8.8,2],[-0.2,0.5],[1.4,-hS,8.4]]);
var torre = STRUCT([torreA,torreB,torreC]);

var latoA = SIMPLEX_GRID([[-10.3,0.5],[-0.7,1.5],[1.4,-hS,8.4]]);
var latoB = SIMPLEX_GRID([[-10.3,0.5],[-2.2,1],[0.2,-1,0.2,-hS,0.8,-2,2.9,-2,0.7]]);
var latoC = SIMPLEX_GRID([[-10.3,0.5],[-3.2,2],[1.4,-hS,8.4]]);
var latoD = SIMPLEX_GRID([[-10.3,0.5],[-5.2,0.7],[1.4,-hS,7.4]]);
var latoE = SIMPLEX_GRID([[-10.3,0.5],[-5.9,1],[0.2,-1,0.2,-hS,0.8,-2,2.5,-0.9,1.2]]);
var latoF = SIMPLEX_GRID([[-10.3,0.5],[-6.9,2.8],[1.4,-hS,7.4]]);
var latoG = SIMPLEX_GRID([[-10.3,0.5],[-9.7,1],[0.2,-1,0.2,-hS,0.8,-2,2.5,-0.9,1.2]]);
var latoH = SIMPLEX_GRID([[-10.3,0.5],[-10.7,2.7],[1.4,-hS,7.4]]);
var latoI = SIMPLEX_GRID([[-10.3,0.5],[-13.4,1],[0.2,-1,0.2,-hS,0.8,-2,2.5,-0.9,1.2]]);
var latoJ = SIMPLEX_GRID([[-10.3,0.5],[-14.4,1.5],[1.4,-hS,7.4]]);
var lato = STRUCT([latoA,latoB,latoC,latoD,latoE,latoF,latoG,latoH,latoI,latoJ]);

var retroA = SIMPLEX_GRID([[-8.8,2],[-15.9,0.5],[1.4,-hS,7.4]]);
var retroB = SIMPLEX_GRID([[-7.8,1],[-15.9,0.5],[-1.2,0.2,-hS,0.8,-2,2.5,-0.9,1.2]]);
var retroC = SIMPLEX_GRID([[-5.2,2.6],[-15.9,0.5],[1.4,-hS,7.4]]);
var retroD = SIMPLEX_GRID([[-4.2,1],[-15.9,0.5],[0.2,-1,0.2,-hS,0.8,-2,2.5,-0.9,1.2]]);
var retroE = SIMPLEX_GRID([[-2.1,2.1],[-15.9,0.5],[1.4,-hS,7.4]]);
var retroF = SIMPLEX_GRID([[-2,0.1],[-15.9,0.5],[1.4,-hS,4.5]]);
var retroG = SIMPLEX_GRID([[-1,1],[-15.9,0.5],[1.4,-hS,0.8,-2,1.7]]);
var retroH = SIMPLEX_GRID([[-0.5,0.5],[-15.9,0.5],[1.4,-hS,4.5]]);
var retroI = SIMPLEX_GRID([[0.5],[-15.9,0.5],[1.4,-hS,-2,2.5]]);
var retroJ = SIMPLEX_GRID([[2.1],[-15.9,0.5],[1.4,-hS,-6.6,0.8]]);
var retro = STRUCT([retroA,retroB,retroC,retroD,retroE,retroF,retroG,retroH,retroI,retroJ]);

var fronte = SIMPLEX_GRID([[5.8],[-0.2,0.5],[1.4]]);
var fronteMattone = SIMPLEX_GRID([[5.8],[0.2],[1.4]]); //da colorare color mattone

//quarto di cerchio di raggio r, traslato di ty,tz
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

//finestre semi-circolari
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

var muriEsterni = STRUCT([finestreSemic,T([2])([-(hS+1.4)]),torre,lato,retro,fronte,fronteMattone]);
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

//sezione di cilindro di raggio r, altezza h, angolo gradi (in radianti), ruotato di alpha, traslato di trasla [x,y,z] (opzionali)
function cilindro (r,h,gradi,alpha,trasla) {
  if (trasla === undefined) {
    trasla = [];
  };
  var x = trasla[0] || 0;
  var y = trasla[1] || 0;
  var z = trasla[2] || 0;

  var funzione = function (p) {
    var u = alpha + p[0] * gradi;
    var w = p[1] * h;

    return [x + r * COS(u), y + r * SIN(u), z + w];
  }

  return funzione;
};

//ingresso
var dominioCilindri = DOMAIN([[0,1],[0,1]])([20,1]);
var dominioCilindri2 = DOMAIN([[0,1],[0,1]])([40,1]);
var cil1 = cilindro(1.4,4.5,PI/2 - PI/12,-PI/2);
var cil2 = cilindro(1.4,4.5,PI/2 - PI/12,PI/12);
var mappaCil1 = MAP(cil1)(dominioCilindri);
var mappaCil2 = MAP(cil2)(dominioCilindri);

//muri ingresso
var s1 = 1.6 - COS(PI/12)*1.2;
var s2 = 1.8 - SIN(PI/12)*1.4;
var muro1 = SIMPLEX_GRID([[-(6.2-s1),s1],[-0.7,0.3+s2,-(3.6-s2-s2),s2],[6.2]]);

var s3 = 0.4;
var s4 = 1.6 - s1;
var muro2 = SIMPLEX_GRID([[-(6.2-s1-s4),s4],[-1,s3,-(3.6-s3-s3),s3],[4.5]]);

var muro3 = SIMPLEX_GRID([[-(6.2-s1),s1],[-(1+s2),3.6-s2-s2],[-2,4.2]]); //DA RIFARE CILINDRICO

var muro4 = SIMPLEX_GRID([[-5.8,0.4],[-0.7,3.9],[-6.2,2.2]]);
var muro5 = SIMPLEX_GRID([[-0.8,7,-0.8,1.7],[-4.6,0.6],[6.9]]);
var muro6 = SIMPLEX_GRID([[-5.8,2,-0.8,1.7],[-4.6,0.6],[-6.9,1.5]]);
var muro7 = SIMPLEX_GRID([[-7.8,0.8],[-4.6,0.6],[-2,2,-2.4,2]]);
var muro8 = SIMPLEX_GRID([[0.8],[-4.6,0.6],[-2.5,4.4]]);

var dominioSfera = DOMAIN([[0,1],[0,1]])([20,40]);
//spicchio di sfera di "gradi" radianti, ruotato di alpha, traslato di trasla (opzionale)
function sfera (r,gradi,alpha,trasla) {
  if (trasla === undefined) {
    trasla = [];
  };
  var tx = trasla[0] || 0;
  var ty = trasla[1] || 0;
  var tz = trasla[2] || 0;

  var funzione = function (p) {
    var a = p[0] * PI/2;
    var b = alpha + p[1] * gradi;

    return [tx + r * COS(a) * SIN(b),ty + r * COS(a) * COS(b),tz + r * SIN(a)];
  }

  return funzione;
};

var sfera1 = sfera(1.4,PI,0);
var mapSfera1 = MAP(sfera1)(dominioSfera);

var cil3 = cilindro(1.8,4.6,PI,PI/2);
var mappaCil3 = MAP(cil3)(dominioCilindri2);

var semic14 = arcocerchio(1.4,0,4.5,PI,-PI/2);
var semic15 = arcocerchio(1.8,0,4.5,PI,-PI/2);

var curveSemic3 = [semic14,semic15,semic15];
var nodiSemic3 = nodi(curveSemic3);
var supSemic3 = NUBS(S1)(2)(nodiSemic3)(curveSemic3);
var mappaSemic3 = MAP(supSemic3)(dominioSemic);

var ingresso = STRUCT([T([0,1])([4.6,2.8])(S([0])([1.2/1.4])(mappaCil1)),T([0,1])([4.6,2.8])(S([0])([1.2/1.4])(mappaCil2)),muro1,muro2,muro3,muro4,muro5,muro6,muro7,muro8,
                        T([0,1,2])([4.6,2.8,4.5])(S([0])([1.2/1.4])(mapSfera1)),T([1,2])([2.8,4.5])(R([0,2])(PI/2)(mappaCil3)),T([0,1])([4.6,2.8])(R([0,1])(PI/2)(mappaSemic3))]);
DRAW(ingresso);

//solaio
var solaio1 = SIMPLEX_GRID([[-6.2,4.1],[-0.7,10.9],[-4,0.4]]);
var solaio2 = SIMPLEX_GRID([[-2.8,7.5],[-11.6,4.3],[-4,0.4]]);
var solaio3 = SIMPLEX_GRID([[-3.6,2.2],[-8,3.2],[-4,0.4]]);

var solaio = STRUCT([solaio1,solaio2,solaio3]);
DRAW(solaio);

//muri interni
var muroI1 = SIMPLEX_GRID([[-3.6,0.4],[-6.4,2,-0.8,2],[4.5]]);
var muroI1p = SIMPLEX_GRID([[-3.6,0.4],[-6.4,-2,0.8],[-2,2.5]]);
var muroI2 = SIMPLEX_GRID([[-5.8,0.4],[-5.2,3.2,-0.8,2],[7.4]]);
var muroI2p = SIMPLEX_GRID([[-5.8,0.4],[-5.2,-3.2,0.8],[-2,2.4,-2,1]]);
var muroI3 = SIMPLEX_GRID([[-2.4,0.4],[-11.6,1.75,-0.8,1.75],[7.4]]);
var muroI3p = SIMPLEX_GRID([[-2.4,0.4],[-11.6,-1.75,0.8],[-2,5.4]]);
var muroI4 = SIMPLEX_GRID([[-2.4,1.8,-0.8,2.8,-0.8,1.7],[-11.2,0.4],[7.4]]);
var muroI4p = SIMPLEX_GRID([[-2.4,-1.8,0.8,-2.8,0.8],[-11.2,0.4],[-2,2.4,-2,1]]);
var muroI5 = SIMPLEX_GRID([[-2.4,1.6],[-5.2,1.2],[7.4]]); //pilastri
var muroI6 = SIMPLEX_GRID([[-4,1.8],[-9.2,0.4],[4]]); //divisorio

var muriInterni = STRUCT([muroI1,muroI2,muroI3,muroI4,muroI1p,muroI2p,muroI3p,muroI4p,muroI5,muroI6]);
DRAW(muriInterni);

//finestre semi-circolari interne
var semicI1 = semicerchio(2.4,0.4,4.5);
var semicI2 = semicerchio(1.8,0.4,4.5);
var semicI3 = semicerchio(1.8,0,4.5);
var semicI4 = semicerchio(2.4,0,4.5);
var segmentoI1 = segmento(2.4,0.4,7.4);
var segmentoI2 = segmento(2.4,0,7.4);

var curveSemicI1 = [semicI1,segmentoI1,segmentoI1,segmentoI2,segmentoI2,semicI4];
var nodiSemicI1 = nodi(curveSemicI1);
var supSemicI1 = NUBS(S1)(2)(nodiSemicI1)(curveSemicI1);
var mappaSemicI1 = MAP(supSemicI1)(dominioSemic);

var curveSemicI2 = [semicI1,semicI2,semicI2,semicI3,semicI3,semicI4];
var nodiSemicI2 = nodi(curveSemicI2);
var supSemicI2 = NUBS(S1)(2)(nodiSemicI2)(curveSemicI2);
var mappaSemicI2 = MAP(supSemicI2)(dominioSemic);

var sogliaSemicI = SIMPLEX_GRID([[1.8],[0.4],[-4.5,0.3]]);
var colonninaSemicI = SIMPLEX_GRID([[-0.5,0.3],[0.4],[-4.8,2.1]]);

var finestreSemicI = STRUCT([T([0,1])([4,8.8]),R([0,1])([PI/2]),sogliaSemicI,colonninaSemicI,mappaSemicI1,mappaSemicI2,S([0])([-1]),sogliaSemicI,colonninaSemicI,mappaSemicI1,mappaSemicI2]);
DRAW(finestreSemicI);

//scalette interne
var hS3 = 0.2; //altezza scalini
var lS3 = 0.2; //larghezza scalini
var scalinataI = [];
for (var i = 0; i < 10; i++) {
  scalinataI[i] = SIMPLEX_GRID([[-4,0.9],[-(6+(lS3*i)),lS3],[-(hS3*(9-i)),hS3]]);
};
var scalinataI2 = [];
for (var i = 0; i < 10; i++) {
  scalinataI2[i] = SIMPLEX_GRID([[-4.9,0.9],[-(6+(lS3*i)),lS3],[-(2.2+(hS3*i)),hS3]]);
};

var pianerottolo = SIMPLEX_GRID([[-4,1.8],[-5.2,0.8],[-1.8,0.4]])
var scaleInterne = STRUCT([pianerottolo,STRUCT(scalinataI),STRUCT(scalinataI2)]);
DRAW(scaleInterne);

//volta sala centrale
var dominioVolta = DOMAIN([[0,1],[0,1]])([20,20]);

//funzione che ruota di -45 gradi e trasla lungo y di 2.4 metri
function ruotaPunti (p) {
  var a = -PI/4;
  x = p[0];
  y = p[1];
  z = p[2];
  x1 = x * COS(a) - y * SIN(a);
  y1 = x * SIN(a) + y * COS(a);

  return [x1,2.4+y1,z];
};

//semicerchio ruotato di 45 gradi e scalato di scala
function semicerchioR (r,scala) {
  var funzione = function (p) { 
    var u = p[0] * PI/2;
    var x = r * SIN(u);
    var y = 0;
    var z = r * COS(u);
    
    return ruotaPunti([x,y,z*scala]);
  };

  return funzione;
};

var volta1 = semicerchio(2.4,0,0);
var raggio2 = 2.4 * Math.sqrt(2);
var volta2 = semicerchioR(raggio2,2.4/raggio2);

var curveVolta1 = [volta1,volta1,volta2];
var nodiVolta1 = nodi(curveVolta1);
var supVolta1 = NUBS(S1)(2)(nodiVolta1)(curveVolta1);
var mappaVolta1 = MAP(supVolta1)(dominioVolta);

var voltaCentrale = STRUCT([T([1,2])([6.4,4.5]),mappaVolta1,T([1])([4.8])(S([1])([-1])(mappaVolta1)),T([0,1])([2.4,2.4])(R([0,1])([PI/2])(mappaVolta1)),T([0,1])([2.4,2.4])(S([1])([-1])(R([0,1])([PI/2])(mappaVolta1)))]);

var volta3 = cilindro(2.4,1.2,PI/2,0);
var mappaVolta3 = MAP(volta3)(dominioCilindri);
var volta4 = cilindro(2.4,4.7,PI/2,0);
var mappaVolta4 = MAP(volta4)(dominioCilindri);
var volta5 = cilindro(2.4,1.2,PI,-PI/2);
var mappaVolta5 = MAP(volta5)(dominioCilindri2);

var volta = STRUCT([voltaCentrale,T([1,2])([6.4,4.5])(R([1,2])([PI/2])(mappaVolta3)),T([1,2])([15.9,4.5])(R([1,2])([PI/2])(mappaVolta4)),T([0,1,2])([3.6,8.8,4.5])(R([0,2])([-PI/2])(mappaVolta5))]);
DRAW(volta);

//tetti
var dominioTetto = DOMAIN([[0,1],[0,1]])([20,20]);
var coefAng1 = 1.2/4.5;

//segmento parallelo ad asse Y traslato anche lungo y
function segmentoY (tx,ty,tz,lunghezza) {
  var funzione = function (p) {
    var u = p[0] * lunghezza;

    return [tx,ty + u,tz];
  };

  return funzione;
};

var segTetto1 = segmento(11.4,5,7.4);
var segTetto2 = segmento(5.8,5,7.4);
var segTetto3 = segmento(5.8,0.5,6.2); //punto più basso del tetto
var segTetto4 = segmento(5,11,7.4+(6*coefAng1)); //punto più alto del tetto pari a 9 metri
var segTetto5 = segmento(11.4,17,7.4); //fine del tetto sul retro
var segTetto6 = segmentoY(11.4,5,7.4,12); //fine del tetto sul lato
var puntoTetto1 = [5,11,7.4+(6*coefAng1)]; //punto dove si congunge il tetto sul lato
var puntiTetto1 = [[5.5,-0.1,8.4],[11.1,-0.1,8.4],[11.1,-0.1,8.4],[11.1,5.5,8.4],[11.1,5.5,8.4],[5.5,5.5,8.4],[5.5,5.5,8.4],[5.5,-0.1,8.4]]; //punti perimetro tetto della torre
var puntoTetto2 = [8.3,2.7,9]; //punto dove si congunge il tetto della torre


var curveTetto1 = [segTetto3,segTetto3,segTetto2]; //parte frontale del tetto
var nodiTetto1 = nodi(curveTetto1);
var supTetto1 = NUBS(S1)(2)(nodiTetto1)(curveTetto1);
var mappaTetto1 = MAP(supTetto1)(dominioTetto);

var curveTetto2 = [segTetto1,segTetto4,segTetto4,segTetto5]; //parte centrale del tetto
var nodiTetto2 = nodi(curveTetto2);
var supTetto2 = NUBS(S1)(2)(nodiTetto2)(curveTetto2);
var mappaTetto2 = MAP(supTetto2)(dominioTetto);

var curveTetto3 = [segTetto6,puntoTetto1,puntoTetto1]; //parte laterale del tetto
var nodiTetto3 = nodi(curveTetto3);
var supTetto3 = NUBS(S1)(2)(nodiTetto3)(curveTetto3);
var mappaTetto3 = MAP(supTetto3)(dominioTetto);

var nodiTetto4 = nodi(puntiTetto1); //perimetro tetto della torre
var supTetto4 = NUBS(S0)(2)(nodiTetto4)(puntiTetto1);

var curveTetto5 = [supTetto4,puntoTetto2,puntoTetto2]; //tetto della torre
var nodiTetto5 = nodi(curveTetto5);
var supTetto5 = NUBS(S1)(2)(nodiTetto5)(curveTetto5);
var mappaTetto5 = MAP(supTetto5)(dominioTetto);

var fregio1 = [[5.8,0.2,7.8],[5.7,0.1,7.8],[5.7,0.1,7.8],[5.7,0.1,8.1],[5.7,0.1,8.1],[5.5,-0.1,8.4]];
var fregio2 = [[5.8,5.2,7.8],[5.7,5.3,7.8],[5.7,5.3,7.8],[5.7,5.3,8.1],[5.7,5.3,8.1],[5.5,5.5,8.4]];
var fregio3 = [[10.8,5.2,7.8],[10.9,5.3,7.8],[10.9,5.3,7.8],[10.9,5.3,8.1],[10.9,5.3,8.1],[11.1,5.5,8.4]];
var fregio4 = [[10.8,0.2,7.8],[10.9,0.1,7.8],[10.9,0.1,7.8],[10.9,0.1,8.1],[10.9,0.1,8.1],[11.1,-0.1,8.4]];

var nodiFregio1 = nodi(fregio1); //angolo1 del fregio della torre
var supFregio1 = NUBS(S0)(2)(nodiFregio1)(fregio1);
var nodiFregio2 = nodi(fregio2); //angolo2 del fregio della torre
var supFregio2 = NUBS(S0)(2)(nodiFregio2)(fregio2);
var nodiFregio3 = nodi(fregio3); //angolo3 del fregio della torre
var supFregio3 = NUBS(S0)(2)(nodiFregio3)(fregio3);
var nodiFregio4 = nodi(fregio4); //angolo4 del fregio della torre
var supFregio4 = NUBS(S0)(2)(nodiFregio4)(fregio4);

var curveTetto6 = [supFregio1,supFregio2,supFregio2,supFregio3,supFregio3,supFregio4,supFregio4,supFregio1]; //fregio della torre
var nodiTetto6 = nodi(curveTetto6);
var supTetto6 = NUBS(S1)(2)(nodiTetto6)(curveTetto6);
var mappaTetto6 = MAP(supTetto6)(dominioTetto);

var fregio5 = [[10.8,5.6,6.6],[10.8,5.4,7],[10.8,5.4,7],[10.8,5.2,7],[10.8,5.2,7],[10.8,5,7.4]];
var fregio6 = [[10.8,5.6,6.6],[11,5.4,7],[11,5.4,7],[11.2,5.2,7],[11.2,5.2,7],[11.4,5,7.4]];
var fregio7 = [[10.8,16.4,6.6],[11,16.6,7],[11,16.6,7],[11.2,16.8,7],[11.2,16.8,7],[11.4,17,7.4]];
var fregio8 = [[0,16.4,6.6],[0,16.6,7],[0,16.6,7],[0,16.8,7],[0,16.8,7],[0,17,7.4]];

var nodiFregio5 = nodi(fregio5); //angolo1 del fregio del tetto
var supFregio5 = NUBS(S0)(2)(nodiFregio5)(fregio5);
var nodiFregio6 = nodi(fregio6); //angolo2 del fregio del tetto
var supFregio6 = NUBS(S0)(2)(nodiFregio6)(fregio6);
var nodiFregio7 = nodi(fregio7); //angolo3 del fregio del tetto
var supFregio7 = NUBS(S0)(2)(nodiFregio7)(fregio7);
var nodiFregio8 = nodi(fregio8); //angolo4 del fregio del tetto
var supFregio8 = NUBS(S0)(2)(nodiFregio8)(fregio8);

var curveTetto7 = [supFregio5,supFregio6,supFregio6,supFregio7,supFregio7,supFregio8]; //fregio del tetto
var nodiTetto7 = nodi(curveTetto7);
var supTetto7 = NUBS(S1)(2)(nodiTetto7)(curveTetto7);
var mappaTetto7 = MAP(supTetto7)(dominioTetto);

var tetti = STRUCT([mappaTetto1,mappaTetto2,mappaTetto3,mappaTetto5,mappaTetto6,mappaTetto7]);
DRAW(tetti);