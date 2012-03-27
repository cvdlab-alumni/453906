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

    return [r * COS(u), r * SIN(u), w];
  }
  var mapped = MAP(cylinder)(domain);

  DRAW(mapped);
  COLOR(color)(mapped);
};
drawCylinder(2,4,20,20,[0,0,0]);



//cono
var drawCone= function (r,h,m,n,color) {
  var domain = DOMAIN([[0,2*PI],[0,1]])([n,m]);

  var cone = function (p) {
    var u = p[0];
    var v = p[1];

    return [r * v * COS(u), r * v * SIN(u), h * v];
  }
  var mapped = MAP(cone)(domain);

  DRAW(mapped);
  COLOR(color)(mapped);
};
drawCone(2,4,20,20,[0,0,0]);





//sfera
var drawSphere = function (r,n,m,color) {
  var domain = DOMAIN([[0,PI],[0,2*PI]])([n,m]);

  var trasla = function (p) {
    var u = p[0];
    var v = p[1];

    return [u-(PI/2), v];
  }
  var traslato = MAP(trasla)(domain);

  var sphere = function (p) {
    var a = p[0];
    var b = p[1];

    return [r * COS(a) * SIN(b), r * COS(a) * COS(b), r * SIN(a)];
  }
  var mapped = MAP(sphere)(traslato);

  DRAW(mapped);
  COLOR(color)(mapped);

  return mapped; // così lo posso nascondere con HIDE()
};
drawSphere(3,10,10,[0,1,0]);



//toro ri raggio interno (buco), re raggio esterno, r1 raggio del tubo, r2 raggio dal centro del toro al centro del tubo
var drawToro = function (ri,re,n,m,color) {
  var r1=(re-ri)/2;
  var r2=re-r1;
  var domain = DOMAIN([[0,2*PI],[0,2*PI]])([n,m]);

  var toro = function (p) {
    var a = p[0];
    var b = p[1];

    return [(r2 + (r1 * COS(a))) * SIN(b),(r2 + (r1 * COS(a))) * COS(b),r1 * SIN(a)];
  }
  var mapped = MAP(toro)(domain);

  DRAW(mapped);
  COLOR(color)(mapped);

  return mapped; // così lo posso nascondere con HIDE()
};
drawToro(1,3,10,10,[0,1,0]);