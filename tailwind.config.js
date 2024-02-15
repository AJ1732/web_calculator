/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'input-text': '#818181',
        'blue-dark': '#109DFF',
        'blue-darker': '#17181A',
        'blue-light': '#DAF0FF',

        'lm-bg': '#F7F8FB',
        'lm-num-btn-bg': '#FFFFFF',
        'lm-num-btn-text': '#38B9FF',
        'lm-operator-btn-bg': '#ADE2FF',
        'lm-operator-btn-text': '#109DFF',
        'lm-answer-text': '#424242',
        'lm-action-btn-bg': '#FFFFFF',
        'lm-action-btn-text': '#858585',
        'lm-equal-btn-bg': '#19ACFF',
        'lm-equal-btn-text': '#B2DAFF',
        
        'dm-bg': '#17181A',
        'dm-num-btn-bg': '#303136',
        'dm-num-btn-text': '#29A8FF',
        'dm-operator-btn-bg': '#005DB2',
        'dm-operator-btn-text': '#339DFF',
        'dm-answer-text': '#FFFFFF',
        'dm-action-btn-bg': '#616161',
        'dm-action-btn-text': '#A5A5A5',
        'dm-equal-btn-bg': '#1991FF',
        'dm-equal-btn-text': '#B2DAFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        'calc': 'calc(100vh - 8rem)'
      }

    },
  },
  plugins: [],
}

