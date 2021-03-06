import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule,
} from './layouts';
import {
  FooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { ProgramsComponent } from './pages/programs/programs.component';
import {
  DxDataGridModule,
  DxToolbarModule,
  DxSelectBoxModule,
  DxTabsModule,
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule,
  DxFormModule,
  DxButtonModule,
  DxDropDownButtonModule,
  DxTextAreaModule,
  DxDateBoxModule,
  DxRangeSliderModule,
  DxNumberBoxModule,
  DxTextBoxModule,
  DxRadioGroupModule,
  DxPopupModule,
} from 'devextreme-angular';
import { AddProgramComponent } from './pages/add-program/add-program.component';
import {
  AddOfferingPopupComponent,
  AddOfferingPopupModule,
} from './shared/components/add-offering-popup/add-offering-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    AddProgramComponent,
    // AddOfferingPopupComponent,
  ],
  imports: [
    BrowserModule,
    AddOfferingPopupModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxTabPanelModule,
    DxTabsModule,
    DxToolbarModule,
    DxCheckBoxModule,
    DxTemplateModule,
    DxFormModule,
    DxButtonModule,
    DxDropDownButtonModule,
    DxTextAreaModule,
    DxRadioGroupModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxRangeSliderModule,
    DxNumberBoxModule,
    DxPopupModule,
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
