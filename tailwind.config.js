export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: {
          max: '1023px'
        },
        mobile: {
          max: '767px'
        }
      },
      colors: {
        'input': '#1B2631',
        'body': '#060301',
        'error-background': '#AD0000',
        'error-text': '#FF3E3E',
        'gr-button-default-start': '#96D9FF66',
        'gr-button-default-end': '#4BBFFF66',
        'gr-button-error-start': '#FD676766',
        'gr-button-error-end': '#FF4B4B66'
      },
      height: {
        'logo': '100px'
      },
      width: {
        'logo': '224px'
      },
      backgroundImage: {
        'logo': 'url(@images/logo.svg)',
        'vkontakte-icon': 'url(@images/vkontakte.svg)',
        'odnoklassniki-icon': 'url(@images/odnoklassniki.svg)',
        'sber-icon': 'url(@images/sber.svg)',
        'yandex-icon': 'url(@images/yandex.svg)',
      },
      fontFamily: {
        'golos': ['Golos Text', 'sans-serif'],
      }
    },
  }
}

