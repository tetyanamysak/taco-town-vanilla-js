# 🌮 Taco Town Vanilla JS

![Main Screen](./images/main.png)

Welcome to **Taco Town**, a dynamic web application for exploring delicious taco recipes!
This project demonstrates a full-stack flow using Node.js, Express, and EJS, with a strong focus on interactive UI/UX using Vanilla JavaScript and modern CSS.

---

## 🚀 Features

- **Dynamic Recipe Fetching** – Uses the Fetch API to retrieve taco details without reloading the page
- **Glassmorphism UI** – A clean, translucent interface using `backdrop-filter: blur`
- **Responsive Design** – Optimized for both desktop and mobile devices
- **Interactive Ingredients Modal** – Custom overlay to display ingredient details
- **State Management** – UI updates dynamically (e.g. "Return to Homepage" button state)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Frontend**: Vanilla JavaScript (ES6+), CSS3 (Variables & Animations)
- **Data**: JSON-based recipe storage

---

## 📂 Project Structure

```text
taco_town/
├── public/
│   ├── styles/
│   │   └── main.css
│   └── script.js
├── views/
│   └── index.ejs
├── index.js
├── recipe.json
└── package.json


⚙️ Installation & Setup
1. Clone the repository
git clone <your-repository-link>

2. Install dependencies
npm install

3. Run the server

# Development
nodemon index.js

# Production
node index.js

4. Open in browser

http://localhost:3040

🎨 Design Notes
Primary Color: #414b1c (Deep Forest Green)
Accent Color: #637523 (Taco Lime)
Container: Translucent #ddeec1dc with blur effects
Custom SVG background pattern for visual texture

✨ Future Improvements
- [ ]Add more taco variations 🌮
- [ ]Add animations between state changes
- [ ]Store user preferences (localStorage)
- [ ]Improve accessibility (ARIA, keyboard nav)

📜 License

This project is open source and free to use.

Created with ❤️ by Tetyana.
```
