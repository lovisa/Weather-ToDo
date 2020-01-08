const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

// Create new list task
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

// Add todos event
addForm.addEventListener('submit', e => {

  e.preventDefault();
  const todo = addForm.add.value.trim();
  // If task has input, print to list
  if (todo.length) {
    generateTemplate(todo);
    // Reset input field
    addForm.reset();
  }

});

// Delete todos event
list.addEventListener('click', e => {
  // Remove if the object contains the delete class
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }

});

