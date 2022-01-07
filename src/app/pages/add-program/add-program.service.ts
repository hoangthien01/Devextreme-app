import { Injectable } from '@angular/core';

export class programInfo {
  programId!: number;

  programName!: string;

  programType!: String;

  about!: string;

  oganization!: String;

  level!: string;
  website!: string;

  ageGroup!: number;

  carrer!: String;

  programLength = {
    num: 0,
    name: '',
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
  programName: '',
  programType: '',
  about: '',
  oganization: '',
  level: 'master',
  ageGroup: 22,
  website: '',
  carrer: '',
  programLength: {
    num: 1,
    name: '',
  },
  learningMethod: {
    name: '',
    address: '',
  },
  skill: {
    type: '',
    level: '',
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
