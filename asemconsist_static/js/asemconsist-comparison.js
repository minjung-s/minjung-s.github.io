// ── Fixed highlight sets (hardcoded, not editable via click) ──────────────
const FIXED_RED = new Set([
  "plants_4|AsemConsist_flux|with a small tag, upright stem, in a lotus pond",
  "plants_4|AsemConsist_flux|with dew drops, petals half-open, near a water garden",
  "toy_12|AsemConsist_flux|a small badge, standing propped up, in a playroom",
  "toy_8|AsemConsist_flux|A doll with a small prop nearby, head tilted, on a chair",
  "toy_8|AsemConsist_flux|A doll with a stripe pattern, sitting with legs forward, on a bed",
  "toy_8|AsemConsist_flux|A doll with sticker stars, standing upright, in a child's room",
  "toy_8|AsemConsist_flux|A doll with a ribbon, facing camera, against a plain backdrop",
  "toy_8|AsemConsist_sd3|A doll with a ribbon, facing camera, against a plain backdrop",
  "toy_8|AsemConsist_sd3|A doll with a small prop nearby, head tilted, on a chair",
  "toy_8|AsemConsist_sd3|A doll with a stripe pattern, sitting with legs forward, on a bed",
  "toy_8|zigzag|A doll with a ribbon, facing camera, against a plain backdrop",
  "toy_8|zigzag|A doll with sticker stars, standing upright, in a child's room",
  "animal_0|zigzag|with a ribbon, lying curled up, on a cozy living-room rug",
  "animal_0|Codi|with a small backpack, jumping forward, at a sandy beach",
  "animal_0|1p1s|with a tiny hat, running mid-stride, on a city sidewalk",
  "animal_0|1p1s|with a small prop nearby, sitting attentively, in a grassy backyard",
  "animal_0|CharaConsist|with a small backpack, jumping forward, at a sandy beach",
  "animal_0|CharaConsist|with a small prop nearby, sitting attentively, in a grassy backyard",
  "animal_8|zigzag|with a small backpack, lying flat, in a small pen",
  "animal_8|Codi|with a ribbon, sitting upright, on soft hay",
  "animal_8|Codi|with a small backpack, lying flat, in a small pen",
  "animal_8|1p1s|with a ribbon, sitting upright, on soft hay",
  "animal_8|1p1s|with a small backpack, lying flat, in a small pen",
  "animal_8|1p1s|with a small prop nearby, ears perked up, on a backyard lawn",
  "animal_8|1p1s|with a tiny hat, nose twitching, on a forest floor",
  "animal_8|CharaConsist|with a small backpack, lying flat, in a small pen",
  "animal_10|zigzag|with a small backpack, ears angled back, near a fallen log",
  "animal_10|zigzag|with a tiny hat, standing alert, in an autumn forest",
  "animal_10|CharaConsist|with a tiny hat, standing alert, in an autumn forest",
  "animal_10|CharaConsist|with a small backpack, ears angled back, near a fallen log",
  "animal_10|1p1s|with a tiny hat, standing alert, in an autumn forest",
  "human_20|zigzag|with earrings, turning to the side, in a bright lab corridor",
  "human_20|zigzag|with long hair, with a screen, in an office lab",
  "human_20|CharaConsist|with short hair, hands behind back, in a cleanroom",
  "human_20|Codi|with long hair, with a screen, in an office lab",
  "human_20|1p1s|with short hair, hands behind back, in a cleanroom",
  "human_20|1p1s|with long hair, with a screen, in an office lab",
  "human_20|1p1s|with earrings, turning to the side, in a bright lab corridor",
  "human_20|1p1s|with a hat, facing camera seriously, against a plain backdrop",
  "plants_0|CharaConsist|with a bud nearby, slightly tilted stem, in a greenhouse",
  "plants_0|zigzag|with dew drops, bloom, against a plain studio backdrop",
  "plants_0|zigzag|with a ribbon tied to the stem, bloom facing camera, in a flower garden",
  "toy_8|zigzag|with a ribbon, facing camera, against a plain backdrop",
  "toy_8|zigzag|with sticker stars, standing upright, in a child's room",
  "toy_8|CharaConsist|with a small prop nearby, head tilted, on a chair",
  "toy_8|CharaConsist|with a ribbon, facing camera, against a plain backdrop",
  "toy_8|Codi|with a stripe pattern, sitting with legs forward, on a bed",
  "toy_8|Codi|with sticker stars, standing upright, in a child's room",
  "toy_8|Codi|with a small prop nearby, head tilted, on a chair",
  "toy_8|Codi|with a ribbon, facing camera, against a plain backdrop",
  "toy_8|1p1s|with a ribbon, facing camera, against a plain backdrop",
  "toy_8|1p1s|with sticker stars, standing upright, in a child's room",
  "plants_5|Codi|with a leaf curl, bloom facing camera, near still water",
  "plants_5|CharaConsist|with a small tag, upright stem, in a lotus pond",
  "animal_0|1p1s|with a small backpack, jumping forward, at a sandy beach",
  "animal_0|1p1s|with a ribbon, lying curled up, on a cozy living-room rug"
]);

const FIXED_YELLOW = new Set([
  "animal_10|Codi|with a tiny hat, standing alert, in an autumn forest",
  "plants_0|1p1s|with a ribbon tied to the stem, bloom facing camera, in a flower garden",
  "plants_0|Codi|with a ribbon tied to the stem, bloom facing camera, in a flower garden",
  "plants_5|CharaConsist|with a small tag, upright stem, in a lotus pond",
  "plants_5|zigzag|with a small tag, upright stem, in a lotus pond",
  "plants_5|Codi|with a small tag, upright stem, in a lotus pond",
  "plants_5|1p1s|with a small tag, upright stem, in a lotus pond",
  "plants_5|1p1s|with a petal gradient, bloom, against a plain studio backdrop",
  "toy_8|1p1s|with a stripe pattern, sitting with legs forward, on a bed",
  "toy_8|1p1s|with a small prop nearby, head tilted, on a chair",
  "plants_0|1p1s|with a bud nearby, slightly tilted stem, in a greenhouse"
]);

const FIXED_ORANGE = new Set([
  "animal_8|1p1s|with a tiny hat, nose twitching, on a forest floor",
  "plants_0|Codi|with a ribbon tied to the stem, bloom facing camera, in a flower garden",
  "human_20|1p1s|with earrings, turning to the side, in a bright lab corridor"
]);

// ── On load: apply fixed highlights ──────────────────────────────────────
function applyHighlights() {
  document.querySelectorAll('td img[data-key]').forEach(img => {
    const key = img.dataset.key;
    const td  = img.parentElement;
    if (!td || td.tagName !== 'TD') return;
    if (FIXED_RED.has(key))    td.classList.add('selected-cell');
    if (FIXED_YELLOW.has(key)) td.classList.add('selected-yellow');
    if (FIXED_ORANGE.has(key)) td.classList.add('selected-orange');
  });
}

// ── Click logic ───────────────────────────────────────────────────────────
// Click only opens lightbox — highlights are fixed and not toggled
function onImageClick(ev, imgElem, caption) {
  openLightbox(imgElem.src, caption);
}

function openLightbox(src, caption) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
document.addEventListener('DOMContentLoaded', applyHighlights);
