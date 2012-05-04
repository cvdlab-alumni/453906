//labirinto semitrasparente
var laby1 = POLYLINE([[0,0],[9,0],[9,-3],[8,-3],[8,-1],[5,-1],[5,-3],[4,-3],[4,-1],[1,-1],[1,-3],[0,-3],[0,0]]);

var laby = STRUCT([laby1, T([0,1])([9,-7])(ROTATE([0,1])(PI)(laby1))]);
var labyrinth = EXTRUDE([3])(laby);
DRAW(COLOR([1,0,0,0.5])(labyrinth));


//tetto labirinto
var roof = BOUNDARY(T([1,2])([-7,3])(CUBOID([9,7,0.5])));
DRAW(COLOR([1,0,0,0.5])(roof));


//curva con Hermite
var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[10,0],[0,10],[10,10]]; // p0,p1,t0,t1 dove t0 e t1 sono le tangenti ai punti p0 e p1 traslate nell'origine (indico le punte dei vettori)
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);


//curva con BEZIER
var domain = INTERVALS(1)(32);
var controlpoints = [[0,0],[1,2],[3,2],[3,0],[5,-1],[6,1]]; //la curva inizia nel primo punto e finisce nell'ultimo ma non passa necessariamente negli altri punti. E' compresa nel guscio convesso dei punti e tangente al primo e ultimo segmento della spezzata che congiunge i punti
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);

//curva con BEZIER in 3D
var domain = INTERVALS(1)(32);
var controlpoints = [[0,0,0],[1,2,1],[3,2,2],[3,0,3],[5,-1,-2],[6,1,-5]];
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);


//curva con SPLINE (curva a tratti)
//congiunge punti (tranne primo e ultimo) con curve di Hermite con tangente parallela al vettore differenza tra il punto prima e il punto dopo (segmento che unisce punto precedente e successivo)
//per avere anche punto iniziale e finale bisogna scriverli 2 volte
var domain = INTERVALS(1)(20);
var h = 1; // imposta lunghezza tangente ai punti.... influenza la "stondatura" delle curve. Default = 1
var controlpoints = [[0,0],[0,0],[3,2],[4,-1],[7,3],[9,0],[11,1],[12,0],[12,0]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain,tan))(controlpoints);
DRAW(splineCardinal);


var dominio = INTERVALS(1)(1000);
var tan = 0.1;
var punti = [[10,43],[20,50],[50,69],[55,70.5],[60,71],[64,71.8],[66,74],[70,74.5],[75,75.8],[80,77],[85,78.2],[90,80],[95,81.7],[98,82],[100,82],[102,83],[110,85],[120,86.9],[125,86.7],[135,87.9],[140,88],[150,88],[160,88],[180,87.9],[190,87.5],[200,87.5],[230,87.3],[240,87.3],[250,88],[270,88],[280,87.1],[290,88],[300,88],[320,88],[350,87.4],[400,86.1],[420,86],[450,86.6],[500,87.8],[530,88],[550,88.1],[560,88.2],[585,87.2],[600,87.2],[630,88],[650,88],[700,86.4],[750,87],[800,86.4],[850,86.4],[900,87.2],[950,88],[970,88.2],[1000,88],[1080,87],[1090,87],[1100,86],[1150,89],[1200,90],[1250,88.8],[1300,88.6],[1350,86.1],[1400,87],[1430,89],[1450,89.1],[1500,88.7],[1580,85.4],[1600,85.6],[1660,87.8],[1700,88],[1750,88.8],[1800,88],[1850,86],[1900,89.9],[1960,89],[1990,89.5],[2000,89],[2030,86.8],[2100,89.5],[2150,89.6],[2200,89],[2220,87.9],[2260,89.5],[2300,89.6],[2330,88],[2370,88],[2400,89],[2450,90],[2500,88.8],[2550,89.2],[2600,88.8],[2700,90],[2800,88],[2850,88.1],[2900,90],[3000,89.5],[3100,89.3],[3200,90.1],[3300,89.7],[3350,90],[3400,89.9],[3450,90.1],[3500,90],[3550,89.9],[3600,90],[3700,90.1],[3750,90],[3800,89],[3860,88.6],[3900,89.4],[3950,89.5],[4000,89],[4100,87.5],[4180,88.3],[4300,86.5],[4420,87.3],[4520,86.3],[4700,87],[4850,86.6],[4950,87.6],[5000,87.2],[5080,85.8],[5160,87.3],[5300,87.3],[5450,88.5],[5500,87.6],[5700,88.7],[5900,88.5],[6000,87.5],[6150,87.6],[6300,86.7],[6400,87.4],[6500,86],[6600,86.5],[6700,87.5],[6800,86.5],[6900,86.6],[7000,86],[7100,85.8],[7200,86.5],[7300,86],[7500,87],[7600,87],[7750,86],[7900,87],[8000,86.5],[8100,86.7],[8200,86],[8350,86.6],[8500,86.7],[8600,87.4],[8700,87],[9000,87.5],[9100,88.5],[9200,88.2],[9500,90],[9600,89.9],[10000,91.5],[10100,91.2],[10200,92],[10400,91],[10600,91],[10800,89.9],[11200,89.8],[11600,88],[11800,89],[12000,89],[12100,89.7],[12700,89.9],[12800,90.8],[13000,91],[13500,91.1],[14000,92],[14500,92.1],[15000,92],[15400,92.1],[15600,91.9],[16000,93],[17500,94],[18000,92.5],[18800,90],[19200,89],[20000,89],[20200,89]];
var splineCardinale = SPLINE(CUBIC_CARDINAL(dominio,tan))(punti);
DRAW(R([0,1])(PI/2)(T([0,1])([-20,-20])(S([0,1])([0.01,0.5])(splineCardinale))));


