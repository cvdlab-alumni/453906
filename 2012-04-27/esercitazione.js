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
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain,h))(controlpoints);
DRAW(splineCardinal);