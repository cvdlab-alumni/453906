//base alta 1m con fondo piscine di 10cm e buco scalette
var base = STRUCT([SIMPLEX_GRID([[39],[1],[1]]),
                   SIMPLEX_GRID([[1,-20,15.45],[-1,1],[1]]),
                   SIMPLEX_GRID([[-21,15.45],[-2,2],[1]]),
                   SIMPLEX_GRID([[-21,31],[-4,1],[1]]),
                   SIMPLEX_GRID([[-21,26,-4,1],[-5,1],[1]]),
                   SIMPLEX_GRID([[-21,26],[-6,4],[1]]),
                   SIMPLEX_GRID([[-1,46],[-10,7],[1]]),
                   SIMPLEX_GRID([[-1,8],[-17,5],[1]]),
                   SIMPLEX_GRID([[-1,20],[-1,9],[0.1]]), //fondo piscinaGrande
                   SIMPLEX_GRID([[-47,4],[-5,11],[0.1]]) //fondo piscinaPiccola
                   ]);
COLOR([1,1,0.5])(base);


//acqua piscine alta 70cm
var piscine = STRUCT([SIMPLEX_GRID([[-1,20],[-1,9],[-0.1,0.7]]), //piscinaGrande
                      SIMPLEX_GRID([[-47,4],[-5,11],[-0.1,0.7]]) //piscinaPiccola
                      ]);
COLOR([0,1,1])(piscine);

//muri alti 4m (3m più alti della base)
var muroPiscinaGrande = STRUCT([SIMPLEX_GRID([[-0.8,7.2],[-0.8,0.2],[-1,3]]),
                                SIMPLEX_GRID([[-0.8,0.2],[-1,21.2],[4]]),
                                SIMPLEX_GRID([[-1,8.2],[-22,0.2],[4]]),
                                SIMPLEX_GRID([[-9,0.2],[-16.8,5.2],[4]])
                                ]);
var muroPiscinaPiccola = STRUCT([SIMPLEX_GRID([[-37.8,13.2],[-16,0.2],[4]]),
                                 SIMPLEX_GRID([[-51,0.2],[-5,11.2],[4]]),
                                 SIMPLEX_GRID([[-41.4,9.8],[-4.8,0.2],[-1,3]])
                                 ]);
var altriMuri = STRUCT([SIMPLEX_GRID([[-7.6,19],[-15,0.2],[-1,3]]), //muroPanche
                        SIMPLEX_GRID([[-25.2,8.6],[-7.2,0.2],[-1,3]]), //muroInternoSx
                        SIMPLEX_GRID([[-37.2,5.4],[-11.4,0.2],[-1,3]]) //muroInternoDx
                        ]);
var muri = STRUCT([muroPiscinaGrande,muroPiscinaPiccola,altriMuri]);
COLOR([0.9,0.9,1])(muri);


//muretti alti 3m sopra la base
var muretti = STRUCT([SIMPLEX_GRID([[-1,6.1],[-16.9,0.1],[-1,3]]), //murettoA
                      SIMPLEX_GRID([[-7.9,1.1],[-16.9,0.1],[-1,3]]), //murettoB
                      SIMPLEX_GRID([[-4.9,0.1],[-17,2.1],[-1,3]]), //murettoC
                      SIMPLEX_GRID([[-4.9,0.1],[-19.9,2.1],[-1,3]]), //murettoD
                      SIMPLEX_GRID([[-5,0.8],[-20.7,0.1],[-1,3]]), //murettoE
                      SIMPLEX_GRID([[-6.6,2.4],[-20.7,0.1],[-1,3]]), //murettoF
                      SIMPLEX_GRID([[-7,0.1],[-21.6,0.4],[-1,3]]) //murettoG
                      ]);
COLOR([0.9,0.9,1])(muretti);


//scalini
var scaDx = 0.35;
var scaDz = 1/7;
var scale = [];
for (var i = 0; i <= 6; i++) {
  scale[i] = T([0,2])([(scaDx * i),(-scaDz * i)])(SIMPLEX_GRID([[-36.45,0.35],[-1,3],[-6/7,1/7]]));
};
scalinata = STRUCT(scale);
COLOR([1,1,0.5])(scalinata);


//colonne
var colDx = 19/3;
var colonnato = STRUCT([SIMPLEX_GRID([[-25.95,0.1,-(colDx - 0.1),0.1,-(colDx - 0.1),0.1,-(colDx - 0.1),0.1],[-6.85,0.1,-0.1,0.1,-6.7,0.1,-0.1,0.1],[-1,3]]),
                        SIMPLEX_GRID([[-25.85,0.3,-(colDx - 0.3),0.3,-(colDx - 0.3),0.3,-(colDx - 0.3),0.3],[-6.95,0.1,-6.9,0.1],[-1,3]])
                        ]);
COLOR([0.1,0.1,0.1])(colonnato);


