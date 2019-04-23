import { Component, OnInit } from '@angular/core';
import { MovieApiProviderService } from '../api/movie-api-provider.service';
import { IMovie } from '../Interface/IMovie';
import { ActivatedRoute } from '@angular/router';
import { FavoriteMovieService } from '../favorite-movie.service';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.page.html',
  styleUrls: ['./essai.page.scss'],
})
export class EssaiPage implements OnInit {
movie:IMovie;
isFavorite:boolean=false;
qrData = null;
createdCode = null;
favoriteMovies: IMovie[] = []
  constructor(public movieApiProvider: MovieApiProviderService,
              public activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
    this.movieApiProvider.getFilmbyid(this.activatedRoute.snapshot.params['id']).subscribe(
      data => {
          this.movie = data;
          console.log(this.movie);
  })
}

createCode(){
  this.createdCode = this.activatedRoute.snapshot.params['id'].toString();
  console.log(this.movie.toString())
}

}
