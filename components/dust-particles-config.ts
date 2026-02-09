import type { ISourceOptions } from "@tsparticles/engine";

export const dustParticlesConfig: ISourceOptions = {
  fullScreen: {
    enable: false
  },
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
      }
    },
    color: {
      value: "#000"
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: {min: 0.15, max: 0.4},
      animation: {
        enable: false,
      }
    },
    size: {
      value: {min: 1.4, max: 3},
    },
    move: {
      enable: true,
      speed: {min: 1, max: 12},
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },      
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: !0,
        mode: "repulse"
      },
      onClick: {
        enable: !0,
        mode: "push"
      },
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 80,
        duration: .4
      },
      repulse: {
        distance: 100,
        duration: 5,
      },
    },
  },
};
