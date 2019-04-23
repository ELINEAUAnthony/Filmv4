import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieApiProviderService } from './api/movie-api-provider.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FavoriteMovieService } from '../app/favorite-movie.service';
import { IonicStorageModule } from '@ionic/storage';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [BrowserModule,
   IonicModule.forRoot(), 
   AppRoutingModule,
   HttpClientModule,
   IonicStorageModule,
   NgxQRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieApiProviderService,
    BarcodeScanner,
    FavoriteMovieService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
