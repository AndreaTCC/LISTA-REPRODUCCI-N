
const songsConteinerList = document.getElementById("allSongsConteiner");
const playlistConteinerList = document.getElementById("playlistConteiner");
const favoritesConteinerList = document.getElementById("favoritesConteiner");

class canciones {
    constructor(
        id,
        nombre,
        artista,
        album,
        anio,
        duracion,
        genero,
        caratula,
        urlCan,
        isFavorite = false,
        inplaylist = false
    ) {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.duracion = duracion;
        this.genero = genero;
        this.caratula = caratula;
        this.urlCan = urlCan;
        this.isFavorite = isFavorite;
        this.inplaylist = inplaylist;
    }

    getId() {
        return "${this.id}";
    }

    getUrl() {
        return "${this.urlCan";
    }
}



const todasLasCanciones = [
    new canciones(
        1, "Pa' tipos como tú",
        "Bizarrap ft Shakira",
        "BZRP Music Sessions, Vol. 53",
        "2023",
        "03:37",
        "Pop",
        "./asset/PORTADAS/Portada1.jpg",
        "./asset/AUDIOS/Audio1.mp3"
    ),
    new canciones(
        2,
        "El Jefe",
        "Shakira ft Fuerza Regida",
        "Las mujeres ya no lloran",
        "2023",
        "02:50",
        "Regional",
        "./asset/PORTADAS/Portada2.jpg",
        "./asset/AUDIOS/Audio2.mp3"
    ),

    new canciones(
        3,
        "Monotonía",
        "Shakira ft Ozuna",
        "Las mujeres ya no lloran",
        "2023",
        "02:38",
        "Pop",
        "./asset/PORTADAS/Portada2.jpg",
        "./asset/AUDIOS/Audio3.mp3"
    ),

    new canciones(
        4,
        "La Intención",
        "Christian Nodal ft Peso Pluma",
        "México en mi voz",
        "2023",
        "04:09",
        "Regional",
        "./asset/PORTADAS/Portada4.jpg",
        "./asset/AUDIOS/Audio4.mp3"
    ),


    new canciones(
        5,
        "Ya No Somos Ni Seremos",
        "Christian Nodal",
        "Ahora",
        "2020",
        "03:05",
        "Regional",
        "./asset/PORTADAS/Portada5.jpg",
        "./asset/AUDIOS/Audio5.mp3"
    ),

    new canciones(
        6,
        "La Siguiente",
        "Christian Nodal ft Kany Garcia",
        "Ahora",
        "2020",
        "03:22",
        "Regional",
        "./asset/PORTADAS/Portada5.jpg",
        "./asset/AUDIOS/Audio6.mp3"
    ),


    new canciones(
        7,
        "Me enamoré",
        "Shakira",
        "El dorado",
        "2017",
        "03:52",
        "Reggaeton",
        "./asset/PORTADAS/Portada7.png",
        "./asset/AUDIOS/Audio7-1.mp3"
    ),

    new canciones(
        8,
        "Copa Vacia",
        "Shakira ft Manuel Turizo",
        "Las mujeres ya no lloran",
        "2023",
        "02:53",
        "Pop",
        "./asset/PORTADAS/Portada2.jpg",
        "./asset/AUDIOS/Audio8.mp3"
    ),



    new canciones(
        9,
        "Acróstico",
        "Shakira",
        "Las mujeres ya no lloran",
        "2023",
        "02:50",
        "Pop",
        "./asset/PORTADAS/Portada2.jpg",
        "./asset/AUDIOS/Audio9.mp3"
    ),
    new canciones(
        10,
        "Carolina",
        "Karol G",
        "Mañana será bonito",
        "2023",
        "02:42",
        "Urbano",
        "./asset/PORTADAS/Portada10-1.jpg",
        "./asset/AUDIOS/Audio10.mp3"
    ),
    
    new canciones(
        11,
        "Amargura",
        "Karol G",
        "Mañana será bonito",
        "2023",
        "02:49",
        "Urbano",
        "./asset/PORTADAS/Portada10-1.jpg",
        "./asset/AUDIOS/Audio11.mp3"
    ),
    new canciones(
        12,
        "Mientras me curo del cora",
        "Karol G",
        "Mañana será bonito",
        "2023",
        "02:43",
        "Urbano",
        "./asset/PORTADAS/Portada10-1.jpg",
        "./asset/AUDIOS/Audio12.mp3"
    ),

    new canciones(
        13,
        "Aparentemente",
        "Maluma",
        "Don Juan",
        "2023",
        "02:24",
        "Urbano",
        "./asset/PORTADAS/Portada13.jpg",
        "./asset/AUDIOS/Audio13-1.mp3"
    ),


    new canciones(
        14,
        "Coco Loco",
        "Maluma",
        "Don Juan",
        "2023",
        "02:46",
        "Urbano",
        "./asset/PORTADAS/Portada13.jpg",
        "./asset/AUDIOS/Audio14-1.mp3"
    ),


    new canciones(
        15,
        "Sobrio",
        "Maluma",
        "Don Juan",
        "2023",
        "03:21",
        "Urbano",
        "./asset/PORTADAS/Portada13.jpg",
        "./asset/AUDIOS/Audio15-1.mp3"
    ),

    new canciones(
        16,
        "Trofeo",
        "Maluma ft Yandel",
        "Don Juan",
        "2023",
        "03:42",
        "Urbano",
        "./asset/PORTADAS/Portada13.jpg",
        "./asset/AUDIOS/Audio16-1.mp3"
    ),

    new canciones(
        17,
        "Le Doy 20 Mil",
        "El Alfa ft Prince Royce",
        "Llamada Perdida",
        "2024",
        "03:02",
        "Urbano",
        "./asset/PORTADAS/Portada17.jpg",
        "./asset/AUDIOS/Audio17-1.mp3"
    ),

    new canciones(
        18,
        "Frío en el Infierno",
        "Prince Royce",
        "Llamada Perdida",
        "2024",
        "02:59",
        "Urbano",
        "./asset/PORTADAS/Portada17.jpg",
        "./asset/AUDIOS/Audio18-1.mp3"
    ),


    new canciones(
        19,
        "La Corriente",
        "Prince Royce",
        "Llamada Perdida",
        "2024",
        "03:03",
        "Urbano",
        "./asset/PORTADAS/Portada17.jpg",
        "./asset/AUDIOS/Audio19-1.mp3"
    ),


    new canciones(
        20,
        "Un Papel",
        "Prince Royce",
        "Llamada Perdida",
        "2024",
        "03:36",
        "Urbano",
        "./asset/PORTADAS/Portada17.jpg",
        "./asset/AUDIOS/Audio20-1.mp3"
    ),

    new canciones(
        21,
        "Morfina",
        "Prince Royce ft Paloma Mami",
        "Llamada Perdida",
        "2024",
        "03:49",
        "Urbano",
        "./asset/PORTADAS/Portada17.jpg",
        "./asset/AUDIOS/Audio21-1.mp3"
    ),

    new canciones(
        22,
        "Gordo",
        "Camilo",
        "Un",
        "2024",
        "03:40",
        "Pop",
        "./asset/PORTADAS/Portada22.jpg",
        "./asset/AUDIOS/Audio22-1.mp3"
    ),

    new canciones(
        23,
        "No Se Vale",
        "Camilo",
        "Un",
        "2024",
        "03:00",
        "Pop",
        "./asset/PORTADAS/Portada22.jpg",
        "./asset/AUDIOS/Audio23-1.mp3"
    ),

    new canciones(
        24,
        "Plis",
        "Camilo ft Evaluna Montaner",
        "Un",
        "2024",
        "03:42",
        "Pop",
        "./asset/PORTADAS/Portada22.jpg",
        "./asset/AUDIOS/Audio24-1.mp3"
    ),

    new canciones(
        25,
        "Mirando a la luna",
        "Beret y Reik",
        "Resilencia",
        "2022",
        "03:09",
        "Pop",
        "./asset/PORTADAS/Portada25.png",
        "./asset/AUDIOS/Audio25-1.mp3"
    ),
    new canciones(
        26,
        "Beso robado",
        "Beret",
        "Resilencia",
        "2022",
        "04:19",
        "Pop",
        "./asset/PORTADAS/Portada25.png",
        "./asset/AUDIOS/Audio26-1.mp3"
    ),
    new canciones(
        27,
        "Perderte",
        "Beret",
        "Resilencia",
        "2022",
        "02:45",
        "Pop",
        "./asset/PORTADAS/Portada25.png",
        "./asset/AUDIOS/Audio27-1.mp3"
    ),

    new canciones(
        28,
        "Tu Tattoo",
        "Natti Natasha",
        "Nasty",
        "2023",
        "02:37",
        "Urbano",
        "./asset/PORTADAS/Portada28.jpg",
        "./asset/AUDIOS/Audio28-1.mp3"
    ),

    new canciones(
        29,
        "Ya No Te Extraño",
        "Natti Natasha",
        "Nasty",
        "2023",
        "03:10",
        "Urbano",
        "./asset/PORTADAS/Portada28.jpg",
        "./asset/AUDIOS/Audio29-1.mp3"
    ),

    new canciones(
        30,
        "Wow BB",
        "Natti Natasha ft El Alfa ft Chimbala",
        "Nasty",
        "2023",
        "03:11",
        "Urbano",
        "./asset/PORTADAS/Portada28.jpg",
        "./asset/AUDIOS/Audio30-1.mp3"
    ),
];



