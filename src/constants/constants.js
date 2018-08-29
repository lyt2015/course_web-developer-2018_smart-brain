export const REQUEST_USERS_PENDING = 'REQUEST_USERS_PENDING'
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS'
export const REQUEST_USERS_FAIL = 'REQUEST_USERS_FAIL'

export const particlesOptions = {
  particles: {
    number: {
      value: 4,
      density: {
        enable: true,
        value_area: 160,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#222',
        blur: 5,
      },
    },
    move: {
      speed: 6,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
    },
    detect_on: 'window',
  },
}
