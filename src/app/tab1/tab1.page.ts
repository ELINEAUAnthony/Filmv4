import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MovieApiProviderService } from '../api/movie-api-provider.service';
import { Subscription } from 'rxjs';
import { IMovie } from '../Interface/IMovie';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  film:any;
  movies=[];
  myFilm;
  page=1
  scannedCode= null;
  filter:String = ""
  subs:Subscription;

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public router : Router,
              public movieApiProvider: MovieApiProviderService
              ) {
  }


  ngOnInit() {
  
    this.subs = this.movieApiProvider.getFilmpopular(this.page).subscribe(
      data => {
          this.movies = data.results;
          console.log(this.movies);
   })
   
  }

  movieFilter(paramsFilter:string){
    this.page = 1;
    if (paramsFilter != "") {
    this.filter = paramsFilter;
      this.subs = this.movieApiProvider.searchMovies({filter: paramsFilter, page: this.page.toString()}).subscribe(
      data =>{
        this.movies = data.results;
      },
      error =>{
        console.log(error);
      }
    )
    }
    else {
      this.subs = this.movieApiProvider.getFilmpopular(this.page).subscribe(
        data => {
            this.movies = data.results;
            console.log(this.movies);
     })
    }
  }

  goToDetail(movie:IMovie){
    console.log(movie.id);
    let data = {
      id:movie.id
    }
    this.router.navigate(['/essai', data])

  }

  // goToNote(){
  //   this.navCtrl.push(NotePage);
  // }

  // goToUpComing(){
  //   this.navCtrl.push(UpcomingPage)
  
  // }
  
  doInfinite(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.subs = this.movieApiProvider.getFilmpopular(this.page).subscribe((data => {
        let newlist = data.results;
        newlist.forEach((movie)=>{
          this.movies.push(movie);
        });
      }));
      infiniteScroll.complete();
    }, 500);
  }

  scanCode(movie:IMovie){
    this.barcodeScanner.scan().then(barcodeData=>{
    this.scannedCode = barcodeData.text;
    // this.navCtrl.navigateForward('detail/', {id : barcodeData.text.toString()
  })
    
  }

  ngOnDestroy(): void {
    if(this.subs){
    this.subs.unsubscribe}
  }

}


