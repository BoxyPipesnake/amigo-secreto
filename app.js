// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

const lista = document.getElementById('listaAmigos'); // Lista Amigos que se muestra en la pantalla


function agregarAmigo(){
    const inputUsuario = document.getElementById('amigo');

    if(inputUsuario.value === ''){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(inputUsuario.value);
        inputUsuario.value = '';
        actualizarListaAmigos();
        console.log(amigos);
    }
}

function actualizarListaAmigos(){
    lista.textContent = '';
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

}

