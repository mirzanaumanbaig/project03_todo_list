import inquirer from "inquirer";
let todosArray = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? ",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    if (TODO) {
        todosArray.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todosArray.length > 0) {
    console.log(todosArray);
    console.log("Your todo list :\n");
    todosArray.forEach(x => {
        console.log(x);
    });
}
else {
    console.log("No todos found!");
}
