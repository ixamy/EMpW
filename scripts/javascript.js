var fecha = new Date();
var arg = true;

function devuelveHora(){
  if(fecha.getHours() <= 12){
    return "Buen día";
  } else if(fecha.getHours() > 12){
    return "Buenas tardes";
  }
}

function areaCode(){
  number = document.getElementById("phone").value;
  if(number[0] == "0" && number.length >= 9){
    number = number.substr(1);
    number = "598" + number;
  } else if(number[0] != "0" && number.length >= 8 && number.length <= 9){
    number = "598" + number;
  }
  document.getElementById("phone").value = number;
}

function nombre(){
  if(document.getElementById("nombre").value != ""){
    return " " + document.getElementById("nombre").value;
  }else{
    return "";
  }
}

function equipoListo(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde Avlis para avisarle que su equipo esta listo. ¿Cuando podria pasar?"
}
function sinSolucion(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde Avlis para avisarle que lamentablemente su equipo no tuvo reparación, recuerde que conservamos equipos en este estado por un maximo de 60 días, luego de ese tiempo se descartan. Le esperamos de Lunes a Sábados de 09:00 a 19:00."
}
function llegoRepuesto(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde Avlis para avisarle que ya nos llego el repuesto para su equipo, le esperamos de Lunes a Sábados de 09:00 a 19:00."
}
function desbloqueo(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde Avlis para avisarle que su equipo tiene código de desbloqueo y el técnico lo precisa para continuar con la reparación, nos lo puede proporcionar por esta misma vía."
}

function argentina(){
  if(arg === true){
    document.getElementById("phone").maxLength = 13;
    document.getElementById("phone").pattern = ".{13,}";
    document.getElementById("phone").placeholder = "54911 1234-5678";
    arg = false;
  } else{
    document.getElementById("phone").maxLength = 9;
    document.getElementById("phone").pattern = ".{9,}";
    document.getElementById("phone").placeholder = "Celular"
    arg = true;
  }
}

function presupuesto(){
  if(document.getElementById("precio").value !== ""){
    document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde Avlis para avisarle que el presupuesto para su equipo es de " + document.getElementById("precio").value + ", ¿Lo acepta? Recuerde que el mismo tiene una validez de 30 días.";
  } else{
      document.getElementById("precio").placeholder = "INGRESAR PRECIO"
      document.getElementById("precio").style.backgroundColor = "yellow";
      document.getElementById("radio_presupuesto").checked = false;
  }
}

function estadoPresupuesto(){
  document.getElementById("precio").placeholder = "Presupuesto";
  document.getElementById("precio").style.backgroundColor = "white";
}