let listaActiva = 'Todos';


class Playlists {
    constructor({ nombrePlaylist, cancionEnLista = [], conteiner }) {
        this.currentIndex = 0
        this.nombrePlaylist = nombrePlaylist;
        this.cancionEnLista = cancionEnLista;
        this.conteiner = conteiner;
    }

    renderList() {
        if (this.cancionEnLista === 0) this.conteiner.innerHTML = ``;
        else
            this.conteiner.innerHTML = this.cancionEnLista.map(
                (song, index) => `
        <div class="busquedacanciones">
        <img class= "portada-cancion" src=${song.caratula} alt="portada-canciones">
        <div class="cancion"> 
          <div class="nombre-cancion">${song.nombre}</div>
          <div class="artista">${song.artista}</div> 
        </div>
       
        <div class="butonesCancion">
            <button id="${index + 1}"><img src="./asset/play-solid.svg" alt="play" onClick="reproductor.updateContainer(${song.id},${song.isFavorite},${song.inplaylist})" ></button>

            ${song.isFavorite ?
                        ` <button id="heart-solid"><img src="./asset/heart-regular.svg" alt="corazon" onClick="favoritos.removeCancion(${index})"> </button>`
                        :
                        ` <button id="heart-solid"><img src="./asset/heart-solid.svg" alt="corazon" onClick="favoritos.addCancion(todasLasCanciones[${index}],'favoritos')"> </button>`}
          
           ${song.inplaylist ?
                        `<button id="plus"><img src="./asset/trash-solid.svg" alt="plus"  onClick="playlist1.removeCancion(${index})"></button>`
                        :

                        `<button id="plus"><img src="./asset/plus-solid.svg" alt="plus"  onClick="playlist1.addCancion(todasLasCanciones[${index}], 'playList')"></button>`
            }
        </div>
        </div>`
            );



        let playsong = document.getElementsByClassName("play-boton");
        for (let i = 0; i < playsong.length; i++) {
            playsong[i].addEventListener("click", () => {
                let id = playsong[i].parentElement.getAttribute("data-Song");
                this.currentSong = todasLasCanciones.find((song) => song.id == id);

            });
        }

    }


