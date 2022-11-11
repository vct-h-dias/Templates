class Cadastro {
    constructor(nome, genero, autor, avaliacao){
        console.log(this);
        this.Nome = nome;
        this.Genero = genero;
        this.Autor = autor;
        this.Avaliacao = avaliacao;
    }
}

var cad = [];

cad[0] = new Cadastro("Harry Potter", "Romance", "JK", "10");
cad[1] = new Cadastro("Dom Quixote", "Romance", "Miguel de Cervantes", "9");

var listar = (turma) => {
    
    var conteudo = "<table class='table'>";
    conteudo += "<tr><th>Nome</th><th>Gênero</th><th>Autor</th><th>Avaliação</th></tr>";
    for (let i = 0; i < cad.length; i++) {
        console.log(turma)
        conteudo += "<tr><td>" + cad[i].Nome + "</td>";
        conteudo += "<td>" + cad[i].Genero + "</td>";
        conteudo += "<td>" + cad[i].Autor + "</td>";
        conteudo += "<td>" + cad[i].Avaliacao + "</td></tr>";
        
    }
    
    conteudo += "</table>";
    
    const divcasa = document.getElementById('list');
    divcasa.innerHTML = conteudo;
}

function matricular(){
    var l = new Cadastro(nome.value, genero.value, autor.value, avaliacao.value);
    console.log(l);
    cad.push(l);
    nome.value = ""
    genero.value = ""
    autor.value = ""
    avaliacao.value = ""
    listar();
}