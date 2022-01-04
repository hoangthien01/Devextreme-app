import { Injectable } from '@angular/core';

export class Program {
    programId!: number;

    programName!: string;

    offering!: number;

    publishedBy!: string;

    publishedOn!: string;

    views!: number;
}

const programs: Program[] = [{
    programId: 1,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 2,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 3,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 4,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 5,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
},{
    programId: 1,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 2,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 3,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 4,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 5,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
},{
    programId: 1,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 2,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 3,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 4,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}, {
    programId: 5,
    programName: 'North America',
    offering: 6,
    publishedBy: 'New York',
    publishedOn: '2013/01/06',
    views: 123,
}];


export class ProgramActive {
    programId!: number;

    programName!: string;

    offering!: number;

    publishedBy!: string;

    publishedOn!: string;

    views!: number;
}

const programsInActive: Program[] = [{
        programId: 1,
        programName: 'North America',
        offering: 6,
        publishedBy: 'New York',
        publishedOn: '2013/01/06',
        views: 123,
    },
];

@Injectable()
export class Service {
    getPrograms(): Program[] {
        return programs;
    }

    getProgramsInActive(): Program[] {
        return programsInActive;
    }
}
