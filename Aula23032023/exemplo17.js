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
        this.preco = this.preco - pDesconto
    }
}

var obj_livro1 = new Livro("Use a cabeça Java", 500.00)
obj_livro1.calcularDesconto(30)
console.log("O livro: "+ obj_livro1.nome + ", tem o valor é de: R$ " + obj_livro1.preco)
