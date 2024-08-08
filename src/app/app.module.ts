import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./tasks/task/task.component";
import { FormsModule } from "@angular/forms";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [FormsModule, BrowserModule, UserComponent, HeaderComponent, TaskComponent,TasksComponent]
})

export class AppModule {}