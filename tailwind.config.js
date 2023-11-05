module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        colors: {
          'primary': {
            '50': '#edf8ff',
            '100': '#d7eeff',
            '200': '#b9e2ff',
            '300': '#88d2ff',
            '400': '#50b8ff',
            '500': '#2897ff',
            '600': '#1a7dff',
            '700': '#0a60eb',
            '800': '#0f4dbe',
            '900': '#134495',
            '950': '#112b5a',
        },
        
        }
      },
  },
  plugins: [],
  prefix: "tw-",
  darkMode: 'class',

  
}