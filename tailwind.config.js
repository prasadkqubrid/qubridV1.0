/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: { 
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "primary-orange": "#FF6600",
        "heading-black": "#0F1218",
        "footer-text-color": "#282828",
        "page-bg-color": "#F8F9FD",
        "card-li-color": "#2E1F15",
        "tab-active-color": "#8F27C1",
        "tab-not-active-color": "#F2F3F8",
        'gray-60': 'rgba(15, 18, 24, 0.60)',
        'gray-70': 'rgba(15, 18, 24, 0.80)',
        'sidebar-not-active-color': 'rgba(71, 3, 104, 0.55)',
        'modal-bg-color': 'rgba(241, 235, 244, 0.20)',
        "create-new-btn-color": "#F4F1FB",
        "card-hover-color": "#FDFAFF",
        "card-hover-text-color": "#E3299B",
        "stop-color": "#F6274D"
      },
      backgroundImage: {
      'gradient-pink-purple': 'linear-gradient(92deg, #DC389D 5.63%, #8624C5 98.36%)',
    },
      width: {
      'fill-available': '-webkit-fill-available',
      },
      minWidth: {
        '300px': '300px',
      },
      height: {
        'card-height':'700px'
      },
      listStyleType: {
        disc: 'disc',
        square: 'square',
        roman: 'upper-roman',
      },
    },
  },
  
  plugins: [
   
  ],
}

