import { Injectable } from '@angular/core';

export class programInfo {
  programId!: number;

  programName!: string;

  programType!: Array<String>;

  about!: string;

  oganization!:  Array<String>;

  level!: string;
  website!: string;

  ageGroup!: number;

  carrer!: Array<String>;

  programLength = {
    num: 0,
    name: ''
  };

  learningMethod = {
    name: '',
    address: '',
  };

  skill = {
    type: '',
    level: '',
  };
}

const programs: programInfo = {
  programId: 122,
  programName: 'John',
  programType: [
    'Type A',
    'Type B'
  ],
  about: '',
  oganization: [
    'Oganization A',
    'Oganization B',
  ],
  level: 'master',
  ageGroup: 22,
  website : '',
  carrer: [
    'Carrer 1',
    'Carrer 2'
  ],
  programLength: 
    {
      num:1, 
      name:'Weeks',
    }
  ,
  learningMethod: {
    name: 'Js',
    address: 'DaNang',
  },
  skill: {
    type: 'action',
    level: 'master',
  },
};

const positions: string[] = [
  'HR Manager',
  'IT Manager',
  'CEO',
  'Controller',
  'Sales Manager',
  'Support Manager',
  'Shipping Manager',
];

const states: string[] = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

@Injectable()
export class Service {
  getEmployee() {
    return programs;
  }

  getPositions() {
    return positions;
  }

  getStates() {
    return states;
  }
}
