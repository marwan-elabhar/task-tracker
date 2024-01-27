import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: Task[] = TASKS;

}
