const cliente = {
    nome:"Joao",
    idade: 24,
    email: "joao@joao.com",
    tel: ["1112321321312", "33312312312"]
};

cliente.enderecos = [
{
    rua: "R. Borges",
    num: 121,
    apartamento: true,
    complemento: "apto 53",
},
];
cliente.enderecos.push({
    rua: "R. Oswaldo Cruz",
    num: 319,
    apartamento: false,
    complemento: "loja 17",
})
const listaApto = cliente.enderecos.filter((enderecos)=> enderecos.apartamento === true);
// console.log(cliente.enderecos)
console.log(listaApto)