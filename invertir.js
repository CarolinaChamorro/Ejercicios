document.getElementById("bInvertir").addEventListener("click",function(){
  var inversoFrase=document.getElementById("fraseIn").value;
  var c=[];
  // var frase = "Hola tu como estas";
  var res = inversoFrase.split(" ");
  if(inversoFrase.length<res.length){
      console.log("no es una frase");
  }else{
  for(var k=res.length-1;k>=0;k--){
      c.push(res[k]+" ");
}
document.getElementById("mostrarFrase").innerHTML=c;
console.log("La frase a la inversa es: "+c);
  }
  
})


