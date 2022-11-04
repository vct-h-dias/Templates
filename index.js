class Cadastro {
    constructor(nome, matricula, frequencia, nota, turma){
        console.log(this);
        this.nome = nome;
        this.matricula = matricula;
        this.frequencia = frequencia;
        this.nota = nota;
        this.turma = turma;
    }
}

var cad = [];

cad[0] = new Cadastro("João do Picão", "CP3017311", "75.6", "10" , "EOFOR");
cad[1] = new Cadastro("Vião", "CP301729X", "92.0", "10", "EOELSE");

var listar = (turma) => {
    
    var conteudo = "<table class='table'>";
    conteudo += "<tr><th>Nome</th><th>Matricula</th><th>Turma</th></tr>";
    for (let i = 0; i < cad.length; i++) {
        console.log(turma)
        if (cad[i].turma == turma) {
            conteudo += "<tr><td>" + cad[i].nome + "</td>";
            conteudo += "<td>" + cad[i].matricula + "</td>";
            conteudo += "<td>" + cad[i].turma + "</td></tr>";
        }
    }
    
    conteudo += "</table>";
    
    const divcasa = document.getElementById('list');
    divcasa.innerHTML = conteudo;
}