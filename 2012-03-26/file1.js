// dominio monodimensionale
vad dom1 = DOMAIN([[1,3]])([2])

//dominio bidimensionale
vad dom2 = DOMAIN([[1,3][1,4]])([2,3])

//dominio tridimensionale
vad dom3 = DOMAIN([[1,3][1,4][1,2]])([2,3,1])

//li disegno con DRAW(dom) e coloro con COLOR([r,g,b])(dom)