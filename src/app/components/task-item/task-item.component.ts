import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FaIconComponent, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input()
  task!: Task;
  faTimes = faTimes
}
