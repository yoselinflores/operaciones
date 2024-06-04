function Limpiar () { 
    document.getElementById('OPERACIONES').reset();
}
function SUMAR() { 
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el resultado es:').innerHTML = x + y;
}
function RESTAR() { 
    var x =parseInt(document.getElementById('valor1').value);
    var y =parseInt(document.getElementById('valor2').value);
    document.getElementById('el resultado es:').innerHTML=x-y;
}
function DIVIDIR() { 
    var x =parseInt(document.getElementById('valor1').value);
    var y =parseInt(document.getElementById('valor2').value);
    document.getElementById('el resultado es:').innerHTML=x/y;
}
function MULTIPLICAR() { 
    var x =parseInt(document.getElementById('valor1').value);
    var y =parseInt(document.getElementById('valor2').value);
    document.getElementById('el resultado es:').innerHTML=x*y;
}