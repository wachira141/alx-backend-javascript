interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience?: number;
  location: string;
  [key: string]: any
};


const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction(firstName: string, lastName: string) => {
  return `${firstName.slice(0, 1)}. ${lasName}`;
}


interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements Student{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
}

  workOnHomework(): string {
    return 'Currently working';
}
  displayName(): string {
    return this.firstName;
}
}


const student = new StudentClass("wilson", "wachira");
console.log(student.displayName());
console.log(student.workOnHomework());
