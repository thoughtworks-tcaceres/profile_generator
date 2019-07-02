const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.question('What do you think of trsasd? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
//   });
// });

const makeDescriptor = function() {
  const result = `${surveyObject.name.answer} loves listening to ${
    surveyObject.music.answer
  } while ${surveyObject.activity.answer}, \
devouring ${surveyObject.food.answer} for ${
  surveyObject.meal.answer
}, prefers ${surveyObject.sport.answer}, and is amazing at\
 ${surveyObject.superpower.answer}`;

  console.log(result);
};

const surveyObject = {
  name: {
    question: "What's your name? Nicknames are also acceptable :) \n",
    answer: ""
  },
  activity: {
    question: "What's an activity you like doing? \n",
    answer: ""
  },
  music: {
    question: "What do you listen to while doing that? \n",
    answer: ""
  },
  meal: {
    question: "Which meal is your favourite (eg: dinner, brunch, etc.) \n",
    answer: ""
  },
  food: {
    question: "What's your favourite thing to eat for that meal? \n",
    answer: ""
  },
  sport: {
    question: "Which sport is your absolute favourite? \n",
    answer: ""
  },
  superpower: {
    question:
			"What is your superpower? In a few words, tell us what you are amazing at! \n",
    answer: ""
  }
};

const keys = Object.keys(surveyObject);

const survey = function(keys) {
  if (keys.length === 0) {
    makeDescriptor();
    rl.close();
    return;
  }

  rl.question(surveyObject[keys[0]].question, answer => {
    surveyObject[keys[0]].answer = answer;
    survey(keys.slice(1));
  });
};

survey(keys);
