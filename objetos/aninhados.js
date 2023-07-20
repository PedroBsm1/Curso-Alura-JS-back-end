const cliente = {
    nome:"Joao",
    idade: 24,
    email: "joao@joao.com",
    tel: ["1112321321312", "33312312312"]
};

cliente.endereco = {
    rua: "R. Borges",
    num: 121,
    apartamento: true,
    complemento: "apto 53",
};
console.log(cliente.endereco.rua)