function Mostrar()
{
    var rep=prompt("");
    var contpares  = 0 , msj = "las divisones son";
    for (var yo =0 ;  yo < rep ; yo++){
    if (rep % yo == 0){
        console.log (yo);
        contpares++;
        msj = msj + yo ; 
    }



    }


}