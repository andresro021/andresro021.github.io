/* ============================================================
   CARTA VIRTUAL DE SAN VALENTÍN — script.js
   Interactividad, animaciones, partículas, música y personalización
   ============================================================ */

// ─────────────────────────────────────────────
// 📝  VARIABLES DE PERSONALIZACIÓN
//     Modifica estos valores para personalizar la carta
// ─────────────────────────────────────────────
const CONFIG = {
  // Nombre de la persona destinataria
  recipientName: 'Majo',

  // Mensaje principal de la carta
  mainMessage: `Como ya sabes, hoy cumplimos un mes juntos desde que llegaste a mi vida lit, y desde entonces todo tiene un toque diferente, especial sadjksdajk. No sé cómo explicarlo, pero hay personas que simplemente iluminan el día sin esfuerzo, y tú eres esa persona.

Cada momento a tu lado se siente lleno de risas(burlasss) (aunque me gusta, lo admito) y de esas conversaciones que uno no quiere que terminen. Gracias por ser esa persona que hace que todo sea más bonito con solo estar. 

No tienes ideda  de lo especial que me hizo sentir leer el HERMOSO detalle que me hiciste, aun que dijiste que el dibujo no es la gran cosa para ti quiero que sepas que se volvio una gran cosa importante para mi porque viene de ti y eso lo hace único sdjakdsakjsda (incluso lo puedes ver que hasta lo puse de fondo)

La verdad es que también disfruto demasiado pasar tiempo contigo no me importa si estamos hablando de cualquier cosa, jugando, viendo algo o simplemente enviándonos mensajes (Aunque te la pases ignorandome pero creo que poco a poco me voy acostumbrando a esa parte de ti) contigo todo se siente diferente, más bonito. Y sí, admito que también espero tus mensajes, porque cuando veo que eres tú se me cambia el ánimo sin darme cuenta JSDAJSDAJK que pena

Me gusta cómo compartimos la mayoría de los gustos, cómo podemos hablar de todo, cómo haces que momentos simples se vuelvan especiales, para mí no es solo el tiemp es la forma en la que se siente estar contigo y pues como ya te dije eso no me pasa, solo contigo aunque me pones muy nervioso

Gracias por estar, por darme tu tiempo, por incluirme en tu día y por hacerme sentir importante. De verdad te has convertido en alguien muy especial para mí también. Y aunque suene repetitivo, no me canso de decirlo: me encanta compartir contigo y espero que podamos seguir creando recuerdos, conversaciones largas y momentos bonitos por mucho tiempo más.

Gracias por estar, por darme tu tiempo, por incluirme en tu día y por hacerme sentir importante, no sabes que de verdad te has convertido en alguien muy especial e importante, y no me importa que aunque suene repetitivo, no me canso de decirlo y es que pues sadkjsdakjkdsa me encanta compartir contigo y espero que podamos seguir creando recuerdos, conversaciones largas y momentos bonitos por mucho tiempo más (para siempre, porfi)

Y perdón si esto fue muy cursi... Pude haberlo mucho más largo pero creo que ya fue suficiente y no quiero sonar tan no sé, tan intenso o algo así, aunque ya lo soy sadjksdajk; Por ciertooo, si no te has dado cuentaaaa, hay un boton de música, reproducela, me puse a escuchar taylor y senti que 6 canciones te identificaba contigo (realmente fueron más) pero me refiero a las que podía poner acá para la ocasión DJKSADK y no podía poner todas así que elegí una, espero te guste:3
`,

  // Frase de cierre
  closingPhrase: 'Con todo mi cariño,',

  // Firma
  signature: '💕 Tu amigo',

  // Ruta de música (archivo en carpeta music/)
  musicPath: 'music/taylor.mp3',

  // Imágenes para la galería con título y descripción
  photos: [
    {
      src: 'images/amarrados.jpeg',
      title: 'Amarrados 🎀',
      description: 'Así estaremos amarrados por el resto de nuestras vidas, no por el lazó no, si no por el contrato-juramento que tenemos tu y yo, pero quiero que sepas que aún así no tengamos eso, jamás te dejaré ir eh, al menos que consigas a alguien y se sienta inseguro ahí si me toca alejarme de ti aunque no quiera :c',
    },
    {
      src: 'images/ara.jpeg',
      title: 'Aracnidos 🕷️',
      description: 'AJAJAJ las veces que jugamos esto y todas las veces que intentamos pasarlo sdajksdak hasta gastamos robux para intentarlo nuevamente y no repetirlo porque alguien le encanta caerse y depender de mi, ¿Qué harías tu sin mi? Creo que lo mismo me pregunto ¿Qué haría yo sin ti?',
    },
    {
      src: 'images/fav.jpeg',
      title: 'Mi foto favorita 💖',
      description: 'Esta será la foto que siempre me sacará miles de sonrisas sin importar cuántas veces la vea, te agradezco demasiado por haberme hecho este regalo que para mi se volvio mi fav sin duda alguna',
    },
    {
      src: 'images/foto.jpeg',
      title: 'Yo📸',
      description: 'Amo como me hiciste acá, te quedo super genialll!!!',
    },
    {
      src: 'images/foto2.jpeg',
      title: 'Tú✨',
      description: 'Una más para la colección de recuerdos que no quiero olvidar jamás, a tí',
    },
    {
      src: 'images/llamada.jpeg',
      title: 'Llamadas eternas 📞',
      description: 'Son las llamadas más largas que he tenido con alguien y las mejores en toda mi vida, aunque lastima que el tiempo se pase volando sin darnos cuenta.',
    },
    {
      src: 'images/maltrato.jpeg',
      title: '#bullying😂',
      description: 'No sabes lo muy augusto que me la paso contigo, cada risa, cada BURLA de tu parte, todo momento, amo',
    },
    {
      src: 'images/nieve.png',
      title: 'Día de nieve ❄️',
      description: 'Aunque no lo termine contigo, me agrado mucho este dia donde estabamos escalando juntos, aunque me morí varias veces las risas y las burlas no faltaron adsjkdaskj',
    },
    {
      src: 'images/perra.png',
      title: 'La perra🐾',
      description: 'ADSDJSKADSJKJDAS AMOOOOO',
    },
    {
      src: 'images/perro.jpeg',
      title: 'El perro 🐶',
      description: 'Me haces bullying, me tratas mal, acá evidencias eh',
    },
    {
      src: 'images/pingu.jpeg',
      title: 'Modo pingüino 🐧',
      description: 'A veces somos tan torpemente tiernos como un par de pingüinos adskjdsakjasjk, amo esta foto, nos vemos lindos',
    },
    {
      src: 'images/terror.jpeg',
      title: 'Noche de terror 👻',
      description: 'No tengo fotos de cuando estabamos en shawarma entonces me toco poner una foto de ti JSDKAKSDA, pero amo todas las noches en las cuales intentamos pasar shawarma eh lo pasamos, somos unos pros ya, y todavía recuerdo todas las veces que me sacabas de ahí, que me hacías bullying, recuerdo todos los malos tratos junto a la pared',
    },
    {
      src: 'images/twins.jpeg',
      title: 'Twins 👯',
      description: 'Cuando conectamos en varias cosas sin pensarlo, así de la nada, TWINS',
    },
  ],

  // Ángulos de rotación de las polaroids (en grados)
  polaroidAngles: [-3, 2, -2, 3, -1, 2, -3, 1, -2, 3, -1, 2, -3],
};