// superficie...
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([20,10]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([20,20,1]);

var controls1 = [[1,0,0],[0,1,0],[0,2,0],[-2,0,0]]; // p0,p1,t0,t1 -> devono avere 3 coordinate se li voglio usare per fare superfici 3D
var c1 = CUBIC_HERMITE(S0)(controls1); //c1 è una funzione vettoriale di un parametro (curva)
var curve1 = MAP(c1)(domain1); //curve1 è l'immagine della curva c1 nel piano

var controls2 = [[2,0,0],[0,2,0],[0,3,0],[-3,0,0]]; // p0,p1,t0,t1
var c2 = CUBIC_HERMITE(S0)(controls2); //c1 è una funzione vettoriale di un parametro (curva)
var curve2 = MAP(c2)(domain1); //curve1 è l'immagine della curva c1 nel piano

var struct = STRUCT([curve1, curve2]);
//DRAW(struct);

var s12 = BEZIER(S1)([c1,c2]); //gli passo le funzioni delle curve, non i MAP che sono le loro immagini
var surface12 = MAP(s12)(domain2);
//DRAW(surface12);
//DRAW(SKELETON(1)(surface12));

var s12c = CUBIC_HERMITE(S1)([c1,c2,[0,0,3],[0,0,-3]]); //oltre le curve gli passo anche le tangenti 3D alle curve stesse, ottenendo superfice 3D
var surface12c = MAP(s12c)(domain2);
//DRAW(surface12c);

var s123 = BEZIER(S2)([s12,s12c]);
var solido123 = MAP(s123)(domain3);
DRAW(solido123);


//profilo alare
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([20,10]);

var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var c1 = BEZIER(S0)(p0);
var curve1 = MAP(c1)(domain1);
DRAW(curve1);

var sup1 = BEZIER(S1)([c1,[5,1.5,0]]);
var superf1 = MAP(sup1)(domain2);
DRAW(superf1);

//funzione che riceve punti e restituisce complesso simpliciale costituito da quei punti
function POLYPOINT (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { //a SIMPLICIAL_COMPLEX devo passare i punti e l'elenco degli indici degli stessi... per farlo uso .map con una funzione che mi restituisce solo gli indici "i", ignorando i punti "p"
    return [i];
  }));  
}
var p1 = COLOR([1,0,0,1])(POLYPOINT(p0));
DRAW(p1);

var t = T([2])([10]);
var struct = STRUCT([p1,t,p1,t,p1,t,p1]);
DRAW(struct);

//tanti profili alari e l'ala intera
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var p1 = p0.map(function (p) {return [p[0],p[1]+10,p[2]+10];});
var p2 = p1.map(function (p) {return [p[0],p[1]-30,p[2]+10];});
var p3 = p2.map(function (p) {return [p[0],p[1]+30,p[2]+10];});
var p4 = p3.map(function (p) {return [p[0],p[1]-10,p[2]+10];});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);

var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4]))(domain1)); //CONS a che cazzo serve?????
DRAW(curves);

var wing = BEZIER(S1)([c0,c1,c2,c3,c4]);
var ala = MAP(wing)(domain2);
DRAW(ala);



// NON UNIFORM B-SPLINE (se le uso di ordine 2 ottengo che interpolano punti medi tra i punti di controllo)
// se vogliamo una curva con 5 punti di controllo avremo "m=5", "k=2" (la vogliamo di ordine 2), quindi "n=m+k+1" ossia 8 knots. Questi sono una sequenza di n numeri con il primo e l'ultimo ripetuti 3 volte.
var domain = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([20,10]);

var controls = [[0,0,0],[2,5,0],[7,3,0],[9,7,0],[12,2,0]];
var knots = [0,0,0,1,2,3,3,3];
var c1 = NUBS(S0)(2)(knots)(controls);
var curve1 = MAP(c1)(domain);
DRAW(curve1);

var controls2 = [[0,0,0],[2,5,3],[7,3,6],[9,7,-2],[12,2,-3]];
var knots2 = [0,0,0,1,2,3,3,3];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain);
DRAW(curve2);

var s12 = BEZIER(S1)([c1,c2]);
var surf = MAP(s12)(domain2);
DRAW(surf);


//funzione che calcola i nodi per NUBS di ordine 2 a partire dai punti di controllo
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

var points = [[0,0,0],[2,5,0],[7,3,0],[9,7,0],[12,2,0]];
var knots = nodi(points);


//senoide
var domain = INTERVALS(1)(20);
var punti1 = [[0,0],[1,1],[2,0],[3,-1],[4,0],[5,1],[6,0],[7,-1],[8,0]];
var senoide = BEZIER(S0)(punti1);
var senoid = MAP(senoide)(domain);
DRAW(senoid);



//ala piena
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([20,20,5]);

var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var p1 = p0.map(function (p) {return [p[0],p[1]+10,p[2]+10];});
var p2 = p1.map(function (p) {return [p[0],p[1]-30,p[2]+10];});
var p3 = p2.map(function (p) {return [p[0],p[1]+30,p[2]+10];});
var p4 = p3.map(function (p) {return [p[0],p[1]-10,p[2]+10];});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);

var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4]))(domain1)); //CONS a che cazzo serve?????
DRAW(curves);

var wing = BEZIER(S1)([c0,c1,c2,c3,c4]);
var ala = MAP(wing)(domain2);
//DRAW(ala);

var sup1 = BEZIER(S1)([c0,[5,1.5,0]]);
var superf1 = MAP(sup1)(domain2);
//DRAW(superf1);

var solid1 = BEZIER(S2)([wing,sup1]);
var solido1 = MAP(solid1)(domain3);
DRAW(solido1);