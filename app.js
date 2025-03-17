// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];

function agregarAmigo(){
    const inputUsuario = document.getElementById('amigo');

    if(inputUsuario.value === ''){
        alert('Por favor, inserte un nombre.');
    } else {
        listaAmigos.push(inputUsuario.value);
        inputUsuario.value = '';
    }
}