// ─────────────────────────────────────────────
// INICIALIZACIÓN
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  populateLetter();
  populateGallery();
  createFloatingHearts();
  createBackgroundHearts();
  initEnvelope();
  initWelcomeButton();
  initMusic();
  initMouseHearts();
  initScrollReveal();
});

// ─────────────────────────────────────────────
// 1. RELLENAR CONTENIDO DE LA CARTA
// ─────────────────────────────────────────────
function populateLetter() {
  // Fecha automática
  const dateEl = document.getElementById('letter-date');
  if (dateEl) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('es-ES', options);
  }

  // Nombre
  const greetingEl = document.getElementById('letter-greeting');
  if (greetingEl) {
    greetingEl.textContent = `Para ${CONFIG.recipientName} 💌`;
  }

  // Mensaje
  const bodyEl = document.getElementById('letter-body');
  if (bodyEl) {
    // Convertir saltos de línea en <br>
    bodyEl.innerHTML = CONFIG.mainMessage.replace(/\n/g, '<br>');
  }

  // Cierre
  const closingEl = document.getElementById('letter-closing');
  if (closingEl) {
    closingEl.textContent = CONFIG.closingPhrase;
  }

  // Firma
  const signatureEl = document.getElementById('letter-signature');
  if (signatureEl) {
    signatureEl.textContent = CONFIG.signature;
  }
}

// ─────────────────────────────────────────────
// 2. GALERÍA POLAROID (con título + descripción)
// ─────────────────────────────────────────────
function populateGallery() {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  CONFIG.photos.forEach((photo, i) => {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid scroll-reveal';
    polaroid.style.setProperty('--rotate', `${CONFIG.polaroidAngles[i] || 0}deg`);

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.title;
    img.loading = 'lazy';

    // Placeholder de color si la imagen no carga
    img.onerror = function () {
      this.style.background = `linear-gradient(135deg, #ffd6e0, #ffb3c6)`;
      this.style.display = 'flex';
      this.alt = '📷';
    };

    // Título de la foto
    const title = document.createElement('h3');
    title.className = 'polaroid-title';
    title.textContent = photo.title;

    // Descripción / párrafo breve
    const desc = document.createElement('p');
    desc.className = 'polaroid-desc';
    desc.textContent = photo.description;

    polaroid.appendChild(img);
    polaroid.appendChild(title);
    polaroid.appendChild(desc);
    gallery.appendChild(polaroid);
  });
}

