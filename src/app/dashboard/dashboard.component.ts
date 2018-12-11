import { Component, OnInit } from '@angular/core';
import { MondiadataService } from '../mondiadata.service';
import { Category, Movie } from '../model';
import { Observable } from 'rxjs';
import { map, filter, take } from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: Observable<Category[]>;
  categoryId: number;
  // selectedCategory: Category;
  //movies: Movie[] = [];
  movies: Observable<Movie[]>;
  selectedCategory: Observable<Category>;
  constructor(private dataService: MondiadataService) { }
  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categories = this.dataService.getCategories();
    // this.categories = this.dataService.getCategories().pipe(
    //   switchMap(categories => from(categories)),
    //   mergeMap(category => forkJoin(this.dataService.getMovies(category.id))
    //     //.pipe(map(data => ({ category, movieid: data[0], title: data[1] })))),
    //     .pipe(map(data => ({ category })))),
    //   map(data => data.category)

    // )
  }

  getMovies(id: number): void {
    this.movies = this.dataService.getMovies(id)
      .pipe(
        //filter(response => response.code === 200),
        map(movies => movies)
      );

  }



}
