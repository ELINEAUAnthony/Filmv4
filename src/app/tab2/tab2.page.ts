import { Component } from '@angular/core';
import { IMovie } from '../Interface/IMovie';
import { NavController } from '@ionic/angular';
import { FavoriteMovieService } from '../favorite-movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favoriteMovies: IMovie[] = []


  constructor(public navCtrl: NavController, public favoriteMovieService: FavoriteMovieService ) {
}
ionViewDidLoad() {
  console.log('ionViewDidLoad FavoritePage');
}

ionViewWillEnter() {
  this.initFavoriteMovies();
}

 private initFavoriteMovies() {
   this.favoriteMovieService
    .getFavoriteMovies()
    .then(favs => (this.favoriteMovies = favs))
    }
    
    findMovie() {
      this.navCtrl.navigateForward('');
    }
   
    goToDetail(movie: IMovie) {

      this.navCtrl.navigateForward(['/essai', movie.id]);
    }
} 


