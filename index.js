// obteniendo los id

const salidad = document.querySelector('#salida');
const microfono = document.querySelector('.microfono');


// solicitando permisos al usuario de activar su microfono
const ejecutandoSpeechAPi = () =>{

    const SpeechRecognition = webkitSpeechRecognition;
    // se crea una instancia de speech recognition
    const recognition = new SpeechRecognition();

    // inicio de recognition 
    recognition.start();

    // cuando se deja de ejecutar recognition
    recognition.onstart = () =>{
        salidad.classList.add('mostrar');
        salidad.textContent ='Escuchando...';
    }

    // cuando se deja de hablar
    recognition.onspeechend = () =>{
        salidad.textContent = 'Se dejo de escuchar...'
        recognition.stop();
    }

    // obtener los resultados de la grabacion
    recognition.onresult = (e) => {
        
        const speech = document.createElement('p');
        
        console.log(e.results[0][0]);
        const { transcript } = e.results[0][0];

        speech.innerHTML = `Grabado: ${transcript}`
        
        if(transcript){
            window.open(`https://www.google.com/search?q=${transcript}`,'_blanck');
            salidad.appendChild(speech);
        }
    }
}

// creando evento de escucha para el boton microfono
microfono.addEventListener('click', ejecutandoSpeechAPi)