//panche
var panche = STRUCT([SIMPLEX_GRID([[-7.8,2.2,2.2,2.2,2.2,2.2,2.2,2.2],[-14.2,0.5],[-1.3,0.2]]),
                     SIMPLEX_GRID([[-7.9,0.15,-1.8,0.3,-1.9,0.3,-1.9,0.3,-1.9,0.3,-1.9,0.3,-1.9,0.3,-1.8,0.15],[-14.3,0.3],[-1,0.3]])
  ]);
COLOR([1,1,0.3])(panche);


//vetrate
var grigliaVetrataSud = STRUCT([SIMPLEX_GRID([[-30,3.8,3.8,3.8],[-4.9,0.1],[-1,0.1,-2.8,0.1]]),
                                SIMPLEX_GRID([[-30,0.1,-3.65,0.1,-3.7,0.1,-3.65,0.1],[-4.9,0.1],[-1.1,2.8]])
                                ]);
var pannelliVetrataSud = SIMPLEX_GRID([[-30.1,3.65,-0.1,3.7,-0.1,3.65],[-4.94,0.02],[-1.1,2.8]]);
COLOR([0.5,1,1])(pannelliVetrataSud);
COLOR([0.1,0.1,0.1])(grigliaVetrataSud);

var grigliaVetrataNord = STRUCT([SIMPLEX_GRID([[-30,1,1,1,1,1,1,1,1,1,1],[-13.6,0.1],[-1,0.1,-2.8,0.1]]),
                                 SIMPLEX_GRID([[-30,0.1,-0.85,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.9,0.1,-0.85,0.1],[-13.6,0.1],[-1.1,2.8]])
                                 ]);
var pannelliVetrataNord = SIMPLEX_GRID([[-30.1,0.85,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.9,-0.1,0.85],[-13.64,0.02],[-1.1,2.8]]);
COLOR([0.5,1,1])(pannelliVetrataNord);
COLOR([0.1,0.1,0.1])(grigliaVetrataNord);

var vEst = 7.5/8;
var grigliaVetrataEst = STRUCT([SIMPLEX_GRID([[-44.65,0.1],[-6.75,vEst,vEst,vEst,vEst,vEst,vEst,vEst,vEst],[-1,0.1,-2.8,0.1]]),
                                SIMPLEX_GRID([[-44.65,0.1],
                                              [-6.75,0.1,-(vEst-0.15),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.1),0.1,-(vEst-0.15),0.1],
                                              [-1.1,2.8]])
                                ]);
var pannelliVetrataEst = SIMPLEX_GRID([[-44.69,0.02],
                                       [-6.85,(vEst-0.15),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.1),-0.1,(vEst-0.15)],
                                       [-1.1,2.8]]);
COLOR([0.5,1,1])(pannelliVetrataEst);
COLOR([0.1,0.1,0.1])(grigliaVetrataEst);

var grligliaVetrataSx = STRUCT([SIMPLEX_GRID([[-30.9,0.1],[-7.4,3.1,3.1],[-1,0.1,-3.3,0.1]]), //è 50cm più alta dei muri
                                SIMPLEX_GRID([[-30.9,0.1],[-7.4,0.1,-2.95,0.1,-2.95,0.1],[-1.1,3.3]])
                                ]);
var pannelliVetrataSx = SIMPLEX_GRID([[-30.94,0.02],[-7.5,2.95,-0.1,2.95],[-1.1,3.3]]);
COLOR([0.5,1,1])(pannelliVetrataSx);
COLOR([0.1,0.1,0.1])(grligliaVetrataSx);

var grigliaSovratetto =  SIMPLEX_GRID([[-30.9,1.1],[-7.4,0.1,-2.95,0.1,-2.95,0.1],[-4.4,0.1]]); //sovratetto delle vetrate Sx e Dx
var pannelliSovratetto = SIMPLEX_GRID([[-31,0.9],[-7.5,2.95,-0.1,2.95],[-4.44,0.02]]);
COLOR([0.5,1,1])(pannelliSovratetto);
COLOR([0.1,0.1,0.1])(grigliaSovratetto);

var vetrate = STRUCT([grigliaVetrataSud,pannelliVetrataSud,grigliaVetrataNord,pannelliVetrataNord,grigliaVetrataEst,pannelliVetrataEst,
                      grligliaVetrataSx,pannelliVetrataSx,T([0])([1])(grligliaVetrataSx),T([0])([1])(pannelliVetrataSx),grigliaSovratetto,pannelliSovratetto]);


//tetti
var tetti = STRUCT([SIMPLEX_GRID([[-24,23],[-4,3.4],[-4,0.3]]),
                    SIMPLEX_GRID([[-24,6.9,-1.1,15],[-7.4,6.2],[-4,0.3]]),
                    SIMPLEX_GRID([[-24,23],[-13.6,3.4],[-4,0.3]]),
                    SIMPLEX_GRID([[-0.2,9.6],[-13.2,9.6],[-4,0.3]])
                    ]);
COLOR([0.99,0.99,0.99])(tetti);


//unisco tutto in un unica STRUCT e la disegno
var modello = STRUCT([base,piscine,muri,muretti,scalinata,colonnato,panche,vetrate,tetti]);
DRAW(modello);