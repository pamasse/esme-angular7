import { Component } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  
  fruits = ['b', 'a']
  public lang = 'fr';
  
  constructor(private alertsService: AlertsService, route: ActivatedRoute) {
    console.log(route.snapshot.data[0]['lang']);
  }

  addFruit(fruit) {
    this.fruits.push(fruit);
    this.alertsService.success(fruit);
    }

  deleteFruit(index) {
    this.alertsService.warning(this.fruits[index]);
    this.fruits.splice(index, 1);
  }
}
