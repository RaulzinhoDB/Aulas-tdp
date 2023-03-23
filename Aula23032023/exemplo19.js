class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}
    get Preco(){return this.preco}
    set Preco(pPreco) {this.preco = pPreco}

    calcularDesconto(pDesconto){
        this.preco = this.preco - ((pDesconto * this.preco) / 100)
    }
}

var obj_livro1 = new Livro("To com fome", 120)
var obj_livro2 = new Livro("Quero queijo", 180)

var lista = []

lista.push(obj_livro1)
lista.push(obj_livro2)

//console.log(lista[0])
//console.log(lista[1])

console.log(lista)