// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.

let tasks = [];
const taskForm = null;
const taskTable = null
function handleSubmission(event) {
    event.preventDefault();
    render();
}
// Function to render tasks in the table
function render() {
// TODO: Use array methods to create a new table row of data for each item in the arr
}
// Function to initialize the table
function init() {
taskTable.innerHTML = ''; // Clear the table
tasks = []; // Reset the tasks array
render(); // Call the render function
}
taskTable.innerHTML = tasks.map(task => `
<tr>
<td>${task.name}</td>
<td>${task.description}</td>
<td>${task.deadline}</td>
<td><button onclick="markTaskComplete(this)">Complete</button></td>
<td><button onclick="removeTask(this)">Remove</button></td>
</tr>
`).join('');
// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);
// Call the init function to set up the initial state of the app
init();
    