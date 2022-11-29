var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdMassa = pacientes[i].querySelector(".info-massa");
    var tdImc = pacientes[i].querySelector(".info-imc");
    
    var altura = tdAltura.textContent;
    var massa = tdMassa.textContent;
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);



    if (!pesoEhValido) {
            tdMassa.textContent = "Peso inválido!";
            pesoEhValido = false;
            pacientes[i].classList.add("paciente-invalido");
        }
        
        if (!alturaEhValida) {
            console.log("Altura inválida!");
            tdAltura.textContent = "Altura inválida!";
            alturaEhValida = false;
            pacientes[i].classList.add("paciente-invalido");
        }
        
        
        if (alturaEhValida && pesoEhValido) {
            var imc = calculaImc(peso,altura);
            tdImc.textContent = imc;    
            
        } else {
            tdImc.textContent = "Altura e/ou peso inválidos!";
        }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); 
}

function validaPeso(peso){

    if (peso >= 0 && peso < 200){
        return true;
    } else {
        return false;
    }

}

function validaAltura(altura){
    
    if (altura >=0 && altura <= 3){
        return true;
    } else {
        return false;
    }

}