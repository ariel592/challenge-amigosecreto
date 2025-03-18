// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = [];

function agregarAmigo(){
    let amigoDeUsuario = document.getElementById('amigo').value;

    if (amigoDeUsuario.trim() ===''){
        alert('Por favor ingrese un nombre ');
        return
    }

    lista.push(amigoDeUsuario);
    limpiarCaja();
    mostrarLista();

    return
}

function limpiarCaja(){
    document.querySelector('#amigo').value = ''; 
}

function mostrarLista(){
    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML = '';

    for (let i = 0; i < lista.length; i++){
        let amigo = document.createElement('li');
        amigo.textContent = lista[i];
        listaAmigo.appendChild(amigo);
    }
}

function sortearAmigo(){
    if (lista.length === 0){
        alert('No hay ningun amigo para el sorteo');
        return;
    }

    let sorteoAleatorio = Math.floor(Math.random() * lista.length);
    let amigoSecret = lista[sorteoAleatorio];

    document.getElementById('resultado').innerHTML = 'El amigo secreto es: ' + amigoSecret;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML='';

}