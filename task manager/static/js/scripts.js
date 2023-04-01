// Wait for the DOM to be fully loaded before running the JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    // Get the task form and task list elements from the DOM
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
  
    // Add a submit event listener to the task form
    taskForm.addEventListener('submit', (e) => {
      // Prevent the default form submission behavior (page reload)
      e.preventDefault();
  
      // Get the task name from the input field and trim any whitespace
      const taskName = document.getElementById('task-name').value.trim();
  
      // Check if the task name is not empty
      if (taskName !== '') {
        // Create a new list item element
        const listItem = document.createElement('li');
        // Set the list item's text content to the task name
        listItem.textContent = taskName;
        
        // Create a delete button element
        const deleteButton = document.createElement('button');
        // Set the delete button's text content to 'Delete'
        deleteButton.textContent = 'Delete';
        // Add a click event listener to the delete button
        deleteButton.addEventListener('click', () => {
          // Remove the list item from the task list when the delete button is clicked
          taskList.removeChild(listItem);
        });
  
        // Append the delete button to the list item
        listItem.appendChild(deleteButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);
  
        // Clear the task name input field
        document.getElementById('task-name').value = '';
      }
    });
  });