class Cadastro {
    constructor(i1, i2, i3, i4){
        console.log(this);
        this.Info1 = i1;
        this.Info2 = i2;
        this.Info3 = i3;
        this.Info4 = i4;
    }
}

var cad = [];

cad[0] = new Cadastro("Harry Potter", "Romance", "JK", "10");
cad[1] = new Cadastro("Dom Quixote", "Romance", "Miguel de Cervantes", "9");

var listar = () => {
    
    var conteudo = "<table class='table'>";
    conteudo += "<tr><th>Input 1</th><th>Input 2</th><th>Input 3</th><th>Input 4</th></tr>";
    for (let i = 0; i < cad.length; i++) {
        
        conteudo += "<tr><td>" + cad[i].Info1 + "</td>";
        conteudo += "<td>" + cad[i].Info2 + "</td>";
        conteudo += "<td>" + cad[i].Info3 + "</td>";
        conteudo += "<td>" + cad[i].Info4 + "</td></tr>";
        
    }
    
    conteudo += "</table>";
    
    const divcasa = document.getElementById('list');
    divcasa.innerHTML = conteudo;
}

function matricular(){
    var l = new Cadastro(i1.value, i2.value, i3.value, i4.value);
    console.log(l);
    cad.push(l);
    i1.value = ""
    i2.value = ""
    i3.value = ""
    i4.value = ""
    tocar()
    listar();
}

function tocar(){
    console.log("branch");
    console.log("original");

    const audio = document.querySelector("audio");
    audio.play();
}