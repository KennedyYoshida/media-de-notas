const nota1 = 10;
const nota2 = 10;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed());

if (media < 5){
    console.log ('Você reprovou!');
} else if (media >=5 && media <=7) {
    console.log('Você está de recuperação');
} else{
    console.log('Você Passou de semestre');
}
    
