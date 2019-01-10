
const tasks = [

    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},

];

const front = [];
const typeBugs = [];
const findWords = [];

let objects = {
    Frontend: 0,
    Backend: 0,
};
const newTasks = [];



tasks.map((task => {
    if (task.category === 'Frontend') {
        front.push(task.timeSpent);
        objects.Frontend++
    }
    if (task.type === 'bug') {
        typeBugs.push(task.timeSpent)
    }
    if (task.title.indexOf('UI') !== -1) {
        findWords.push(task)
    }
    if (task.category === 'Backend') {
        objects.Backend++
    }
    if (task.timeSpent > 4) {
        let tasksObject = {
            title: task.title,
            category: task.category,
        };
        newTasks.push(tasksObject)
    }


}));

const UI = tasks.filter(item => item.title.includes("UI"));


console.log('The total amount of time spent on work on tasks from the \'Frontend\' category = ' + front.reduce((accumulator, currentValue) => accumulator + currentValue));
console.log('The total amount of time spent on work on tasks like \'bug\'. = ' + typeBugs.reduce((accumulator, currentValue) => accumulator + currentValue));
console.log('The number of tasks that have the word "UI" in the title. = ' + UI.length);
console.log(objects);
console.log(newTasks);



