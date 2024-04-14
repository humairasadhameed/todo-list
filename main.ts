import inquirer from "inquirer"
let todos = [];
let condition = true
while(condition){
    let todoQuestions = await inquirer.prompt(
        [
            {
                name:"firstQ",
                type:"input",
                message:"What would you like to add in your todos?",
            },
            {
                name:"secondQ",
                type:"confirm",
                message:"Do you want to add more?",
                default:"true"
            }
        ]
    );
    todos.push(todoQuestions.firstQ);
    console.log(todos);
    condition = todoQuestions.secondQ;
}