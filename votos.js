document.getElementById("bZona").addEventListener("click", function () {
    var voto1 = document.getElementById("voto1");
    var voto2 = document.getElementById("voto2");
    if (voto1.checked === true && voto2.checked === false) {
        alert("Proceso de selección de votos de la zona 1");
        elegir(zona1);
    }
    if (voto2.checked === true && voto1.checked === false) {
        alert("Proceso de selección de votos de la zona 2");
        elegir(zona2);
    }
    if (voto1.checked === false && voto2.checked === false) {
        alert("no hay zona seleccionada");
    }
    if (voto1.checked === true && voto2.checked === true) {
        voto1.checked = false;
        voto2.checked = false;
        alert("seleccione solo uno");
    }

})
// votos
var zona1 = ["Lauren", "camila", "Lauren", "Camila", "Ally", "Dinah", "Camila",
    "Normani", "Lauren", "Ally", "Ally", "Ally", "Ally"];
    var zona2 = ["Lauren", "camila", "Lauren", "Camila", "Ally", "Dinah", "Camila",
    "Normani", "Lauren", "Camila","Camila","Camila","Camila"
    ,"Camila","Camila"];
var usar = [];
var repetidos = [];
var temporal = [];
var verificar;
var letras;
const a = 0;

function elegir(elementos) {
    elementos.forEach((value, index) => {

        temporal = Object.assign([], elementos); // elemento copiado 
        temporal.splice(index, 1); //Se elimina el elemnto repetido
        if (temporal.indexOf(value) != -1 && repetidos.indexOf(value) == -1) {
            repetidos.push(value);

        }
    });
    //para validar
    usar = repetidos.sort();
    var abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"
        , "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (var sigue = 0; sigue < repetidos.length; sigue++) {
        for (var abe = 0; abe < abecedario.length; abe++) {
            if (repetidos[sigue][0] == abecedario[abe] && usar[0] == repetidos[sigue]) {
                console.log(repetidos[sigue]);
                document.getElementById("mostrarVoto").innerHTML=repetidos[sigue];
            }
        }
    }
    
    
    console.log(repetidos);
    
}

