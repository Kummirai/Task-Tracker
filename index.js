const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];
const options = ["add", "update", "delete", "list"];
console.log(
  options.forEach((index, option) => {
    console.log(`${option + 1} ${index}`);
  })
);

rl.question("Choose Option ", (option) => {
  if (option.toLowerCase() === "add") {
    rl.question(option, (addItem) => {
      tasks.push(addItem);
      console.log("Task added succesfully");
      
    });
    console.log("You Selected Add");
  } else {
    console.log("Its a different choice");
  }
  rl.close();
});
