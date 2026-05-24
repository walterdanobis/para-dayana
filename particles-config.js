particlesJS("particles-js", {

  particles: {

    number: {
      value: 100
    },

    color: {
      value: "#ffffff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 3
    },

    move: {
      enable: true,
      speed: 1
    },

    line_linked: {

      enable: true,

      distance: 150,

      color: "#ffffff",

      opacity: 0.2,

      width: 1
    }
  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {

        enable: true,

        mode: "repulse"
      },

      onclick: {

        enable: true,

        mode: "push"
      }
    },

    modes: {

      repulse: {

        distance: 100
      },

      push: {

        particles_nb: 4
      }
    }
  },

  retina_detect: true
});