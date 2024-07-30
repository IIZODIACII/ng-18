import { Component, output, signal } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-new-task',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

	// newTask: Task = {} as Task;
	newTask = signal<Task>({} as Task);
	onCancel = output<void>();
	addNewTask = output<Task>();

	onSubmit(){
		this.addNewTask.emit(this.newTask());
	}
}
