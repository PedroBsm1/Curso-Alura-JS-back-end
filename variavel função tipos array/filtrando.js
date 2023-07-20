const alunos = ["Ana Julia", "Caio Vinicius", "Bia Silva", "Maria"];
const medias = [4.5 , 9, 7, 6];

const reprovados = alunos.filter((alunos, i)=>{
    return medias[i] < 7;
})
console.log(reprovados);