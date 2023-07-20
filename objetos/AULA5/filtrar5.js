const clientes = require("./clientesFIM.json");

function filtrarAptoSemComplementos(clientes){
    return clientes.filter((cliente) =>{
        return(cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}
const filtrados = filtrarAptoSemComplementos(clientes);
console.log(filtrados)