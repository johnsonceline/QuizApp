import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputersPage } from './computers';

@NgModule({
  declarations: [
    ComputersPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputersPage),
  ],
})
export class ComputersPageModule {}
