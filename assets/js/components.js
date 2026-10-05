const pageComponents = [
  ['header-component', 'components/header.html'],
  ['hero-component', 'components/hero.html'],
  ['program-component', 'components/program.html'],
  ['curriculum-component', 'components/curriculum.html'],
  ['campus-component', 'components/campus.html'],
  ['careers-component', 'components/careers.html'],
  ['footer-component', 'components/footer.html']
];

window.componentsReady = Promise.all(pageComponents.map(async ([mountId, source]) => {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  try {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    mount.insertAdjacentHTML('beforebegin', await response.text());
    mount.remove();
  } catch (error) {
    console.error(`Failed to load component ${source}:`, error);
  }
}));