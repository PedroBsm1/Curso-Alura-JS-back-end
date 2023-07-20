const cliente = {
    nome:"Joao",
    idade: 24,
    email: "joao@joao.com",
    tel: ["1112321321312", "33312312312"],
    saldo: 200,
    efetuaPagamento: function(valorCompra){
        if(valorCompra > this.saldo){
            console.log("Saldo insuficiente")
        }else{
            this.saldo -= valorCompra;
            console.log(`Pagamento realizado. Novo Saldo: ${this.saldo}`)
        }
    },
};
cliente.efetuaPagamento(25);
cliente.efetuaPagamento(250);
