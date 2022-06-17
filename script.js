//1 - crie uma função que exiba uma mensagem no console

function msg(mensagem){
    console.log(mensagem);
}
msg("Bem vinda!");

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(name){
    console.log(name);
}
meuNome("Gabriele");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function perfil(nome, idade, estilo){
    console.log(`Olá ${nome}, seja bem vinda! Você tem ${idade} anos, e seu estilo musical favorito é ${estilo}. Sei tudo sobre você!`);
}
perfil("Gabriele", "22", "indie");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmMusic(filme, musica){
    console.log(`Você escolheu o filme ${filme}, e a música ${musica}`);
}
filmMusic("Volver", "The Rover");
