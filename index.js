const allPaths = Array.from(
  document.querySelectorAll('.cls-1, .cls-2, .cls-3, .cls-4')
);

const hoverColors = ['#EFCCD1', '#E3A5AE', '#CB5767', '#902C3A'];
const colors = ['#CCEFEB', '#A5E3DB', '#57CBBC', '#2C9083'];

function hoverStateChanger(element, color) {
  element.style.fill = color;
}

function colorPicker(element, bool) {
  let color;

  for (let i = 1; i < 5; i++) {
    const cls = `cls-${i}`;
    if (element.classList.contains(cls)) {
      color = bool ? hoverColors[i - 1] : colors[i - 1];
    }
  }
  return color;
}

allPaths.forEach((path) => {
  path.addEventListener('mouseover', () => {
    hoverStateChanger(path, colorPicker(path, true));
  });

  path.addEventListener('mouseout', () => {
    hoverStateChanger(path, colorPicker(path, false));
  });
});
