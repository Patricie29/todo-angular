import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[];
  inputTodo: string = ''


  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      },
    ]

  }

  toggleDone(id: number) {
    this.todos.map((oneTodo, i) => {
      if (i == id) {
        oneTodo.completed = !oneTodo.completed
      }

      return oneTodo
    })
  }


  deleteTodo(id: number) {
    this.todos = this.todos.filter((oneTodo, index) => {
      return index !== id
    })
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = ''
  }
}
