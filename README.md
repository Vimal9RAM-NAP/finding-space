<h1 align="center">
FINDING SPACE
</h1>

*Exploring the silent monuments left behind on the Moon and Mars—and the living legacies they left in our science.*

*An interactive web dashboard built for the **NASA Space Apps Challenge 2026**, under the challenge statement: **"Abandoned but not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars"**.*

![Finding Space Preview](https://img.shields.io/badge/Status-Live%20Deployment-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange?style=for-the-badge)

---
<h3 align="center">
OVERVIEW
</h3>

> [!TIP]
> **Finding Space** is a client-side web application designed to document, visualize, and tell the stories of historical hardware, retroreflectors, rovers, and landers left behind across lunar and Martian landscapes. By bridging historical archives with modern web design, the dashboard highlights how these "abandoned" relics continue to drive active scientific research today (such as lunar laser ranging via Apollo retroreflectors).

<h3 align="center">
FEATURES
</h3>

* **Interactive Artifact Cards:** Dynamic card grid showcasing iconic hardware (Apollo Retroreflectors, Opportunity "Oppy", Perseverance Heat Shield, and more).
* **Structured Data-Driven Architecture:** Powered by a clean JSON data layer (`artifacts.json`) for seamless content scaling and separation of concerns.
* **Immersive Space Theme:** Custom dark-mode UI featuring high-contrast gold typography, deep space background aesthetics, and responsive layout scaling.
* **Detail Modals & Quick Info:** Popup view modals providing deep-dive historical context, mission parameters, and scientific relevance for each piece of equipment.
* **Fully Client-Side & Lightweight:** Zero heavy backend dependencies, ensuring blazing-fast load times and smooth deployment.

<h3 align="center">
TECH STACK
</h3>

* **Markup & Structure:** HTML5
* **Styling & Design:** CSS3 (Custom properties, Flexbox/Grid, responsive dark UI)
* **Logic & Interactivity:** Vanilla JavaScript (ES6+, DOM manipulation, asynchronous JSON fetching)
* **Data Layer:** Structured JSON (`artifacts.json`)
* **Hosting & Deployment:** GitHub Pages

<h3 align="center">
REPOSITORY STRUCTURE
</h3>

```text
├── index.html       # Main application shell and layout
├── style.css        # Custom dark-theme styling and responsive layout rules
├── app.js           # Dynamic card rendering, modal controls, and data fetching
├── artifacts.json   # Structured dataset containing artifact metadata and stories
├── .gitignore       # Git ignore configuration
└── LICENSE          # MIT License
```
<h3 align="center">
LIVE DEMO
</h3>

Check out the live deployment hosted via GitHub Pages:
 https://vimal9ram-nap.github.io/finding-space/

<h3 align="center">
AUTHOR
</h3>

Built by Vimal Ram (@Vimal9RAM-NAP) for the NASA Space Apps Challenge 2026.

<h3 align="center">
LICENSE
</h3>
This project is open-source and available under the MIT License.