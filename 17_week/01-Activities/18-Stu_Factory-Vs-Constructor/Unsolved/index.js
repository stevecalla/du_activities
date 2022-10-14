// TODO: Refactor the class to a factory function.
class Lesson {
  constructor() {
    this.title = 'Module 17 - Computer Science';
    this.description = 'CS for JS';
  }
  
  information() {
    console.log('Title: ', this.title, 'Description: ', this.description);
  }
}

const csForJS = new Lesson();
csForJS.information();

//section
const information2 = (state) => ({
  information: () => console.log('Title: ', state.title, 'Description: ', state.description)
});

const Lesson2 = (title, description) => {
  const state = {
    title,
    description
  }
  return {...information2(state)};
}

const computerScience = Lesson2('Module 17 - Computer Science', 'CS for JS');

computerScience.information();
