import { Component, OnInit } from '@angular/core';
import { Service, programInfo } from './add-program.service';

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

  constructor(service: Service) {
    this.program = service.getEmployee();
    this.positions = service.getPositions();
    this.states = service.getStates();
  }
}
