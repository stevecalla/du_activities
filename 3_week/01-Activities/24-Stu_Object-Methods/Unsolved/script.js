// var chosenPet = "Lulu";
// var chosenPet = "Mackie"; //Calla = added to test dog
// var chosenPet = "Annie"; //Calla = added to no dog or no cat

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

let requestedPets = ["Lulu", "Mackie", "Annie"]; //section: calla added to make this into a loop rather than one at a time

for (let i = 0; i < requestedPets.length; i++) { //section: calla added to make this into a loop rather than one at a time
  let chosenPet;
  // console.log(requestedPets[i]);
  chosenPet = requestedPets[i];
  // console.log(chosenPet);
  checkPetAvailability(chosenPet);
}


//Debug the code below 
function dogMessage(chosenPet) {
   console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!"); //section: Calla - modifid from chosenPet.Lulu  to chosenPet
   shelter.apptMessage(); //section: added shelter
}

function catMessage(chosenPet) {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage(); //section: added () to execute function
}

function checkPetAvailability(chosenPet) { //section: calla added to make this into a loop rather than one at a time
  if (shelter.dogs.includes(chosenPet)) { //section: added the object name "shelter" to fix 1st error
    dogMessage(chosenPet);
  } else if (shelter.cats.includes(chosenPet)) { //section: added the object name "shelter" to fixed 1st error
    catMessage(chosenPet);
  } else {
    console.log(`It looks like the pet, ${chosenPet}, is not available.`);
    console.log("Check out our featured dog, " + shelter.dogs[0] + ". Or, our featured cat, " + shelter.cats[1]); //section: replaced cat.shelter with shelter.cats[1] and shelter[0] with shelter.dogs[0]
  }
}

// Work with a partner to resolve the following issue(s):

// Users should see a message log to the console indicating whether the shelter dog or cat is available.

// Expected Behavior
// When a name is stored in the chosenPet variable, a message should log to the console indicating whether the pet is available and whether it is a dog or a cat. 

// If the pet is not available, a message should indicate that and suggest the shelter's featured cat and dog. No errors should be returned.

// Actual Behavior
// No message is logged to the console, and an error message indicating an Uncaught ReferenceError is returned.
  
