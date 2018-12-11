import { Component, OnInit, Input } from '@angular/core';
import { Category, Movie } from '../model';
import { MondiadataService } from '../mondiadata.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private route: ActivatedRoute, private dataService: MondiadataService, private location: Location) { }

  ngOnInit() {
    this.getMovie();

  }

  getMovie(): void {
    debugger;
    const movieId = +this.route.snapshot.paramMap.get('id');
    const categoryId = +this.route.snapshot.paramMap.get('categoryId');
    this.dataService.getMovie(movieId, categoryId)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    debugger;
    this.dataService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
  }

}
