// Access element using id
// var articlesDiv = document.getElementById('articles'); //original
var articlesDiv = document.getElementById('articles').children[0];

var headerDiv = document.getElementById('header'); //original
var headerDiv = document.getElementById('header').children[0]; //option #1
// var headerDiv = document.querySelector('h1'); //option #2
// var headerDiv = document.querySelector('header h1'); //option #3


// Change style by accessing style object's properties
// articlesDiv.children[2].style.fontSize = '50px'; //original

articlesDiv.children[0].style.fontSize = '50px'; //option #1: Keep line #2 as is then change chilren from position 2 to position 0

articlesDiv.style.fontSize = '50px'; //option #2: Change line 2 to line 3 targeting the children[0] then remove from the style change line

headerDiv.style.color = 'white';
