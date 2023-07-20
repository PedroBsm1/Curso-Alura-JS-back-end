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

const chavesDoObjeto = Object.keys(cliente);
// 
if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrados")
}else{
    console.log(chavesDoObjeto)
}