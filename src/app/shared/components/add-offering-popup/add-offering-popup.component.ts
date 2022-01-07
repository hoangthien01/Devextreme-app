import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  DxButtonModule,
  DxDateBoxModule,
  DxFormModule,
  DxPopupModule,
  DxTextBoxModule,
  DxValidatorModule,
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Service, Offering } from './add-offering-program.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
@Component({
  selector: 'app-add-offering-popup',
  templateUrl: './add-offering-popup.component.html',
  styleUrls: ['./add-offering-popup.component.scss'],
})
export class AddOfferingPopupComponent {
  offering = new Offering();
  learningMethodRadio = ['Hybird', 'In-Person', 'Online'];
  learningMethodName = ['Weeks', 'Months', 'Years'];
  labelMode = 'outside';
  labelLocation = 'top';
  @Input() popupVisible: boolean = false;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();
  ADD_TO_FAVORITES = 'Add to Favorites';

  REMOVE_FROM_FAVORITES = 'Remove from Favorites';

  constructor(service: Service, private router: Router) {
    console.log('add init');
  }

  emitClosePopup() {
    console.log('emit close');
    this.closePopup.emit(false);
  }

  onFormSubmit(e: any) {
    console.log('submit');
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxPopupModule,
    DxButtonModule,
    DxiItemModule,
    DxFormModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxDateBoxModule,
  ],
  declarations: [AddOfferingPopupComponent],
  exports: [AddOfferingPopupComponent],
  providers: [Service],
})
export class AddOfferingPopupModule {}
