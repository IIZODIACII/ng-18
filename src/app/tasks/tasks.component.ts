import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [TaskComponent, NewTaskComponent],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.scss'
})
export class TasksComponent {
	
	@Input({required: true}) selectedUserId!: string
	@Input({required: true}) name!: string;

	isAddingTask: boolean = false;

	tasks = dummyTasks;

	get selectedUserTasks() {
		return this.tasks.filter(task => task.userId === this.selectedUserId);
	}

	onCompleteTask(task: Task) {
		this.tasks = this.tasks.filter(originalTask => originalTask.id !== task.id)
	}

	addingNewTask() {
		this.isAddingTask = true;
	}

	onCancelNewTask() {
		this.isAddingTask = false;
	}

	onAddNewTask(task: Task) {
		task.userId = this.selectedUserId;
		task.id = new Date().getTime().toString();
		this.tasks.unshift(task);
		this.isAddingTask = false;
	}
}

