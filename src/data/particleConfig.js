export default {
    fullScreen: false,
    background: {
      color: {
        value: "#000"
        

      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#ffffff"],
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.2,
        width: 0.1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 786,
        },
        value: 400,
      },
      opacity: {
        value: 0.4,
        random :true,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 1.5 },
      },
    },
    detectRetina: true,
  }