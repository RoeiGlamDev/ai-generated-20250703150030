// Get the input field and todo list
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-items');

// Initialize an empty array to store todo items
let todoItems = [];

// Function to add a new todo item
function addTodoItem(item) {
  // Create a new todo item object
  const todoItem = {
    text: item,
    completed: false
  };

  // Add the todo item to the array
  todoItems.push(todoItem);

  // Render the todo item to the list
  renderTodoItem(todoItem);
}

// Function to render a todo item to the list
function renderTodoItem(todoItem) {
  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');
  listItem.innerHTML = `
    <span>${todoItem.text}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Add an event listener to the delete button
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    // Remove the todo item from the array
    todoItems = todoItems.filter(item => item.text !== todoItem.text);

    // Remove the list item from the DOM
    listItem.remove();
  });

  // Add an event listener to the list item to toggle completion
  listItem.addEventListener('click', () => {
    // Toggle the completed property of the todo item
    todoItem.completed = !todoItem.completed;

    // Update the list item's class and text decoration
    if (todoItem.completed) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });

  // Add the list item to the todo list
  todoList.appendChild(listItem);

  // Add a fade-in animation to the list item
  listItem.classList.add('fade-in');
}

// Add an event listener to the input field to add a new todo item
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // Get the input field's value
    const inputValue = todoInput.value.trim();

    // Check if the input field is not empty
    if (inputValue) {
      // Add a new todo item
      addTodoItem(inputValue);

      // Clear the input field
      todoInput.value = '';
    }
  }
});