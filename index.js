function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false, //By default, all new tasks that are added in are incomplete.

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed` //task true? otherwise, print not.
      );
    },

    markCompleted: function () {
      this.complete = true;
    },

  };
  return task;
}

// // logs task state
// function logTaskState(task) {
//   console.log(
//     `${task.title} has${task.complete ? " " : " not "}been completed` //task true? otherwise, print not.
//   );
// }

// // this function will change a task from false to true
// function completeTask(task) {
//   task.complete = true;
// }

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

//task1 is a function that does newTask(),
//task1's parameters are plugged into newTask() parameters
//so when we do logState, or markCompleted, those object functions
//know will have the proper values from the parameters
//that were passed in.
task1.logState();
task1.markCompleted();
task1.logState();

// console.log(tasks);
