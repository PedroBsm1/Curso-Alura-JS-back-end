const livros = require('./listalivros');

let maisCaro = 0;

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }if (arrProdutos[atual].preco > arrProdutos[maisCaro].preco) {
            maisCaro = atual;
          }
    }
    return maisBarato;
}
module.exports = menorValor;