    searchSong(query) {

        const resultsNombre = this.cancionEnLista.filter((song) =>
            song.nombre.toLowerCase().includes(query.toLowerCase())
        );

      
        const resultsArtista = this.cancionEnLista.filter((song) =>
            song.artista.toLowerCase().includes(query.toLowerCase())
        );

      
        const resultsGenero = this.cancionEnLista.filter((song) =>
            song.genero.toLowerCase().includes(query.toLowerCase())
        );

        let filtroDeCaciones = [
            ...resultsNombre,
            ...resultsArtista,
            ...resultsGenero,
        ];
        filtroDeCaciones = [...new Set(filtroDeCaciones)];

        if (filtroDeCaciones === 0)
            this.conteiner.innerHTML = `No se encontraron canciones`;
        else
            songsConteinerList.innerHTML = filtroDeCaciones.map(
                (song, index) => `
        <div class="busquedacanciones">
        <img class= "portada-cancion" src=${song.caratula} alt="portada-canciones">
        <div class="cancion"> 
          <div class="nombre-cancion">${song.nombre}</div>
          <div class="artista">${song.artista}</div> 
        </div>
                
        <div class="butonesCancion">
        <button id="${index + 1}"><img src="./asset/play-solid.svg" alt="play" onClick="reproductor.updateContainer(${song.id},${song.isFavorite},${song.inplaylist})" ></button>

        ${song.isFavorite ?
                    ` <button id="heart-solid"><img src="./asset/heart-regular.svg" alt="corazon" onClick="favoritos.removeCancion(${index})"> </button>`
                    :
                    ` <button id="heart-solid"><img src="./asset/heart-solid.svg" alt="corazon" onClick="favoritos.addCancion(todasLasCanciones[${index}],'favoritos')"> </button>`}
      
       ${song.inplaylist ?
                    `<button id="plus"><img src="./asset/trash-solid.svg" alt="plus"  onClick="playlist1.removeCancion(${index})"></button>`
                    :

                    `<button id="plus"><img src="./asset/plus-solid.svg" alt="plus"  onClick="playlist1.addCancion(todasLasCanciones[${index}], 'playList')"></button>`
        }  
    </div>
    </div>
        `
            );
    }

