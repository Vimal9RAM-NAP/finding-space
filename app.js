document.addEventListener("DOMContentLoaded", () => {
  let artifactsData = [];

  const viewDashboard = document.getElementById("viewDashboard");
  const viewDetail = document.getElementById("viewDetail");
  const waveCardsContainer = document.getElementById("waveCardsContainer");

  const detailTitle = document.getElementById("detailTitle");
  const detailBannerImg = document.getElementById("detailBannerImg");
  const detailDescription = document.getElementById("detailDescription");

  const btnGoBack = document.getElementById("btnGoBack");
  const btnShare = document.getElementById("btnShare");
  const btnAboutMe = document.getElementById("btnAboutMe");
  const aboutModal = document.getElementById("aboutModal");
  const btnCloseModal = document.getElementById("btnCloseModal");

  
  fetch("artifacts.json")
    .then((res) => res.json())
    .then((data) => {
      artifactsData = data;
      renderWaveCards(artifactsData);
    })
    .catch((err) => console.error("Error loading artifacts:", err));

  
  function renderWaveCards(items) {
    waveCardsContainer.innerHTML = "";
    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "wave-card";
      card.setAttribute("data-id", item.id);

      card.innerHTML = `
        <img src="${item.thumbnail}" alt="${item.name}" class="card-thumb" />
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.shortDesc}</p>
      `;

      card.addEventListener("click", () => openDetailView(item));
      waveCardsContainer.appendChild(card);
    });
  }

  
  function openDetailView(item) {
    detailTitle.textContent = item.name;
    detailBannerImg.src = item.banner;
    detailDescription.textContent = item.fullDesc;

    viewDashboard.classList.add("hidden-view");
    viewDashboard.classList.remove("active-view");

    viewDetail.classList.remove("hidden-view");
    viewDetail.classList.add("active-view");
  }

  
  btnGoBack.addEventListener("click", () => {
    viewDetail.classList.add("hidden-view");
    viewDetail.classList.remove("active-view");

    viewDashboard.classList.remove("hidden-view");
    viewDashboard.classList.add("active-view");
  });

 
  btnShare.addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: detailTitle.textContent,
        text: `Check out ${detailTitle.textContent} on Finding Space!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  });

  
  btnAboutMe.addEventListener("click", () => {
    aboutModal.classList.remove("hidden-modal");
  });

  btnCloseModal.addEventListener("click", () => {
    aboutModal.classList.add("hidden-modal");
  });

  aboutModal.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
      aboutModal.classList.add("hidden-modal");
    }
  });
});