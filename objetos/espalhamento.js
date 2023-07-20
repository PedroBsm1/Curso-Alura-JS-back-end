const cliente = {
    nome:"Joao",
    idade: 24,
    email: "joao@joao.com",
    tel: ["1112321321312", "33312312312"]
}

cliente.enderecos = [
{
    rua: "R. Borges",
    num: 121,
    apartamento: true,
    complemento: "apto 53",
},
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}
ligaParaCliente(...cliente.tel);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
    // enderecos: cliente.enderecos[0],
};
console.log(encomenda)