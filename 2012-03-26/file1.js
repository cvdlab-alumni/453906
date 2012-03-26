// dominio monodimensionale
vad dom1 = DOMAIN([[1,3]])([2])

//dominio bidimensionale
vad dom2 = DOMAIN([[1,3][1,4]])([2,3])

//dominio tridimensionale
vad dom3 = DOMAIN([[1,3][1,4][1,2]])([2,3,1])

//li disegno con DRAW(dom) e coloro con COLOR([r,g,b])(dom)



//mapping
var domain = DOMAIN([[0,1]])([10]);

var mapping = function (p) {
  var u = p[0];

  return [u, 1];
};

var mapped = MAP(mapping)(domain);

DRAW(mapped);
COLOR([0,0,0])(mapped)


//bisettrice con mappatura
var domain = DOMAIN([[0,1]])([10]);

var bisettrice = function (p) {
  var u = p[0];

  return [u, u];
};

var mapped = MAP(bisettrice)(domain);

DRAW(mapped);
COLOR([0,0,0])(mapped)



//sinusoide
var domain = DOMAIN([[0,2*PI]])([36]);

var sinusoide = function (p) {
  var u = p[0];

  return [u, SIN(u)];
};

var mapped = MAP(sinusoide)(domain);

DRAW(mapped);
COLOR([0,0,0])(mapped);



//circonferenza di raggio r e n segmenti
var drawCircle = function (r, n) {
var domain = DOMAIN([[0,2*PI]])([n]);

var circle = function (p) {
  var u = p[0];

  return [r * SIN(u), r * COS(u)];
};

var mapped = MAP(circle)(domain);

DRAW(mapped);
COLOR([0,0,0])(mapped);
};
drawCircle(3,100);


//cilindro raggio r, altezza h, n e m segmenti, colore color
var drawCylinder= function (r,h,m,n,color) {
  var domain = DOMAIN([[0,2*PI],[0,h]])([n,m]);

  var cylinder = function (p) {
    var u = p[0];
    var w = p[1];

    return [r * SIN(u), r * COS(u), w];
  }
  var mapped = MAP(cylinder)(domain);

  DRAW(mapped);
  COLOR(color)(mapped);
};
drawCylinder(2,4,20,20,[0,0,0]);