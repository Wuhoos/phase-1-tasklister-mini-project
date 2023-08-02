document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form')

  newTaskForm.addEventListener('submit', e => {
    e.preventDefault()

    const newTaskInput = document.getElementById('new-task-description').value
    const newTask = document.createElement('li')

    newTask.textContent = newTaskInput;

   // console.log(newTask)

    addTasksToList(newTask)
    //newTask.appendChild(button)

    const button = document.createElement('button')
    // <button></button>
    button.textContent = "X"
    // <button>X</button>
    newTask.appendChild(button)
    



    button.addEventListener('click', () => {
      newTask.remove()
    })

  })

  // create a button


  function addTasksToList(task){
    const toDoList = document.getElementById("list")
    // const newTask = document.createElement('li')

    //console.log(newTask)
    toDoList.appendChild(task)

    newTaskForm.reset()
  }

  // const button = document.createElement('Button')
  //button.textContent ="X"
  //newTask.appendChild('button')


});

