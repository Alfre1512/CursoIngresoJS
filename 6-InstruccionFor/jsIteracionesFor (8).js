function Mostrar()
 {var num = prompt("");
var rta ="es primo";
for (var yo =2  ; yo < num ; yo++){
    if (num % yo == 0 ) {
        rta= "No es primo";
        break;
    
    
    }
}
    alert(rta);

}