/* BOTÓN PRINCIPAL */

function activarMagia() {

  const titulo = document.querySelector("h1");

  const texto = document.querySelector("p");

  const musica = document.getElementById("musica");

  const girl = document.querySelector(".anime-girl");

  const luna = document.querySelector(".luna");

  /* CAMBIAR MENSAJE */

  titulo.innerHTML = "💖";

  texto.innerHTML = `
    Hay noches más bonitas <br>
    cuando alguien especial mira la luna 🌙
  `;

  /* MÚSICA */

  if (dayana) {

    dayana.volume = 0;

    dayana.play().catch(() => {});

    gsap.to(dayana, {

      volume: 0.5,

      duration: 4
    });
  }

  /* TARJETA */

  gsap.fromTo(

    ".card",

    {
      scale: 0.7,
      opacity: 0
    },

    {
      scale: 1,
      opacity: 1,
      duration: 1.5
    }
  );

  /* MUÑEQUITA SE LEVANTA */

  const tl = gsap.timeline();

  tl.to(girl, {

    bottom: "40px",

    duration: 3,

    ease: "power2.out"
  })

  /* MIRA LA LUNA */

  .to(girl, {

    rotate: -3,

    duration: 2,

    ease: "sine.out"
  })

  /* FLOTAR */

  .to(girl, {

    y: -15,

    duration: 2,

    repeat: -1,

    yoyo: true
  });

  /* LUNA MÁS BRILLANTE */

  luna.classList.add("epica");

  /* EMPIEZA LLUVIA */

  setInterval(() => {

    crearLluviaEstrellas();

  }, 700);

  /* PARTÍCULAS AZULES */

  setInterval(() => {

    crearParticulaAzul();

  }, 120);
}

/* LLUVIA DE ESTRELLAS */

function crearLluviaEstrellas() {

  const estrella = document.createElement("div");

  estrella.classList.add("lluvia-estrella");

  estrella.style.top =
    Math.random() * 250 + "px";

  estrella.style.right =
    Math.random() * 400 + "px";

  document.body.appendChild(estrella);

  setTimeout(() => {

    estrella.remove();

  }, 3000);
}

/* PARTÍCULAS AZULES */

function crearParticulaAzul() {

  const p = document.createElement("div");

  p.classList.add("particula-azul");

  p.style.left =
    Math.random() * window.innerWidth + "px";

  p.style.top =
    Math.random() * window.innerHeight + "px";

  document.body.appendChild(p);

  gsap.fromTo(

    p,

    {
      opacity: 0,
      scale: 0
    },

    {
      opacity: 1,
      scale: 1.5,

      duration: 1,

      yoyo: true,

      repeat: 1,

      onComplete: () => {

        p.remove();
      }
    }
  );
}

/* ESTRELLAS PARPADEANDO */

for (let i = 0; i < 120; i++) {

  const estrella = document.createElement("div");

  estrella.classList.add("estrella");

  estrella.style.left =
    Math.random() * window.innerWidth + "px";

  estrella.style.top =
    Math.random() * window.innerHeight + "px";

  estrella.style.animationDuration =
    Math.random() * 3 + 1 + "s";

  document.body.appendChild(estrella);
}

/* CURSOR MÁGICO */

document.addEventListener("mousemove", (e) => {

  const particula = document.createElement("div");

  particula.innerHTML = "✨";

  particula.style.position = "fixed";

  particula.style.left = e.clientX + "px";

  particula.style.top = e.clientY + "px";

  particula.style.pointerEvents = "none";

  particula.style.fontSize = "12px";

  particula.style.zIndex = "999";

  document.body.appendChild(particula);

  gsap.to(particula, {

    y: -30,

    opacity: 0,

    duration: 1,

    onComplete: () => {

      particula.remove();
    }
  });
});