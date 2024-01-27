import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FaIconComponent, NgStyle, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input()
  task!: Task;
  faTimes = faTimes

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()


  onDelete(task:Task) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task) {
    this.onToggleReminder.emit(task)

  }
}
