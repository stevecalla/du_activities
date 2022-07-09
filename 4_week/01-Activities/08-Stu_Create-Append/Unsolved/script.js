var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(favoriteEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
// favoriteEl.appendChild(listEl); //section duplicate of line 29
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
// It's done when an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"

//section: create text for the list items
// li1.textContent = 'Apple 🍎 🍏';
// li2.textContent = 'Pizza 🍕';
// li3.textContent = 'Dumpling 🥟';
// li4.textContent = 'Cupcakes 🧁 🌸';

//section append list items to the ordered list element
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

console.log(listEl, listEl.children, listEl.children.length, listEl.childNodes);
//section: using for loop to dynamically create li children
for (let i = 0; i < listEl.children.length; i++) {
  let favoriteFoods = ['Cupcakes 🧁 🌸', 'Dumpling 🥟', 'Pizza 🍕', 'Apple 🍎 🍏', ];
  let food = listEl.children[i].textContent = favoriteFoods[i];
  // listEl.appendChild(li4); trying to replace lines 48 to 51 inside this loop?
}

// It's done when the ordered list has a background color of #333333 and padding of 20px.

// listEl.style.backgroundColor = '#333333';
// listEl.style.padding = '20px';

listEl.setAttribute('style', "background-color:#333333; padding:20px")

// It's done when each list item has a font color of white, padding of 5px, and margin-left of 35px.

document.querySelectorAll('li').forEach(element => {
  element.style.color = 'white';
  element.style.padding = '5px';
  element.style.marginLeft = '35px';
});

// It's done when each list item has a different background color.

// document.querySelectorAll('li').forEach(element => {
//   element.style.color = 'white';
//   element.style.backgroundColor = 'lightgrey'; 
//   element.style.padding = '5px';
//   element.style.marginLeft = '35px';
// });

li1.style.backgroundColor = 'red';
li2.style.backgroundColor = 'blue';
li3.style.backgroundColor = 'orange';
li4.style.backgroundColor = 'green';

for (let i =0; i < listEl.children.length; i++) {
  let backgroundColor = ['orange', 'purple', 'black', 'grey', ];
  listEl.children[i].style.backgroundColor = backgroundColor[i];
}