// ─────────────────────────────────────────────
// 3. CORAZONES FLOTANTES (Welcome Screen)
// ─────────────────────────────────────────────
function createFloatingHearts() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  // Flores específicas: lirios del valle, tulipanes, hortensias, rosas inglesas
  const petals = ['🌷', '🌹', '💮', '🏵️', '❤', '💕', '💗', '💖', '♥', '✿'];
  const count = 25;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = petals[Math.floor(Math.random() * petals.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty('--dur', `${6 + Math.random() * 8}s`);
    heart.style.setProperty('--delay', `${Math.random() * 8}s`);
    heart.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
    heart.style.opacity = 0.2 + Math.random() * 0.4;
    container.appendChild(heart);
  }
}

// ─────────────────────────────────────────────
// 4. CORAZONES DE FONDO (main content)
// ─────────────────────────────────────────────
function createBackgroundHearts() {
  const body = document.body;
  const hearts = ['♥', '❤', '💗'];
  const count = 10;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'bg-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '-30px';
    heart.style.setProperty('--dur', `${10 + Math.random() * 10}s`);
    heart.style.setProperty('--delay', `${Math.random() * 12}s`);
    heart.style.fontSize = `${1 + Math.random() * 1.5}rem`;
    body.appendChild(heart);
  }
}

// ─────────────────────────────────────────────
// 5. BOTÓN DE BIENVENIDA
// ─────────────────────────────────────────────
function initWelcomeButton() {
  const btn = document.getElementById('btn-open');
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainContent = document.getElementById('main-content');

  if (!btn || !welcomeScreen || !mainContent) return;

  btn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    // Pequeño delay para la transición
    setTimeout(() => {
      mainContent.classList.add('visible');
    }, 400);
  });
}

// ─────────────────────────────────────────────
// 6. SOBRE ANIMADO
// ─────────────────────────────────────────────
function initEnvelope() {
  const wrapper = document.querySelector('.envelope-wrapper');
  const envelope = document.querySelector('.envelope');
  const letterContainer = document.querySelector('.letter-container');

  if (!wrapper || !envelope) return;

  let isOpen = false;

  wrapper.addEventListener('click', () => {
    if (isOpen) return;
    isOpen = true;

    envelope.classList.add('open');

    // Mostrar la carta con delay
    setTimeout(() => {
      if (letterContainer) {
        letterContainer.classList.add('visible');
      }
      // Lanzar confetti 🎉
      launchConfetti();
    }, 600);

    // Scroll suave a la carta
    setTimeout(() => {
      letterContainer?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 1400);
  });
}

// ─────────────────────────────────────────────
// 7. CONFETTI 🎊
// ─────────────────────────────────────────────
function launchConfetti() {
  const colors = [
    '#ff6b8a', '#ffb3c6', '#ffd6e0', '#ff8fab',
    '#c9184a', '#f0d9b5', '#d4a574', '#ff4d6d',
    '#ff85a1', '#fbb1bd',
  ];
  const count = 60;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--fall-dur', `${2 + Math.random() * 3}s`);
    piece.style.setProperty('--fall-delay', `${Math.random() * .8}s`);
    piece.style.setProperty('--rz', `${Math.random() * 720}deg`);
    piece.style.setProperty('--rx', `${Math.random() * 360}deg`);
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${8 + Math.random() * 10}px`;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';

    document.body.appendChild(piece);

    // Remover tras la animación
    const totalDur = (2 + 3) * 1000 + 800 + 500;
    setTimeout(() => piece.remove(), totalDur);
  }
}

// ─────────────────────────────────────────────
// 8. MÚSICA
// ─────────────────────────────────────────────
function initMusic() {
  const btn = document.getElementById('music-toggle');
  if (!btn) return;

  const audio = new Audio(CONFIG.musicPath);
  audio.loop = true;
  audio.volume = 0.4;

  let isPlaying = false;

  btn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      btn.textContent = '🎵';
      btn.classList.remove('playing');
      btn.title = 'Activar música';
    } else {
      audio.play().catch(() => {
        console.log('El navegador bloqueó la reproducción automática.');
      });
      btn.textContent = '🔇';
      btn.classList.add('playing');
      btn.title = 'Silenciar música';
    }
    isPlaying = !isPlaying;
  });
}

// ─────────────────────────────────────────────
// 9. CORAZONES AL MOVER EL MOUSE
// ─────────────────────────────────────────────
function initMouseHearts() {
  let lastTime = 0;
  const throttleMs = 120;
  const hearts = ['❤', '💕', '♥', '💗', '🌷'];

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < throttleMs) return;
    lastTime = now;

    const heart = document.createElement('span');
    heart.className = 'mouse-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    heart.style.setProperty('--dx', `${(Math.random() - 0.5) * 40}px`);
    heart.style.fontSize = `${0.7 + Math.random() * 0.8}rem`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  });
}

// ─────────────────────────────────────────────
// 10. SCROLL REVEAL (Intersection Observer)
// ─────────────────────────────────────────────
function initScrollReveal() {
  const elements = document.querySelectorAll('.scroll-reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// ─────────────────────────────────────────────
// 11. PARALLAX SUAVE (fondo decorativo)
// ─────────────────────────────────────────────
(function initParallax() {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const bgDeco = document.querySelector('.bg-decoration');
        if (bgDeco) {
          bgDeco.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();
