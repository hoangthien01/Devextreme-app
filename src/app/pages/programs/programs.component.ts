import { Component, OnInit } from '@angular/core';
import { Service, Program } from './programs.service';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import themes from 'devextreme/ui/themes';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class ProgramsComponent implements OnInit {
  programs: Program[];

  allMode: string;

  checkBoxesMode: string;
  programsInActive: Program[];
  addListActions: Array<{ id: Number; text: String }> = [
    { id: 1, text: 'New Program' },
    { id: 2, text: 'Bulk Upload' },
  ];

  readonly allowedPageSizes = [1, 2, 5, 10, 'all'];

  readonly displayModes = [
    { text: "Display Mode 'full'", value: 'full' },
    { text: "Display Mode 'compact'", value: 'compact' },
  ];

  displayMode = 'compact';

  showPageSizeSelector: any = true;

  showInfo: any = true;

  showNavButtons: any = true;

  // customizeColumns(columns) {
  //   columns[0].width = 70;
  // }

  get isCompactMode() {
    return this.displayMode === 'compact';
  }

  constructor(service: Service, private router: Router) {
    this.programs = service.getPrograms();
    this.allMode = 'allPages';
    this.checkBoxesMode = themes.current().startsWith('material')
      ? 'always'
      : 'onClick';

    this.programsInActive = service.getProgramsInActive();
  }

  ngOnInit(): void {}

  getNumProgramActive() {
    return this.programs.length;
  }

  getNumProgramInActive() {
    return this.programsInActive.length;
  }

  logAction(e: any) {
    console.log(e.itemData.text + ' was clicked');
    if (e.itemData.text === 'New Program') {
      this.router.navigate(['/add']);
    }
  }
}