    addCancion(cancion, lista) {
        if (!this.cancionEnLista.includes(cancion)) {
            if (lista == 'favoritos') {
                cancion.isFavorite = true

            }

            if (lista == 'playList') {
                cancion.inplaylist = true
            }
            console.log(cancion)

            this.cancionEnLista.push(cancion);
            this.renderList();
        }



    }

    removeCancion(index) {
      
        console.log(index, this.cancionEnLista)
        this.cancionEnLista.splice(index, 1)
        this.renderList();

 
    }



}

const allSongs = new Playlists({
    nombrePlaylist: "Canciones",
    cancionEnLista: todasLasCanciones,
    conteiner: songsConteinerList,
});
const playlist1 = new Playlists({
    nombrePlaylist: "Mi Playlist",
    conteiner: playlistConteinerList,
});
const favoritos = new Playlists({
    nombrePlaylist: "Favoritos",
    conteiner: favoritesConteinerList,
});



class Reproductor {
    constructor(id) {
        this.currentIndex = id
        this.currentSong = todasLasCanciones[id];
        this.audio = new Audio(todasLasCanciones[id].urlCan);

        this.iniciarBotones();

    }


    updateContainer(id, isFavorite, inplaylist) {


        this.audio.pause();
        this.currentSong = '';
        this.audio.src = '';


        let canciones = []

        if (!isFavorite && !inplaylist) {
            listaActiva = 'Todos'
            canciones = todasLasCanciones

        }
        if (isFavorite) {
            listaActiva = 'favoritos'
            canciones = favoritos.cancionEnLista

        }
        if (inplaylist) {
            listaActiva = 'playList'
            canciones = playlist1.cancionEnLista

        }

        canciones.forEach(cancion => {
            if (cancion.id == id) {
                this.currentSong = cancion
                this.audio.src = cancion.urlCan
            }
        })



        const reproductorConteiner = document.getElementById("cancion-Reproductor");


        reproductorConteiner.innerHTML = `
            <img id="albumImg" src="${this.currentSong.caratula}" alt="album1">
            <div class="infoCancion">
                <p>Nombre: ${this.currentSong.nombre}</p>
                <p>Duración: ${this.currentSong.duracion}</p>
                <p>Album: ${this.currentSong.album}</p>
                <p>Año: ${this.currentSong.anio}</p>
                <p>Género: ${this.currentSong.genero}</p>
            </div>
          `;



        this.audio.play();
    }
    iniciarBotones = function () {
        let play = document.getElementById("play-button");

        play.addEventListener("click", () => {
            this.audio.play();

        });

        this.audio.addEventListener("ended", () => {
            this.audio.src = "./asset/AUDIOS/";

            this.audio.play();
        });
        const pause = document.getElementById("pause-button");

        pause.addEventListener("click", () => {
            this.audio.pause();
        });

        const mute = document.getElementById("mute-button");

        mute.addEventListener("click", () => {
            this.audio.muted = true;
        });
        const volume = document.getElementById("volume-button");
        volume.addEventListener("click", () => {
            this.audio.muted = false;
        });

        const siguiente = document.getElementById("foward-button");
        siguiente.addEventListener('click', () => {

            let canciones = []
            if (listaActiva == 'favoritos') {
                canciones = favoritos.cancionEnLista

            } else {
                if (listaActiva == 'playList') {
                    canciones = playlist1.cancionEnLista

                } else {
                    canciones = todasLasCanciones
                }
            }



            if (this.currentIndex === (canciones.length - 1)) {
                let nextIndex = this.currentIndex + 1
                this.updateContainer(canciones[nextIndex].id, canciones[nextIndex].isFavorite, canciones[nextIndex].inplaylist);
                this.currentIndex = 0
            }
            else {
                let nextIndex = this.currentIndex + 1
                this.updateContainer(canciones[nextIndex].id, canciones[nextIndex].isFavorite, canciones[nextIndex].inplaylist);
                this.currentIndex++
            }

        })

        const atras = document.getElementById("back-button");
        atras.addEventListener("click", () => {
            let canciones = []
            if (listaActiva == 'favoritos') {
                canciones = favoritos.cancionEnLista

            } else {
                if (listaActiva == 'playList') {
                    canciones = playlist1.cancionEnLista

                } else {
                    canciones = todasLasCanciones
                }
            }


            if (this.currentIndex === 0) {
                let prevIndex = this.currentIndex - 1
                this.updateContainer(canciones[prevIndex].id, canciones[prevIndex].isFavorite, canciones[prevIndex].inplaylist);
                this.currentIndex = 0
            }
            else {
                let prevIndex = this.currentIndex - 1
                this.updateContainer(canciones[prevIndex].id, canciones[prevIndex].isFavorite, canciones[prevIndex].inplaylist);
                this.currentIndex--
            }
        });

    };



}



const reproductorConteiner = document.getElementById("cancion-Reproductor");


let reproductor = new Reproductor(0);

reproductorConteiner.innerHTML = ` 
<img id="albumImg" src="${reproductor.currentSong.caratula}" alt="album1">
                <div class="infoCancion">
                    <p>Nombre: ${reproductor.currentSong.nombre}</p>
                    <p>Duración: ${reproductor.currentSong.duracion}</p>
                    <p>Album: ${reproductor.currentSong.album}</p>
                    <p>Año: ${reproductor.currentSong.anio}</p>
                    <p>Género: ${reproductor.currentSong.genero}</p>
                </div>
                
`;


allSongs.renderList();
playlist1.renderList();
favoritos.renderList();


const searchInput = document.getElementById("input-buscardor");
const searchButton = document.getElementById("botonBuscar");
searchButton.addEventListener("click", () => {
    allSongs.searchSong(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        allSongs.searchSong(searchInput.value);
    }
});
