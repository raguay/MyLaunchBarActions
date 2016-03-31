# TaskPaper Add To Project Action

[TaskPaper](https://www.taskpaper.com/) is a great plain text task manager. It is highly extensible with JavaScript.

If you send a path of a **TaskPaper** file to this action, it stores that path to add tasks to. Otherwise, if **TaskPaper** is running while you run this action, it will get that files path, store it, and use that file.

Once it has determined what file to use, it asks the user for the task line and which project to add it to. The user simply types the name of the task, and selects the project. That new task will be added to the top of that project.
