import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: any[] = [];

  constructor() { }
  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void {
    //this.heroService.getHeroes()
    // .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    this.categories = [{ id: 1, name: 'Action' }, { id: 2, name: 'Comedy' }, { id: 2, name: 'Thriller' }, { id: 2, name: 'Drama' }]

  }
}
