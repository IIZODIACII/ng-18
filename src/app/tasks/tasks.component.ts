import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks, Task } from './task/task.model';

@Component({
	selector: 'app-tasks',
	standalone: true,
	imports: [TaskComponent],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.scss'
})
export class TasksComponent {
	
	@Input({required: true}) selectedUserId!: string
	@Input({required: true}) name!: string;

	tasks = dummyTasks;

	get selectedUserTasks() {
		return this.tasks.filter(task => task.userId === this.selectedUserId);
	}

	onCompleteTask(task: Task) {
		this.tasks = this.tasks.filter(originalTask => originalTask.id !== task.id)
	}
}
