const HERO_IMAGE_STATE = { url: "https://historyreclaimed.co.uk/wp-content/uploads/2022/11/T06856_10.jpg" };

function applyHeroImage() { const hero = document.querySelector(".hero");
if (!hero) return;
if (HERO_IMAGE_STATE.url && HERO_IMAGE_STATE.url.trim().length > 0) { hero.style.setProperty("--hero-bg-image", `url("${HERO_IMAGE_STATE.url}")`);} 
else { hero.style.setProperty("--hero-bg-image", "none"); } }

function setHeroImage(url) { HERO_IMAGE_STATE.url = url; applyHeroImage(); }
window.setHeroImage = setHeroImage;

const LOOT_ITEMS 

