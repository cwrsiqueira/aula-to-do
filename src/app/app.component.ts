import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';
  msg = 'Digite a descrição da tarefa e clique <Adicionar> ou tecle <Enter>';
  color_msg = '';
  tarefas = [
    new Task('1', "Exemplo", true),
  ];

  setDefaultStatus() {
    this.msg = 'Digite a descrição da tarefa e clique <Adicionar> ou tecle <Enter>';
    this.color_msg = '';
  }

  addTask(item: string) {
    this.setDefaultStatus();
    let lastId = this.tarefas.length+1;
    if(item != '') {
      this.tarefas.push(new Task(lastId.toString(), item, true));
      this.msg = 'Tarefa incluída com sucesso';
      this.color_msg = 'green';
      return;
    }
    this.msg = 'Digite a descrição da tarefa';
    this.color_msg = 'red';
  }

  selectConclude(id: string) {
    this.setDefaultStatus();
    this.tarefas.forEach((e)=>{
      if(e.id === id) {
        e.realizada = !e.realizada
      }
    })
  }

  deleteTask(id: string) {
    this.setDefaultStatus();
    if(id != '') {
      let result = this.tarefas.filter(function(el) {
        return el.id == id;
      });
      for(var elemento of result){
        var index = this.tarefas.indexOf(elemento);
        this.tarefas.splice(index, 1);
      }
      this.msg = 'Tarefa excluída com sucesso';
      this.color_msg = 'blue';
      return;
    }
    this.msg = 'Tarefa inexistente.';
    this.color_msg = 'red';
  }

}
