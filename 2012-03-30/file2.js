// quadrato
var quad = SIMPLICIALCOMPLEX([[0,0],[1,0],[1,1],[0,1]])([[0,1,3],[1,2,3]]);
DRAW(quad);

var quad10 = REPLICA(10)([quad,T([1])(2)]); // non funziona
DRAW(quad10);

var quad10 = p.simplexGrid([REPLICA(10)([1,-1]),[1]])
DRAW(quad10);

var quad100 = p.simplexGrid([REPLICA(10)([1,-1]),REPLICA(10)([1,-1])])
DRAW(quad100)

var ex = EXTRUDE([0,0,1])(quad10)
DRAW(ex)

var quad1000 = p.simplexGrid([REPLICA(10)([1,-1]),REPLICA(10)([1,-1]),REPLICA(10)([1,-1])])
DRAW(quad1000)