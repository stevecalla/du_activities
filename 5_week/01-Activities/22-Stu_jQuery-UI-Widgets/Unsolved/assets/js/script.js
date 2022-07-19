var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Add Datepicker widget here

  $( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );

  // $( function() {
  //   $( "#datepicker" ).datepicker();
  // } );

  // Add Autocomplete widget here

    $( function() {
      var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      // $( "#tags" ).autocomplete({
      $( "#skill-name" ).autocomplete({
        source: availableTags
      });

      availableTags.forEach(element => {
        // // vanilla js
        // let skills = document.createElement('li'); //create lemenet
        // skillsListEl.append(skills); //append content
        // skills.textContent = element; //insert content
        
        
        // jQuery
        // let skills = $('<li>'); //create element
        // skillsListEl.append(skills); //append element
        // skills.text(element); //insert content


        // console.log(element)
      })
    });
