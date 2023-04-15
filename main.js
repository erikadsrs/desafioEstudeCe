let nota1 = 3;
let nota2 = 7;

const notaCorte = 7;

const aluno = {
    nome: 'Johnny',
    sobrenome: 'Cash',
    serie: 3,
    notas: [nota1, nota2]
};

//melhorar a forma de calcular média 
let notaFinal = (nota1 + nota2)/2;
console.log(notaFinal);

if(notaFinal != null){
    if(notaFinal < notaCorte){
        console.log('Você foi reprovado');
    } else if (notaFinal > notaCorte) {
        console.log('Você foi aprovado');
    }
} else {
    console.log('Reveja as notas no sistema');
}
