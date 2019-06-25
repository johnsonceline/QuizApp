import { HomePage } from './../home/home';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CatPage } from './../cat/cat';
import { TotalProvider } from './../../providers/total/total';
import { Component, ViewChild } from '@angular/core';
import { Data } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  @ViewChild('slides') slides: any;

    hasAnswered: boolean = false;
    grandTotal: number = 0;
    slideOptions: any;
    questions: any;
    category: any;
    answers: any;
  value: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, public totalProv : TotalProvider) {
    this.data.getData().subscribe(data => 
      { 
        this.questions = data.questions
        
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }


  selectAnswer(answer, question, val){

    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;
    this.value = val;
    console.log(this.value);

    if(answer.correct){
      console.log('Correct');
      
      this.grandTotal =  this.totalProv.setTotal(20);
    } else{
      console.log('Incorrect');
      
    }

    setTimeout(() => {
        this.hasAnswered = false;
        this.nextSlide();
        answer.selected = false;
        question.flashCardFlipped = false;
    }, 1000);
}


nextSlide(){

  this.slides.lockSwipes(false);
  this.slides.slideNext();
  this.slides.lockSwipes(true);
  if(this.category == "History"){
    this.navCtrl.push(HistoryPage);
  }
   
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
   this.totalProv.reset();
    this.navCtrl.push(CatPage);
   
    
}

CatPage(){
  this.navCtrl.push(CatPage);
}

// if(this.totalProv.grandTotal < 60){
  //   this.navCtrl.push(HomePage);
  // }else{
  //   this.navCtrl.push(CatPage);
  // }


}
