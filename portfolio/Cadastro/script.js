let aUsuarios = [];

    function atualiza() {
        alert("atualiza")
    }
    

    function mensagem() {
        alert("Aluno Cadastrado com Sucesso!")
        /*atualiza();*/
    }

    function criarCadastro(nome,telefone,dataNasc,notaFinal) {

        let tb = document.getElementById("tdLista");
        let qtdLinhas = tb.rows.length;
        let linha = tb.insertRow(qtdLinhas);

        let cellNome = linha.insertCell(0);
        let cellTelefone = linha.insertCell(1);
        let cellDataNasc = linha.insertCell(2);
        let cellNotaFinal = linha.insertCell(3);

        cellNome.innerHTML = nome;
        cellTelefone.innerHTML = telefone;
        cellDataNasc.innerHTML = dataNasc;
        cellNotaFinal.innerHTML = notaFinal;
        
        mensagem();
    }