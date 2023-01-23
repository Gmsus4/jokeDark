const jokeP = document.querySelector('.joke');
const btn = document.querySelector('.btn');

fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart')
    .then(response => response.json())  // convertir a json
    .then(body => {
        let joke = `${body.setup} - ${body.delivery}`;
        console.log(joke);
        fetch(`https://api.mymemory.translated.net/get?q=${joke}&langpair=en|es`)
            .then(response => response.json())
            .then(body => {
                console.log(body.matches[0].translation);
                jokeP.innerHTML = body.matches[0].translation;
            })
            .catch(err => console.log('Solicitud fallida', err))
})    //imprimir los datos en la consola
.catch(err => console.log('Solicitud fallida', err)); // Capturar errores

btn.addEventListener('click', ()=>{
    location.reload();
})

