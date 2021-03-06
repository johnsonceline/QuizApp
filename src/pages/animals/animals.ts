import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Data} from '../../providers/data/data';
import { TotalProvider } from './../../providers/total/total';
import { CatPage } from './../cat/cat';


@IonicPage()
@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {

    @ViewChild('slides') slides: any;
  
    hasAnswered: boolean = false;
    grandTotal: number = 0;
    value: string;
    slideOptions: any;
    category: any;
    Animals: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, public totalProv : TotalProvider ) {
    this.data.getData().subscribe(data => {this.Animals  = data.Animals})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalsPage');
  }

  selectAnswer(answer, question, val){

    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;
    this.value = val;
 

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


nextSlide(){

  this.slides.lockSwipes(false);
  this.slides.slideNext();
  this.slides.lockSwipes(true);
  if(this.category == "Animals"){
    this.navCtrl.push(AnimalsPage);
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
    this.navCtrl.push(CatPage);
    this.totalProv.reset();
    this.grandTotal = 0;
}

CatPage(){
  this.navCtrl.push(CatPage);
}

}


