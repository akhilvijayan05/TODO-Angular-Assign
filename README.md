# TODO-Angular-Assign

## Author: Akhil Vijayan

### Question:

You need to create a basic CRUD application in Angular 2.

It will be a TODO list. Hope everyone is familiar with the concept of a TODO list.

For storing data, we are going to use a singleton service for now, which will later be replaced with rest API.

In the application we'll have two tabs, SHOW TASKS and CREATE TASK. You can add them in navbar or header whatever you like. 
On selecting them, rest of the page should be updated respectively.

On clicking CREATE TASK, user should get a form to add a new task with the following fields :
1. Date
2. Title
3. Description
4. Priority ( should be a dropdown with low, medium and high options)

On clicking SHOW TASKS, user should be displayed all the stored tasks, and each task should have two buttons, EDIT and DONE.

On clicking DONE, it should remove the task as it is completed.
On clicking on EDIT, user should be redirected to the same form with the fields auto filled in the form which he can then edit.

#### ScreenShots

Main Page

![angmain](https://cloud.githubusercontent.com/assets/25051863/23101683/6adb8c70-f6bf-11e6-8c1a-387bf1c67b08.png)

Show Task

![showtask](https://cloud.githubusercontent.com/assets/25051863/23101687/72014472-f6bf-11e6-8bd9-388a8ce64d41.png)

Create Task

![create task](https://cloud.githubusercontent.com/assets/25051863/23101688/76825568-f6bf-11e6-9004-1ab53b2a8456.png)
