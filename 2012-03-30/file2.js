// quadrato
var quad = SIMPLICIALCOMPLEX([[0,0],[1,0],[1,1],[0,1]])([[0,1,3],[1,2,3]]);
DRAW(quad);

var quad10 = p.simplexGrid([REPLICA(10)([1,-1]),[1]])
DRAW(quad10);

var quad100 = p.simplexGrid([REPLICA(10)([1,-1]),REPLICA(10)([1,-1])])
DRAW(quad100)

var ex = EXTRUDE([0,0,1])(quad10)
DRAW(ex)

var quad1000 = p.simplexGrid([REPLICA(10)([1,-1]),REPLICA(10)([1,-1]),REPLICA(10)([1,-1])])
DRAW(quad1000)

var triangoloEquilatero = SIMPLICIALCOMPLEX([[0.5,-1*Math.sqrt(3)/4],[-0.5,-1*Math.sqrt(3)/4],[0,Math.sqrt(3)/4]])([[0,2,1]]) //non è centrato nell'origine
DRAW(triangoloEquilatero)

var tetraedroCamafro = SIMPLICIALCOMPLEX([[0,0,0],[0,1,0],[1,0,0],[0,0,1]])([[0,1,2,3]])
DRAW(tetraedroCamafro)



//scheletro del cubo con dentro il tetraedro costruito sulle sue diagonali

var tetraedroNelCubo = SIMPLICIALCOMPLEX([[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]])([[1,3,4,6]])
DRAW(tetraedroNelCubo)

var cubo = SIMPLICIALCOMPLEX([[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]])([[1,2,3,6],[1,0,3,4],[4,5,6,1],[4,7,6,3],[1,3,4,6]])
DRAW(SKELETON(1)(cubo))