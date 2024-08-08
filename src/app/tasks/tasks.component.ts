import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

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

	constructor(private tasksService: TasksService) {

	}

	get selectedUserTasks() {
		return this.tasksService.getUserTasks(this.selectedUserId);
	}

	addingNewTask() {
		this.isAddingTask = true;
	}

	onCloseAddTask() {
		this.isAddingTask = false;
	}

	onAddNewTask(task: Task) {
		this.tasksService.addTask(task, this.selectedUserId);
		this.isAddingTask = false;
	}
}

