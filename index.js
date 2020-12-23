const allPaths = Array.from(
  document.querySelectorAll('.cls-1, .cls-2, .cls-3, .cls-4')
);

const cls1 = Array.from(document.querySelectorAll('.cls-1'));
const cls2 = Array.from(document.querySelectorAll('.cls-2'));
const cls3 = Array.from(document.querySelectorAll('.cls-3'));
const cls4 = Array.from(document.querySelectorAll('.cls-4'));
const cls = [cls1, cls2, cls3, cls4];
console.log(cls);

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

allPaths.forEach((path) => {
  path.addEventListener('mouseover', () => {
    hoverStateChanger(path, colorPicker(path, true));
    let details = JSON.parse(path.dataset.details);
    detailName.innerText = details.name;
    detailPrice.innerHTML = `${details.price} <span class="price-info">€/m<sup>2</sup></span>`;
  });

  path.addEventListener('mouseout', () => {
    hoverStateChanger(path, colorPicker(path, false));
  });
});

buttons.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    console.log(cls[index]);
    cls[index].forEach((path) => {
      path.dispatchEvent(new MouseEvent('mouseover'));
    });
  });
  button.addEventListener('mouseout', () => {
    console.log(cls[index]);
    cls[index].forEach((path) => {
      path.dispatchEvent(new MouseEvent('mouseout'));
    });
  });
});
