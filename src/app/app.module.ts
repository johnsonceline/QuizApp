import { BiologyPage } from './../pages/biology/biology';
import { ComputersPage } from './../pages/computers/computers';
import { AnimalsPage } from './../pages/animals/animals';

import { CatPage } from './../pages/cat/cat';
import { HttpModule } from '@angular/http';
import { FlashCardComponent } from './../components/flash-card/flash-card';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HistoryPage } from '../pages/history/history';
import { ReligionPage } from '../pages/religion/religion';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Data } from '../providers/data/data';
import { TotalProvider } from '../providers/total/total';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatPage,
    HistoryPage,
    AnimalsPage,
    ReligionPage,
    BiologyPage,
    ComputersPage,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    CatPage,
    BiologyPage,
    ComputersPage,
    AnimalsPage,
    ReligionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,
    TotalProvider,
  ]
})
export class AppModule {}
