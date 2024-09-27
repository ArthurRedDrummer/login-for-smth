export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        'input': '#1B2631',
        'body': '#060301',
        'gr-button-start': '#96D9FF66',
        'gr-button-end': '#4BBFFF66'
      },
      height: {
        'logo': '100px'
      },
      width: {
        'logo': '224px'
      },
      backgroundImage: {
        'main-background': 'url(@images/background.jpg)',
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

