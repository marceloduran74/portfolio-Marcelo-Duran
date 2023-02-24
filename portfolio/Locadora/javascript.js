function validaForm(){
    let validaCod = document.forms["cadastrar"]["codigo"].value;
    let validaTit = document.forms["cadastrar"]["titulo"].value;
    let validaDir = document.forms["cadastrar"]["diretor"].value;
    let validaDat = document.forms["cadastrar"]["data"].value;
    let validaRad = document.forms["cadastrar"]["radio"].value;    
    let validaAto = document.forms["cadastrar"]["ator"].value;
    let validaNot = document.forms["cadastrar"]["nota"].value;
    

    if (validaCod == ""){
        alert("O código deve ser preenchido!");
        return false;
    }
    if (validaDat == ""){
        alert("A data deve ser preenchida!");
        return false;
    }
    if (validaTit == ""){
        alert("O título deve ser preenchido!");
        return false;
    }
    if (validaDir == ""){
        alert("O diretor deve ser preenchido!");
        return false;
    }
    if (validaAto == ""){
        alert("O ator/atriz deve ser preenchido!");
        return false;
    }
    if (validaNot == ""){
        alert("A nota deve ser preenchida!");
        return false;
    }
    if (validaRad == ""){
        alert("O gênero deve ser marcado!");
        return false;
    }    
}

function insere(){
    let codi = document.forms["cadastrar"]["codigo"].value;
    let titu = document.forms["cadastrar"]["titulo"].value;
    let dire = document.forms["cadastrar"]["diretor"].value;
    let data = document.forms["cadastrar"]["data"].value;
    let radi = document.forms["cadastrar"]["radio"].value;    
    let ator = document.forms["cadastrar"]["ator"].value;
    let nota = document.forms["cadastrar"]["nota"].value;
    

    let inserir = window.document.getElementById("inserirTabela");
    inserir.innerHTML = `<th scope="col">${codi}</th>`;
    inserir.innerHTML += `<td>${titu}</td>`;
    inserir.innerHTML += `<td>${dire}</td>`;
    inserir.innerHTML += `<td>${data}</td>`;
    inserir.innerHTML += `<td>${radi}</td>`;
    inserir.innerHTML += `<td>${ator}</td>`;
    inserir.innerHTML += `<td>${nota}/10</td>`;    
}

function nova(){
    
}