import { Component, OnInit } from '@angular/core';
import { Service, programInfo } from './add-program.service';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss'],
  providers: [Service],
})
export class AddProgramComponent {
  program: programInfo;

  positions: string[];

  states: string[];
  programLengthNum= [1,2,3,4,5];
  programLengthName = ['Weeks','Years'];
  learningMethodRadio = ['Hybird','In-Person','Online']

  constructor(service: Service, private router: Router) {
    this.program = service.getEmployee();
    this.positions = service.getPositions();
    this.states = service.getStates();
  }

  goBack() {
    notify('Back to programs')
    this.router.navigate(['/programs'])
  }

  aboutFieldChange(e: any) {
    console.log('change',this.program.about)
    console.log(e.itemData)
  }
}
