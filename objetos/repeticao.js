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

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function")
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}