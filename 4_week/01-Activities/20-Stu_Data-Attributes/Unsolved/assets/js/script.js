var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  console.log(element, event.target, event)
  // TODO: Complete function
  // console.log(container.data-number);
  console.log(element.dataset.number);
  element.innerText = element.dataset.number;
  // element.setAttribute('data-state', 'visible');

  if (element.dataset.state === 'hidden') {
    // element.innerText = element.dataset.number;
    element.textContent = element.dataset.number;
    element.setAttribute('data-state', 'visible');
  } else {
    // element.innerText = null;
    element.textContent = null;
    element.setAttribute('data-state', 'hidden');
  }
});
