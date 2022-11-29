var formBotao = document.querySelector(".form__butao");

formBotao.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector(".form__estatisticas");
    var paciente = obtemPacienteDoForm(form); 
    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    form.reset();

    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
})

function obtemPacienteDoForm(form){

    var paciente = {
        mes: form.mes.value,
        idade: form.idade.value,
        massa: form.massa.value,
        altura: form.altura.value,
        imc: calculaImc(form.massa.value, form.altura.value)
    }

    return paciente;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.mes.length == 0){
        erros.push("O mês não pode ser em branco!");
    }

    if(paciente.idade.length == 0 && paciente.idade.value == 0){
        erros.push("A idade não pode ser em branco");
    }

    if(!validaPeso(paciente.massa)) {
        erros.push("Peso é inválido!"); 
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    } 

    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector(".tabela-pacientes");
    tabela.appendChild(pacienteTr)
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(montaTd(paciente.mes, "info-mes"));
    pacienteTr.appendChild(montaTd(paciente.idade, "info-idade"));
    pacienteTr.appendChild(montaTd(paciente.massa, "info-massa"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe)
    td.textContent = dado;

    return td;
}