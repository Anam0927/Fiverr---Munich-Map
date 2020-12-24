const allPaths = Array.from(
  document.querySelectorAll('.cls-1, .cls-2, .cls-3, .cls-4')
);

const cls1 = Array.from(document.querySelectorAll('.cls-1'));
const cls2 = Array.from(document.querySelectorAll('.cls-2'));
const cls3 = Array.from(document.querySelectorAll('.cls-3'));
const cls4 = Array.from(document.querySelectorAll('.cls-4'));
const cls = [cls1, cls2, cls3, cls4];

const detailName = document.querySelector('.details p');
const detailPrice = document.querySelector('.details h3');
const detailHR = document.querySelector('.details hr');

const buttons = Array.from(document.querySelectorAll('button'));
const buttonCircle = Array.from(document.querySelectorAll('.circle'));

const hoverColors = ['#EFCCD1', '#E3A5AE', '#CB5767', '#902C3A'];
const colors = ['#CCEFEB', '#A5E3DB', '#57CBBC', '#2C9083'];

buttonCircle.forEach((circle, index) => {
  circle.style.backgroundColor = colors[index];
});

function hoverStateChanger(element, color) {
  element.style.fill = color;
  detailHR.style.borderColor = color;
  switch (element.classList.value) {
    case 'cls-1':
      buttonCircle[0].style.backgroundColor = color;
      break;
    case 'cls-2':
      buttonCircle[1].style.backgroundColor = color;
      break;
    case 'cls-3':
      buttonCircle[2].style.backgroundColor = color;
      break;
    case 'cls-4':
      buttonCircle[3].style.backgroundColor = color;
      break;

    default:
      break;
  }
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

function showTooltip(p, name, price) {
  let tooltip = document.createElement('div');
  let tooltipP = document.createElement('p');
  let tooltipH = document.createElement('h3');
  tooltip.classList.add('tooltip');

  tooltipP.innerHTML = name;
  tooltipH.innerHTML = `${price} <span class="price-info">€/m<sup>2</sup></span>`;

  tooltip.style.display = 'block';
  tooltip.style.left = p.getBoundingClientRect().left + 'px';
  tooltip.style.top = p.getBoundingClientRect().top + 'px';

  document.body.appendChild(tooltip);
  tooltip.appendChild(tooltipP);
  tooltip.appendChild(tooltipH);
}

function hideTooltip() {
  let tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach((tooltip) => (tooltip.style.display = 'none'));
}

allPaths.forEach((path) => {
  path.addEventListener('mouseover', (e) => {
    let details = JSON.parse(path.dataset.details);
    hoverStateChanger(path, colorPicker(path, true));
    detailName.innerText = details.name;
    detailPrice.innerHTML = `${details.price} <span class="price-info">€/m<sup>2</sup></span>`;
    showTooltip(path, details.name, details.price);
  });

  path.addEventListener('mouseout', () => {
    hoverStateChanger(path, colorPicker(path, false));
    hideTooltip();
  });
});

buttons.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    cls[index].forEach((path) => {
      path.dispatchEvent(new MouseEvent('mouseover'));
    });
  });
  button.addEventListener('mouseout', () => {
    cls[index].forEach((path) => {
      path.dispatchEvent(new MouseEvent('mouseout'));
    });
  });
});
