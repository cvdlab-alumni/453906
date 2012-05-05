//Stsbilizzatori orizzontali e timone di coda di un "DH53 Humming Bird"

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
var domain2 = DOMAIN([[0,1],[0,1]])([30,10]);

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
DRAW(mappaVerticalS);


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
DRAW(OrizontalStabilizers);