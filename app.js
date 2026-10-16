const artifacts = [
    {
        id: "retroreflector",
        name: "Apollo 11 Laser Retroreflector",
        location: "Moon (Sea of Tranquility)",
        icon: "🌕",
        story: "Left behind by Neil Armstrong and Buzz Aldrin in 1969, this panel of small mirrors looks simple, but it's one of NASA's longest-running scientific instruments.",
        science: "Scientists on Earth shoot powerful lasers at it every day. By measuring how long the light takes to bounce back, we track the exact distance between the Earth and the Moon down to the millimeter!"
    },
    {
        id: "opportunity",
        name: "Opportunity Rover ('Oppy')",
        location: "Mars (Meridiani Planum)",
        icon: "🔴",
        story: "Designed for a humble 90-day mission in 2004, Oppy bravely rolled across Martian dust storms and craters for nearly 15 years before going quiet in 2018.",
        science: "Oppy discovered undeniable geological proof that ancient Mars had liquid water environments capable of supporting past chemistry."
    },
    {
        id: "heatshield",
        name: "Perseverance Heat Shield",
        location: "Mars (Jezero Crater)",
        icon: "🚀",
        story: "During the terrifying '7 Minutes of Terror' entry through Mars' atmosphere in 2021, this massive shield absorbed temperatures hotter than the surface of the Sun to protect the rover inside, then was jettisoned into the desert.",
        science: "It paved the way for safe payload landings, utilizing advanced thermal protection systems that protect delicate robotic cargo during hypersonic entry."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("artifactGrid");
    const modal = document.getElementById("detailModal");
    const closeModal = document.getElementById("closeModal");
    
    document.getElementById("year").textContent = new Date().getFullYear();

    
    artifacts.forEach(item => {
        const card = document.createElement("div");
        card.className = "artifact-card";
        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${item.name}</h3>
            <span class="location-tag">${item.location}</span>
            <p>${item.story.substring(0, 90)}...</p>
            <button class="explore-btn" data-id="${item.id}">Discover Story</button>
        `;
        grid.appendChild(card);
    });

    
    grid.addEventListener("click", (e) => {
        if (e.target.classList.contains("explore-btn")) {
            const id = e.target.getAttribute("data-id");
            const data = artifacts.find(a => a.id === id);
            
            document.getElementById("modalTitle").textContent = data.name;
            document.getElementById("modalLocation").textContent = data.location;
            document.getElementById("modalStory").textContent = data.story;
            document.getElementById("modalScience").textContent = data.science;
            
            modal.classList.remove("hidden");
        }
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});