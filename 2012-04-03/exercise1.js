//modello 2D del piano terra del Padiglione di Barcellona (quindi senza i tetti)


//perimetro esterno del padiglione
var perimetro = [[0,0],[0,2],[0.8,2],[0.8,22.2],[9.2,22.2],[9.2,17],[39,17],[39,16.2],[51.2,16.2],[51.2,6],[52,6],[52,4],[38.9,4],[38.9,1],[39,1],[39,0],[0,0]];


//piscine
var piscinaGrande = [[1,1],[1,10],[21,10],[21,1],[1,1]];
var piscinaPiccola = [[47,5],[47,16],[51,16],[51,5],[47,5]];
var piscine = STRUCT([POLYLINE(piscinaGrande),POLYLINE(piscinaPiccola)]);


//muri spessi 20cm
var muroPiscinaGrande = [[0.8,0.8],[0.8,22.2],[9.2,22.2],[9.2,16.8],[9,16.8],[9,22],[1,22],[1,1],[8,1],[8,0.8],[0.8,0.8]];
var muroPiscinaPiccola = [[37.8,16],[37.8,16.2],[51.2,16.2],[51.2,4.8],[41.4,4.8],[41.4,5],[51,5],[51,16],[37.8,16]];
var muroPanche = [[7.6,15],[7.6,15.2],[26.6,15.2],[26.6,15],[7.6,15]];
var muroInternoSx = [[25.2,7.2],[25.2,7.4],[33.8,7.4],[33.8,7.2],[25.2,7.2]];
var muroInternoDx = [[37.2,11.4],[37.2,11.6],[42.6,11.6],[42.6,11.4],[37.2,11.4]];
var muri = STRUCT([POLYLINE(muroPiscinaGrande),POLYLINE(muroPiscinaPiccola),POLYLINE(muroPanche),POLYLINE(muroInternoSx),POLYLINE(muroInternoDx)]);


//vetrate spesse 10cm
var vetrataSud = [[30,4.9],[30,5],[41.4,5],[41.4,4.9],[30,4.9]];
var vetrataNord = [[30,13.6],[30,13.7],[40,13.7],[40,13.6],[30,13.6]];
var vetrataEst = [[44.65,6.75],[44.65,14.25],[44.75,14.25],[44.75,6.75],[44.65,6.75]];
var vetrataIternaSx = [[30.9,7.4],[30.9,13.6],[31,13.6],[31,7.4],[30.9,7.4]];
var vetrataInternaDx = [[31.9,7.4],[31.9,13.6],[32,13.6],[32,7.4],[31.9,7.4]];
var vetrate = STRUCT([POLYLINE(vetrataSud),POLYLINE(vetrataNord),POLYLINE(vetrataEst),POLYLINE(vetrataIternaSx),POLYLINE(vetrataInternaDx)]);


//muretti all'interno dell'edificio di sinistra spessi 10cm
var murettoA = [[1,16.9],[1,17],[7.1,17],[7.1,16.9],[1,16.9]];
var murettoB = [[7.9,16.9],[7.9,17],[9,17],[9,16.9],[7.9,16.9]];
var murettoC = [[4.9,17],[4.9,19.1],[5,19.1],[5,17],[4.9,17]];
var murettoD = [[4.9,19.9],[4.9,22],[5,22],[5,19.9],[4.9,19.9]];
var murettoE = [[5,20.7],[5,20.8],[5.8,20.8],[5.8,20.7],[5,20.7]];
var murettoF = [[6.6,20.7],[6.6,20.8],[9,20.8],[9,20.7],[6.6,20.7]];
var murettoG = [[7,21.6],[7,22],[7.1,22],[7.1,21.6],[7,21.6]];
var muretti = STRUCT([POLYLINE(murettoA),POLYLINE(murettoB),POLYLINE(murettoC),POLYLINE(murettoD),POLYLINE(murettoE),POLYLINE(murettoF),POLYLINE(murettoG)]);


//colonne con base a croce di larghezza totale 30cm
var colonne = []; //array che conterrà i POLYLINE delle colonne, da dare in pasto a una STRUCT
var colDx = 19/3; //distanza tra le colonne sull'asse x
var colDy = 7; //distanza tra le colonne sull'asse y
var colx = [25.85,25.85,25.95,25.95,26.05,26.05,26.15,26.15,26.05,26.05,25.95,25.95,25.85]; //proiezione sull'asse x dei punti della prima colonna
var coly = [6.95,7.05,7.05,7.15,7.15,7.05,7.05,6.95,6.95,6.85,6.85,6.95,6.95]; //proiezione sull'asse y dei punti della prima colonna
var colxy = []; //array che conterrà i punti di una colonna opportunamente scalati di multipli di colDx e colDy, da dare in pasto a POLYLINE
var colCount = 0;

for (var i = 0; i <= 3; i++) { //ripeto colonne 4 volte su asse x
  for (var j = 0; j <= 1; j++) { //ripeto colonne 2 volte su asse y
    for (var k = 0; k <= 12; k++) { //riempio array colxy di punti
      colxy[k] = [colx[k] + (colDx * i), coly[k] + (colDy * j)];
    };
    colonne[colCount] = POLYLINE(colxy); //salvo i risultati di POLYLINE nell'array colonne
    colCount++;
  };
};
var colonnato = STRUCT(colonne);


//panche
var panche = [];
var panDx = 2.2;
var panx = [7.8,7.8,10,10,7.8];
var pany = [14.2,14.7,14.7,14.2,14.2];
var panxy = [];
var panCount = 0;

for (var i = 0; i <= 6; i++) {
  for (var k = 0; k <= 4; k++) {
    panxy[k] = [panx[k] + (panDx * i), pany[k]];
  };
  panche[panCount] = POLYLINE(panxy);
  panCount++;
};
var gruppoPanche = STRUCT(panche);


//scalette
var scale = [];
var scaDx = 0.35;
var scax = [36.8,36.45,36.45,36.8];
var scay = [1,1,4,4];
var scaxy = [];
var scaCount = 0;

for (var i = 0; i <= 6; i++) {
  for (var k = 0; k <= 3; k++) {
    scaxy[k] = [scax[k] + (scaDx * i), scay[k]];
  };
  scale[scaCount] = POLYLINE(scaxy);
  scaCount++;
};
var scalinata = STRUCT(scale);


//unisco tutto in una unica STRUCT e lo disegno
var planimetria = STRUCT([POLYLINE(perimetro),piscine,muri,vetrate,muretti,colonnato,gruppoPanche,scalinata]);
COLOR([0,0,0])(planimetria);
DRAW(planimetria);