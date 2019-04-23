import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { MovieApiProviderService } from '../api/movie-api-provider.service';
import { IMovie } from '../Interface/IMovie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  movie: IMovie;
  // isFavorite:boolean=false;
  qrData = null;
  createdCode = null;
  // favoriteMovies: IMovie[] = []

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public movieApiProvider: MovieApiProviderService) { }

  ngOnInit() {
    this.movieApiProvider.getFilmbyid('id').subscribe(
      data => {
          this.movie = data;
          console.log(this.movie);

          // this.favoriteMovieProvider
          // .isFavoriteMovie(this.movie)
          // .then (value => (this.isFavorite = value));
   });

  }
}


