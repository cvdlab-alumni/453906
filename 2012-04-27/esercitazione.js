//labirinto semitrasparente
var laby1 = POLYLINE([[0,0],[9,0],[9,-3],[8,-3],[8,-1],[5,-1],[5,-3],[4,-3],[4,-1],[1,-1],[1,-3],[0,-3],[0,0]]);

var laby = STRUCT([laby1, T([0,1])([9,-7])(ROTATE([0,1])(PI)(laby1))]);
var labyrinth = EXTRUDE([3])(laby);
DRAW(COLOR([1,0,0,0.5])(labyrinth));


//tetto labirinto
var roof = BOUNDARY(T([1,2])([-7,3])(CUBOID([9,7,0.5])));
DRAW(COLOR([1,0,0,0.5])(roof));