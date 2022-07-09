// Access element using id

var headerDiv = document.getElementById('header'); //original
var headerDiv = document.getElementById('header').children[0]; //option #1

// var headerDiv = document.querySelector('h1'); //option #2
// var headerDiv = document.querySelector('header h1'); //option #3

// var articlesDiv = document.getElementById('articles'); //original
var articlesDiv = document.getElementById('articles').children[0];

// Change style by accessing style object's properties
// articlesDiv.children[2].style.fontSize = '50px'; //section:original; i don't think there is a child at index 2 so below i changed it to index 0

// articlesDiv.children[0].style.fontSize = '50px'; //option #1: Keep line #9 as is then change children from position 2 to position 0

articlesDiv.style.fontSize = '50px'; //option #2: Change line 9 to line 10 targeting the children[0] then remove from the style change line

headerDiv.style.color = 'white';
