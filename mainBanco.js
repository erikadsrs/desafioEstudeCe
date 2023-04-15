let salario = 2500;

if(salario != 0){
    if(salario <= 1000){
        novoSalario1 = salario + (0.4 * salario);
        console.log(`Você merece um aumento de 40%. Seu total final é ${novoSalario1}`);
        console.log(`Você também gostará de saber que: seu salário antes do reajuste era: ${salario}, o percentual adicionado foi de: 40%, o valor do aumento foi ${(0.4 * salario)}, resultando no salário final acima`);
    } else if (salario > 1000 && salario < 2000){
        novoSalario2 = salario + (0.25 * salario);
        console.log(`Você merece um aumento de 25%. Seu total é  ${novoSalario2}`);
        console.log(`Você também gostará de saber que: seu salário antes do reajuste era: ${salario}, o percentual adicionado foi de: 25%, o valor do aumento foi ${(0.25 * salario)}, resultando no salário final acima`);
    } else if ( salario > 2000 ){
        novoSalario3 = salario - (0.15 * salario);
        console.log(`Você merece doar seu salário para o estagiário`);
        console.log(`Você também gostará de saber que: seu salário antes do reajuste era: ${salario}, o percentual removido foi de: 15%, o valor do desconto foi ${(0.15 * salario)}, resultando no salário final ${novoSalario3}`);
    }
}
