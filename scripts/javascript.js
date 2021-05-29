BUSSINES='Avlis'
OPEN='09:00'
CLOSE='19:00'
DAY_FROM='Lunes'
DAY_TO='Sábados'

function devuelveHora(){
	var fecha = new Date();
  if(fecha.getHours() <= 12){
    saludo = "Buen día";
  } else if(fecha.getHours() > 12){
    saludo = "Buenas tardes";
  } return saludo;
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

function argentina(){
  if(document.getElementById("flag").checked == true){
    document.getElementById("phone").maxLength = 13;
    document.getElementById("phone").pattern = ".{13,}";
    document.getElementById("phone").placeholder = "54911 1234-5678";
  } else{
    document.getElementById("phone").maxLength = 9;
    document.getElementById("phone").pattern = ".{9,}";
    document.getElementById("phone").placeholder = "Celular"
  }
}

function nombre(){
  if(document.getElementById("nombre").value != ""){
    return " " + document.getElementById("nombre").value;
  }else{
    return "";
  }
}

function formato(){
	var tmp="";
	var nombreArray = document.getElementById("nombre").value.split(" ");
	if(document.getElementById("nombre").value[document.getElementById("nombre").value.length-1] == " "){
		nombreArray.pop();
	}
	if(nombreArray.length<2){
		document.getElementById("nombre").value = nombreArray[0][0].toUpperCase() + nombreArray[0].slice(1).toLowerCase();
	} else {
		for(var i=0;i<nombreArray.length;i++){
			nombreArray[i] = nombreArray[i][0].toUpperCase() + nombreArray[i].slice(1).toLowerCase();
		} document.getElementById("nombre").value = nombreArray.join(" ");
	}
}

function equipoListo(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde " + BUSSINES + " para avisarle que su equipo esta listo. ¿Cuándo podría pasar?"
}
function sinSolucion(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde " + BUSSINES + " para avisarle que lamentablemente su equipo no tuvo reparación, recuerde que conservamos equipos en este estado por un máximo de 60 días, luego de ese tiempo se descartan. Le esperamos de " + DAY_FROM + " a " + DAY_TO + " de " + OPEN + " a " + CLOSE + "."
}
function llegoRepuesto(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde " + BUSSINES + " para avisarle que ya nos llego el repuesto para su equipo, le esperamos de " + DAY_FROM + " a " + DAY_TO + " de " + OPEN + " a " + CLOSE + "."
}
function desbloqueo(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde " + BUSSINES + " para avisarle que su equipo tiene código de desbloqueo y el técnico lo precisa para continuar con la reparación, nos lo puede proporcionar por esta misma vía."
}
function armado(){
  document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde " + BUSSINES + " para avisarle que su equipo esta armado para ser retirado."
}
function presupuesto(){
  if(document.getElementById("precio").value !== ""){
    document.getElementById("textarea").value = devuelveHora() + nombre() + ", le escribo desde " + BUSSINES + " para avisarle que el presupuesto para su equipo es de " + document.getElementById("precio").value + ", ¿Lo acepta? Recuerde que el mismo tiene una validez de 30 días.";
  } else{
      document.getElementById("precio").placeholder = "Ingresar monto"
      document.getElementById("precio").style.backgroundColor = "yellow";
      document.getElementById("radio_presupuesto").checked = false;
  }
}

function estadoPresupuesto(){
  document.getElementById("precio").placeholder = "Presupuesto";
  document.getElementById("precio").style.backgroundColor = "white";
}
