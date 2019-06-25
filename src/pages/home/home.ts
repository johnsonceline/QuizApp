import { ComputersPage } from './../computers/computers';
import { BiologyPage } from './../biology/biology';
import { AnimalsPage } from './../animals/animals';
import { CatPage } from './../cat/cat';
import { TotalProvider } from './../../providers/total/total';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {HistoryPage} from '../history/history';
import { ReligionPage } from '../religion/religion';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('slides') slides: any;

    hasAnswered: boolean = false;
    grandTotal: any;
    slideOptions: any;
    questions: any;
    category: any;

    constructor(public navCtrl: NavController, 
      public dataService: Data, public navParams :NavParams,  private totalProv: TotalProvider) {

        this.category = this.navParams.get('category');
    
       

    }

    ionViewDidLoad() {
     
      this.slides.lockSwipes(true);
     
      this.dataService.load().then((data) => {

          data.map((question) => {

              let originalOrder = question.answers;
              question.answers = this.randomizeAnswers(originalOrder);
              return question;

          });     
        
          this.grandTotal = this.totalProv.grandTotal;
            this.questions = data;

      });

  }

 




  nextSlide(){

    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    
    if(this.category == "History"){
      this.navCtrl.push(HistoryPage);
    }
    else if(this.category == "Religion"){
      this.navCtrl.push(ReligionPage);
    }

    else if(this.category == "Animals"){
      this.navCtrl.push(AnimalsPage);
    }

    else if(this.category == "Computers"){
      this.navCtrl.push(ComputersPage);
    }

    else if(this.category == "Biology"){
      this.navCtrl.push(BiologyPage);
    }
     
  }

  selectAnswer(answer, question){

      this.hasAnswered = true;
      answer.selected = true;
      question.flashCardFlipped = true;
   

      if(answer.correct){
        this.grandTotal =  this.totalProv.setTotal(20);
      }

      setTimeout(() => {
          this.hasAnswered = false;
          this.nextSlide();
          answer.selected = false;
          question.flashCardFlipped = false;
      }, 2000);
  }

  randomizeAnswers(rawAnswers: any[]): any[] {

      for (let i = rawAnswers.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = rawAnswers[i];
          rawAnswers[i] = rawAnswers[j];
          rawAnswers[j] = temp;
      }

      return rawAnswers;

  }

  restartQuiz() {
      this.slides.lockSwipes(false);
      this.slides.slideTo(1, 1000);
      this.slides.lockSwipes(true);
      this.navCtrl.push(CatPage);
  }

  CatPage(){
    this.navCtrl.push(CatPage);
  }

}
 