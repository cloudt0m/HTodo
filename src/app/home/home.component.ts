import { Component, OnInit } from '@angular/core';

interface listItem {
  id: number;
  title: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todoList: listItem[] = [
    { id: 1, title: 'Hit the gym', isChecked: false },
    { id: 2, title: 'Pay bills', isChecked: true },
    { id: 3, title: 'Meet George', isChecked: false },
    { id: 4, title: 'Buy eggs', isChecked: false },
    { id: 5, title: 'Read a book', isChecked: false },
    { id: 6, title: 'Organize office', isChecked: false },
  ];
  newTodo: string = '';
  constructor() {}

  ngOnInit(): void {}
  addTodo(title: string) {
    const lastIdNumber: number = this.todoList[this.todoList.length - 1].id;
    this.todoList.push({
      id: lastIdNumber + 1,
      title: title,
      isChecked: false,
    });
  }
  checkItem(id: number) {
    const targetItem = this.todoList.find((item) => item.id === id);
    if (targetItem) {
      targetItem.isChecked = !targetItem.isChecked;
    }
  }
  removeItem(id: number) {
    this.todoList = this.todoList.filter((item) => item.id != id);
  }
}
