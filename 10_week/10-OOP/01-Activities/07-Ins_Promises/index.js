// Promise example using a real-life promise
// The real-life promise in this scenario is a child asking his parents for a Nintendo Switch

const choresDone = true;
// const choresDone = false;

// Promise
const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (choresDone) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child did not finish chores as promised');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  return Promise.resolve(message);
  // return message;
};

willGetSwitch
  .then(playGames)
  .then((resolve) => console.log(resolve))
  // .then((reject) => console.log(reject))
  .catch((err) => console.error(err));
