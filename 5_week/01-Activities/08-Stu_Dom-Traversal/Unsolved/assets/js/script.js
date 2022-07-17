// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
// $('#root').children().css('color', 'yellow');
console.log($('#root').children('ul').children());
$('#root').children('ul').children('li').css('background-color', 'white')
// $('#root').children('ul').children().css('color', 'red')

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
$('#root').children('ul').children('li').eq(6).text('O')
// $('ul').children().eq(6).text('O')
