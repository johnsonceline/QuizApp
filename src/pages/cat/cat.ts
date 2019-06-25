import { HomePage } from './../home/home';
import { FlashCardComponent } from './../../components/flash-card/flash-card';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {
  categories: any = ['History', 'Religion', 'Animals', 'Computers','Biology'];

  religion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data) {
    this.data.getData().subscribe(data1 => { this.religion = data1.Religion});
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CatPage');
    
 
  }

  consoleM(){
    console.log(this.religion.name);
  }

  gotoQuestions(category){
    this.navCtrl.push(HomePage, {category: category});
  }
  onClick(){
    this.navCtrl.push(FlashCardComponent)
  }
}
