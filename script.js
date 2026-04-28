const passwordCorrecta = "230422"; 

function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input === passwordCorrecta) {
        document.getElementById('lock-screen').classList.add('hidden');
        document.getElementById('desktop').classList.remove('hidden');
    } else {
        alert("Si esta pagina no es para ti, no entres por favor.");
    }
}

function openYear(num) {
    const windowEl = document.getElementById('year-window');
    const title = document.getElementById('window-title');
    const content = document.getElementById('content-area');
    
    title.innerText = "Recuerdos - Año " + num;
    windowEl.classList.remove('hidden');

    const datosPorAño = {
        1: {
            recuerdos: [
                { img: "img/1er/imagen0.jpg", txt: "Aquí empezó nuestra historia... epoca de cuarentena jaja 😅, una invitación pilla para dar un paseito en bici, el cual era de las primeras veces que saliamos juntitos 🤭" },
                { img: "img/1er/imagen26.jpg", txt: "Pero antes, veamos el origen y el lugar donde nos conocimos realmente. 😏" },
                { img: "img/1er/imagen12.jpg", txt: "La escola industrial de sabadell, el famoso lugar donde nos conocimos y estudiamos claro, el primer año eramos amigos y ya el segundo nos dimos a conocer mejor. 😍" },
                
                { img: "img/1er/imagen25.jpg", txt: "Paseamos con el Niko, en el corte ingles, en el ikea, por todos lados jaja" },
                { img: "img/1er/imagen27.jpg", txt: "Montando bici tambien! no recuerdo si fuimos a Castellar o a Barcelona, pero ahi esta la foto." },
                

                { img: "img/1er/imagen10.jpg", txt: "Tambien saliamos a comer, al viena ristorante, como olvidar la pasta con huevo frito que queria. 😅" },
                { img: "img/1er/imagen23.jpg", txt: "Luego poco a poco nos fuimos escapando los dos solitos 😅, pasabamos más tiempo los dos juntitos." },
                { img: "img/1er/imagen11.jpg", txt: "Apartir de ahi ya saliamos más seguido los dos, paseito por ahi y por allá despues de clase, hablando de todo y de nada. 🫣" },
                

                
                
                { img: "img/1er/imagen1.jpg", txt: "Nuestra primera salida juntos: Esto ya es más parecido a una cita jaja. Fue increible, aqui nos reiamos de todo, todos los chistes eran buenos y los cumplidos muy inocentes tambien. 😇" },
                { img: "img/1er/imagen2.jpg", txt: "Un momento inolvidable, fuimos a la maquinota, para buscar una chaqueta para tu primo Omar, luego nos probamos ropa y surgio esta foto, diria que ya eramos novios. 🙃" },
                { img: "img/1er/imagen3.jpg", txt: "Esa sonrisa que me enamoró. Antes que fueras a tunez apareció esta oportunidad, ya que no estaba planeado para nada vernos ese dia pero surgió por el vuelo cancelado, me dijiste que me acerque y asi lo hice. 🫣." },
                { img: "img/1er/imagen9.jpg", txt: "Paseito por la tarde, conociendonos como amigos pero ya con otros ojos, al menos yo y tú creo que tambien. 😏" },
                { img: "img/1er/imagen4.jpg", txt: "Super timidos Jajaja, esta fue de nuestras citas oficiales, a pesar de que eramos novios manteniamos distancia e incluso de la mano ibamos como abulitos jaja. 😂" },
                { img: "img/1er/imagen5.jpg", txt: "Pedazo fotooo! Foto patrocinada por el Niko, muy buena foto, salimos muy guapos jaja, aun estamabos en la escola industrial pero ya empezabamos a pillar carrerilla en cuanto a mimos. 🥰" },
                { img: "img/1er/imagen24.jpg", txt: "Me encanta como nos vemos aqui, no solo por la calidad, sino que plasma direcatemnte nuestros primeros sentimientos, inocentes e intensos al mismo tiempo. 🫣" },
                { img: "img/1er/imagen6.jpg", txt: "En el puente, una foto que demustra que ya no teniamos tanta timidez jaja, una tarde tranquila hablando y paseando, muy risueños. 🤭" },
                { img: "img/1er/imagen7.jpg", txt: "Nuestra primera vez en la playita, tambien nuestro primer verano, que bien te quedaba el bikini 😍, ese mismo dia me hiciste nadar hasta las boyas amarillas y casi me desmayo jaja.   " },
                { img: "img/1er/imagen8.jpg", txt: "Camping con tu mami y la yaya amor, sin duda fue inolvidable. 😇, no encontré fotos de este momento pero esto lo representa en su mayoria. 🤭" },
                { img: "img/1er/imagen22.jpg", txt: "Tu cumple numero 21, tambien era la primera vez que conocia a toda tu familia, a tus tios: Maite, Santi y Mariajo que hablamos sobre sus actividades y jugamos con el Eloy y la Elsa. 🙃 " },
            
            ],
            videos: [
                { src: "img/1er/video.mp4", txt: "Esto fue despues de cenar sushi con unos primos de burgos, estabamos tonteando más adelante. 😅" },
                { src: "img/1er/Melika.mp4", txt: "Este video lo cambió todo amor, fue el primer paso gigante entre nosotros 🫣" }, 
                { src: "img/1er/video2.mp4", txt: "Video rescatado de por ahí. 😅" },
                { src: "img/1er/video3.mp4", txt: "Vaile peruano en casa de mi tia, jajaj el huaino se zapatea, parece aleatorio pero nada que ver 😅." },
                { src: "img/1er/video4.mp4", txt: "Momento en el cochet jaja, no recuerdo exactamante que estabamos esperando, pero algo estabamos haciendo. 😅" }
            ]
        },
        2: {
            recuerdos: [
                { img: "img/2do/imagen8.jpg", txt: "Primeras fiestas! Conociendo a la familia por primera vez, fiesta de año nuevo en casa de mi tia, lo recuerdo muy bonito y mágico. Esto es practicamente al principio de año. 🙃" },
                { img: "img/2do/imagen.jpg", txt: "Empezamos nuestro segundo año en casa de mi tia, creo que fue la primera vez que viniste con mi familia y" },

                { img: "img/2do/imagen0.jpg", txt: "Salida al observatorio, nuestro lugar favorito más cercano donde nos escapamos a veces, fue en pleno verano y el lugar de mi cuadrito de regalo. 🥰 " },    
                { img: "img/2do/imagen1.jpg", txt: "Festival observaa en el observatorio jaa, fue una tarde increible con buen clima y nosotros tan nosotros como siempre jajaja." },
                { img: "img/2do/imagen16.jpg", txt: "Un dia cotidiano que fui a visitarte despues de clases e ibamos vestidos a juego jaja." },
                { img: "img/2do/imagen2.jpg", txt: "De compras en la maquinotaa, nuevamente ibamos a juego en vestimenta y tu con el cabello al aire. 😍" },
                { img: "img/2do/imagen17.jpg", txt: "Esta vez si nos pusimos deacuerdo para vestirnos iguales! de rojo y jeans, luego un paseo." },
                { img: "img/2do/imagen3.jpg", txt: "Otro dia en el observatorio, ya de tarde y con planes de cenar, completamente ya en confianza jaja. " },
                { img: "img/2do/imagen4.jpg", txt: "Fuimos con tu mami a monjuic y dió la casualidad (otra vez) que nos vestimos igual!!!" },
                { img: "img/2do/imagen5.jpg", txt: "Viajecito a Italia, en familia con la yaya y tu mami, pedazo fondo eh y que rica estaba la cena de ravioles. 😋" },
                { img: "img/2do/imagen9.jpg", txt: "Me encanta esta foto, norte de Italia me enamoró, porque estabas tú. 😘" },
                { img: "img/2do/imagen6.jpg", txt: "Paseito alrededor del obvservatorioo, buscando sol que hacia fresquito, seguro luego cenamos juntitos. 🤗" },
                { img: "img/2do/imagen7.jpg", txt: "Salida a Barcelona a visitar museos y a pasear por las callecitas descubriendo nuevas plazas, con mochila y todo jaja, fue muy divertido." },
                
                
                { img: "img/2do/imagen10.jpg", txt: "Este dia hubo una fiesta de mi familia, de las primeras, creo que era de mis tios. " },
                { img: "img/2do/imagen11.jpg", txt: "Un paseito con, creo que hacia mucho frio al parecer jajaja." },
                { img: "img/2do/imagen12.jpg", txt: "Cuando nos atrevimos a salir de noche solos y fuimos a un bar a tomar algo en el centro de sabadell jaja." },
                { img: "img/2do/imagen13.jpg", txt: "Esta fotito es increible amor, super inocentes aun, no hay forma describir como me sentia en ese momento. 🤗❤️" },
                { img: "img/2do/imagen14.jpg", txt: "Paseito en el cocge por la tarde, jaja yo haciendome el distraido para la foto." },
                { img: "img/2do/imagen15.jpg", txt: "Nosotros poniendonos cosas del tedi jaja" },          
                
                { img: "img/2do/imagen18.jpg", txt: "En san juan, fuimos con tus primos y Maite a reventar petardos, fue muy divertido." },
                { img: "img/2do/imagen19.jpg", txt: "Esto es cangambus, no se como se escribe jaja, era antes de ver una peli diria yo." }

            ],
            videos: [
                { src: "img/2do/1ervideo.mp4", txt: "Video improvisadooo!!" },
                { src: "img/2do/3ervideo.mp4", txt: "Concierto con lluvia en el eix!! 😅" },
                { src: "img/2do/2dovideo.mp4", txt: "Este video es de nuestro 3er mesesario pero ahi va. 😅🥰" }
            ]
        },
        3: {
            recuerdos: [
                { img: "img/3ro/imagen0.jpg", txt: "Tibidaboo, con tus primos, super guay el dia, son muy majos tu tia y tus primos, siempre me gusta salir con ellos! 🤗" },
                { img: "img/3ro/imagen2.jpg", txt: "Un dia de farra, de las primeras farras cuando ibamos solitos, 😅 pero ahora es mejor en grupo. 😎" },
                { img: "img/3ro/imagen1.jpg", txt: "Mas fiestas familiares! con mi madre otro fin de año increible en casa de mi tia. 😊" },
                { img: "img/3ro/imagen3.jpg", txt: "Tú siempre tan guapa en cualquier momento, yo esperando a que termines para poder pasear. 😅" },
                { img: "img/3ro/imagen4.jpg", txt: "En el museo de mounjic, sin duda te escapaste del cuadro. 😍" }

            ],
            videos: [
                { src: "img/3ro/mon.mp4", txt: "En la coral, que fuimos con tu mami y la yaya! 😴😅" },
                { src: "img/3ro/video1.mp4", txt: "Visitando museo de cataluña con musica en vivo!" },
                { src: "img/3ro/video2.mp4", txt: "Axolotes en la tienda de animales. 🤔" }
            ]
        },
        4: {
            recuerdos: [
                { img: "img/4to/imagen1.jpg", txt: "En platja d'Aro, que guapisimaa, paseo y sesion de fotos que siguen guardadas... 🫣" },
                { img: "img/4to/imagen2.jpg", txt: "En platja d'Aro, que guapisimaa, paseo y sesion de fotos que siguen guardadas... 🫣" },
                { img: "img/4to/imagen2.jpg", txt: "En platja d'Aro, que guapisimaa, paseo y sesion de fotos que siguen guardadas... 🫣" }
            ],
            videos: [
                { src: "img/4to/video.mp4", txt: "¡Llegamos a los 4 años! Te amo ❤️" },
                { src: "img/4to/video2.mp4", txt: "Otro momento especial del cuarto año" }
            ]
        },
        5: {
            recuerdos: [],
            videos: []
        }
    };

    const info = datosPorAño[num];

    if (info) {
        let html = "";
        
        // Renderizar Fotos
        info.recuerdos.forEach((item, index) => {
            html += `
                <div class="memory-item">
                    <div>
                        <h3>${index + 1}º Recuerdo 🥰</h3>
                        <img src="${item.img}" class="memory-photo" alt="Foto">
                    </div>
                    <p class="dedicatoria">${item.txt}</p>
                </div>
            `;
        });

        // Renderizar TODOS los videos del año
        if (info.videos && info.videos.length > 0) {
            info.videos.forEach((vid, vIndex) => {
                html += `
                    <div class="memory-item">
                        <div>
                            <h3>Video ${vIndex + 1}º 😏</h3>
                            <video controls class="memory-video">
                                <source src="${vid.src}" type="video/mp4">
                                Tu navegador no soporta video.
                            </video>
                        </div>
                        <p class="dedicatoria">${vid.txt}</p>
                    </div>
                `;
            });
        }

        content.innerHTML = html;
    }
    content.scrollTop = 0;
}   

function closeYear() {
    document.getElementById('year-window').classList.add('hidden');
}

// Reloj dinámico
setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}, 1000);