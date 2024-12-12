go to the websie
https://tailwindcss.com/docs/installation

npm install -D tailwindcss
npx tailwindcss init

tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

input.css
@tailwind base;
@tailwind components;
@tailwind utilities;


package.json

{
  "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/main.css",
    "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.16"
  }
}

or 
npx tailwindcss -i ./input.css -o ./css/main.css --watch


create a html page and link to the css/main.css

Run Go Live extension