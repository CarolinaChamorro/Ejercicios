document.getElementById("suprimir").addEventListener("click",function(){
    let texto=document.getElementById("textQui").value;
    let letra=document.getElementById("letraQui").value;
    quitar(texto,letra)
})
 function quitar(quiText,letritas){
    var resul=" ";
        for(var i=0;i<letritas.length;i++){
            for(var k=0;k<quiText.length;k++){
                if(quiText[k]!=letritas[i]){
                    resul=resul+quiText[k];
                }
                    
            }
    
            quiText=resul;
            resul="";
                
        }
        document.getElementById("resultado").innerHTML=quiText;
        console.log("La nueva frase es "+quiText);
}
 
