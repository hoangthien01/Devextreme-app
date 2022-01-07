import { Component, OnInit } from '@angular/core';
import { Service, programInfo } from './add-program.service';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Program } from '../programs/programs.service';
@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss'],
  providers: [Service],
})
export class AddProgramComponent {
  program: programInfo = new programInfo();

  positions: string[];

  states: string[];
  programType = [
    'External Activities',
    'Camps',
    'Clubs',
    'Courses',
    'Work Experiences',
  ];
  oganizationName = ['Caps', 'Bootcamps', 'Summer Camps'];
  programLevels = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
  programCarrer = ['Carrer 1', 'Carrer 2'];
  programLengthNum = [1, 2, 3, 4, 5];
  programLengthName = ['Weeks', 'Months', 'Years'];
  learningMethodRadio = ['Hybird', 'In-Person', 'Online'];
  tooltip: any = {
    enabled: true,
    // format: (value: any) => this.format(value),
    showMode: 'always',
    position: 'bottom',
  };
  popupVisible: boolean = false;

  // format(value: any) {
  //   return `${value}%`;
  // }
  constructor(service: Service, private router: Router) {
    this.program = service.getEmployee();
    this.positions = service.getPositions();
    this.states = service.getStates();
  }

  goBack() {
    notify('Back to programs');
    this.router.navigate(['/programs']);
  }

  aboutFieldChange(e: any) {
    console.log('change', this.program.about);
    console.log(e.itemData);
  }

  addProgram() {
    console.log('program', this.program);
  }

  onFormSubmit(e: any) {
    notify(
      {
        message: 'You have submitted the form',
        position: {
          my: 'center top',
          at: 'center top',
        },
      },
      'success',
      3000
    );
    console.log('program', this.program);

    e.preventDefault();
  }

  openAddOfferingPopup() {
    this.popupVisible = true;
  }

  closePopupHandler(value: boolean) {
    console.log('close');
    this.popupVisible = value;
  }
}
