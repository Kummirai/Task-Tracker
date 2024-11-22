import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "action",
      type: "list",
      message: "Choose an option",
      choices: ["add", "update", "delete", "list"],
    },
  ])
  .then((name) => {
    if (name.action === "add") {
      addItem();
    }
  })
  .catch((error) => {
    console.log(error);
  });

const addItem = () => {
  inquirer
    .prompt([
      {
        name: "add-task",
        type: "input",
        message: "Add",
      },
    ])
    .then((resonse) => {
      console.log(`${resonse["add-task"]} successfully added!`);
    })
    .catch();
};
