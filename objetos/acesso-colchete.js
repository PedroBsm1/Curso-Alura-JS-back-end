const cliente = {
    nome: "andre",
    idade: 32,
    cpf: "2313123123",
    email: "andre@gmail.com.br"
}
console.log(`O nome do cliente é ${cliente["nome"]} sua idade é ${cliente["idade"]} seu CPF é ${cliente["cpf"]} e seu email ${cliente["email"]}`)

// console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})