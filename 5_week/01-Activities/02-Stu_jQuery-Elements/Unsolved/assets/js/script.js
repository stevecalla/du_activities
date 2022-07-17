// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
let rootElement = document.getElementById('root');
let rootElementJQuery = $('#root');

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
let authorName = document.createElement('p');

let authorNameJQuery = $('<p>');

// TODO:Add the following text to the newly created `<p>` element: "~ Carol Dweck"
let author = '~ Carol Dweck'
authorName.textContent = `${author} (document.getElementById)`;

authorNameJQuery.text(`${author} (JQuery)`);
console.log(authorNameJQuery.text())

// TODO:Add the class `plain` to the author element
authorName.classList.add('plain');

authorNameJQuery.addClass('plain');

// TODO:Create a new `<h1>` element that will store an author's quote and assign it to new variable
let authorQuote = document.createElement('h1');

let authorQuoteJQuery = $('<h1>');

// TODO:Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
let quote = '"Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."';
authorQuote.textContent = quote;

authorQuoteJQuery.text(quote);

// TODO:Apply the class `fancy` to the quote element
authorQuote.classList.add('fancy');

authorQuoteJQuery.addClass('fancy');

// TODO:Append the author element to the quote element
authorQuote.appendChild(authorName);
authorQuoteJQuery.append(authorNameJQuery);

// TODO:Append the quote element to the HTML element with an ID of `root` in `index.html`
rootElement.appendChild(authorQuote);
rootElementJQuery.append(authorQuoteJQuery);

// Steps:
// 1) ATTACH to HTML anchor element (in this case #root. e.g let anchorElement = $('#root'))
// 2) CREATE the content element such as <h1> or <p> (e.g. let contentElement = $('<h1>'))
// 3) ADD the content to the content element (e.g. contentElement.text('content'))
// 4) APPEND the content element to the anchor element (e.g. anchorElement.append(contentElement))
// 5) ADD CLASS (or Id et al) to apply styling et al (e.g. contentElement.addClass('theClass'))
