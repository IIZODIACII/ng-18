import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'project';
	users: User[] = DUMMY_USERS;
	selectedUser?: User;

	onUserSelect(selectedUser: User) {
		this.selectedUser = selectedUser;
	}

}


export interface User {
	id: string
	name: string
	avatar: string
}
