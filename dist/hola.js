var ValorDolar = 100;
var pesosDolares = 3800.565;
var cent = 100;
var fan = 76;
Valorpesos = ValorDolar * pesosDolares;

Valorpesos = Valorpesos.toFixed(2);
centfan = (cent * (9/5)) + 32;
centfan = centfan.toFixed(2);
fancent = (fan - 32 ) * (5/9);
fancent = fancent.toFixed(2);
alert( "hola, usted cuenta con:" + " " + "$" + ValorDolar + " " + "dolares, el valor de la conversion es:" + " " + "$" + Valorpesos);

alert("Saludos, la conversion de grados cent a fah es:" + " " + centfan);

alert("prueba: Saludos, la conversion de grados fah a cent es:" + " " + fancent);
