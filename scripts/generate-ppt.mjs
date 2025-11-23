import PptxGenJS from 'pptxgenjs';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

function addTitleSlide(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: '1F2937' };
  slide.addText('Indofil M-45', { x: 0.5, y: 1.2, w: 9, h: 1.2, fontSize: 44, bold: true, color: 'FFFFFF', align: 'center' });
  slide.addText('Mancozeb 75% WP', { x: 0.5, y: 2.2, w: 9, h: 0.8, fontSize: 26, color: 'C7D2FE', align: 'center' });
  slide.addText('Comprehensive Product Overview', { x: 0.5, y: 3.0, w: 9, h: 0.6, fontSize: 18, color: 'E5E7EB', align: 'center' });
}

function addBulletsSlide(pptx, title, bullets) {
  const slide = pptx.addSlide();
  slide.background = { color: '0B1220' };
  slide.addText(title, { x: 0.5, y: 0.6, w: 9, h: 0.6, fontSize: 30, bold: true, color: 'FFFFFF' });
  slide.addText(bullets.map(b => `- ${b}`).join('\n'), { x: 0.7, y: 1.4, w: 8.6, h: 4.5, fontSize: 20, color: 'E5E7EB', lineSpacing: 28 });
}

function addTwoColSlide(pptx, title, leftItems, rightItems) {
  const slide = pptx.addSlide();
  slide.background = { color: '0B1220' };
  slide.addText(title, { x: 0.5, y: 0.6, w: 9, h: 0.6, fontSize: 30, bold: true, color: 'FFFFFF' });
  slide.addText(leftItems.map(i => `- ${i}`).join('\n'), { x: 0.7, y: 1.4, w: 4.1, h: 4.5, fontSize: 19, color: 'E5E7EB', lineSpacing: 26 });
  slide.addText(rightItems.map(i => `- ${i}`).join('\n'), { x: 5.0, y: 1.4, w: 4.3, h: 4.5, fontSize: 19, color: 'E5E7EB', lineSpacing: 26 });
}

function addTableSlide(pptx, title, rows) {
  const slide = pptx.addSlide();
  slide.background = { color: '0B1220' };
  slide.addText(title, { x: 0.5, y: 0.6, w: 9, h: 0.6, fontSize: 30, bold: true, color: 'FFFFFF' });
  slide.addTable(rows, {
    x: 0.7,
    y: 1.4,
    w: 8.6,
    fontSize: 16,
    border: { type: 'solid', color: '374151', pt: 1 },
    colW: [3.6, 1.6, 3.4],
    align: 'center',
    valign: 'middle',
    margin: 6
  });
}

function buildPresentation() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';

  addTitleSlide(pptx);

  addBulletsSlide(pptx, 'Product Overview', [
    'Brand: Indofil M-45',
    'Active Ingredient: Mancozeb 75% WP',
    'Formulation: Wettable powder, multi-site contact fungicide',
    'Broad-spectrum control of fungal diseases',
    'Prevents resistance development due to multi-site action'
  ]);

  addBulletsSlide(pptx, 'Mode of Action', [
    'Multi-site contact fungicide with protective action',
    'Interferes with enzyme activity of fungal spores',
    'Prevents spore germination and pathogen establishment',
    'No systemic movement; remains on plant surface'
  ]);

  addTwoColSlide(pptx, 'Key Features & Benefits', [
    'Broad-spectrum: controls many foliar diseases',
    'Resistance management: multi-site activity',
    'Protectant: forms barrier on plant surfaces',
    'Good tank-mix partner with many fungicides',
    'Cost-effective disease prevention',
  ], [
    'Improves yield and quality by disease suppression',
    'Flexible application intervals (7-10 days typical)',
    'Suitable for many crops: potato, tomato, grapes, etc.',
    'Reliable performance across environments',
    'Trusted, well-established chemistry'
  ]);

  addTableSlide(pptx, 'Representative Uses & Rates (Guide)', [
    ['Crop / Disease', 'Rate', 'Notes'],
    ['Potato - Early/Late blight', '1.0-2.0 kg/ha', 'Start preventively; 7-10 day interval'],
    ['Tomato - Leaf spots/blight', '1.0-2.0 kg/ha', 'Ensure thorough coverage of canopy'],
    ['Grapes - Downy mildew (protectant)', '1.0-2.0 kg/ha', 'Rotate/tank-mix per program'],
    ['Cereals/Pulses - Leaf spots', '1.0-2.0 kg/ha', 'Adjust per label and local advice'],
  ]);

  addBulletsSlide(pptx, 'Application Guidelines', [
    'Apply preventively or at first sign of disease',
    'Maintain spray intervals based on pressure and weather',
    'Use sufficient water volume for even coverage',
    'Avoid applications before rain without drying time',
    'Rotate/tank-mix as per resistance management programs'
  ]);

  addBulletsSlide(pptx, 'Compatibility', [
    'Generally compatible with many fungicides/insecticides',
    'Always perform a jar test before tank mixing',
    'Avoid highly alkaline products; follow label guidance'
  ]);

  addBulletsSlide(pptx, 'Safety & Precautions', [
    'Use PPE: gloves, mask/respirator, protective clothing',
    'Avoid inhalation and skin/eye contact',
    'Do not contaminate water bodies or animal feed',
    'Keep away from children and uninformed persons',
    'Follow local regulations and label instructions'
  ]);

  addBulletsSlide(pptx, 'Storage & Handling', [
    'Store in original, tightly closed container',
    'Keep in cool, dry, well-ventilated place away from food/feed',
    'Dispose of containers as per local regulations',
    'Do not reuse empty packaging'
  ]);

  addBulletsSlide(pptx, 'Disclaimer', [
    'Rates and uses are indicative. Always consult the registered label',
    'Follow regional regulations and agronomic advice',
    'Product availability/details may vary by country'
  ]);

  return pptx;
}

async function main() {
  const outPath = resolve('./public/Indofil-M-45-Presentation.pptx');
  mkdirSync(dirname(outPath), { recursive: true });
  const pptx = buildPresentation();
  await pptx.writeFile({ fileName: outPath });
  console.log('Wrote:', outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
