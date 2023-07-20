const alunos = ["pedro", "joao", "thomas", "ana"]
const medias = [10, 9, 8, 7]

const listaDeAlunosMedias = [alunos, medias];
function exibeNomeENota(aluno){
    if(listaDeAlunosMedias[0].includes(aluno)){
    const [alunos, medias] = listaDeAlunosMedias;
    const indice = alunos.indexOf(aluno)
    const mediaDoAluno = medias[indice]
    console.log(`${aluno} tem média ${mediaDoAluno}`)
} else {
    console.log("Aluno não encontrado")
}
}
exibeNomeENota("ana")