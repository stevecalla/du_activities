var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  console.log('hello', element)
  // TODO: Complete function
  // console.log(container.data-number);
  console.log(element.dataset.number);
  element.innerText = element.dataset.number;
  // element.setAttribute('data-state', 'visible');

  if (element.dataset.state === 'hidden') {
    element.innerText = element.dataset.number;
    element.setAttribute('data-state', 'visible');
  } else {
    element.innerText = null;
    element.setAttribute('data-state', 'hidden');
  }
});
