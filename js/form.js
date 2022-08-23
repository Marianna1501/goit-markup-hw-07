document
  .querySelector('.form')
  .addEventListener('submit', eventHandler);

document
  .querySelector('.subscr-for')
  .addEventListener('submit', eventHandler);

function eventHandler(e) {
  e.preventDefault();
  console.log(e.currentTarget);
  let myObject = new FormData(e.currentTarget);
  myObject.forEach((value, name) => console.log(`${name}: ${value}`));
  e.currentTarget.reset();
}
