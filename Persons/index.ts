import moment from 'moment';

interface IPerson {
  dateOfBirth: Date;
  canSignContracts: boolean;
  getAge(): number;
  readonly category: string;
  toString() : string;
}

abstract class PersonBase implements IPerson
{
  public name: string
  public dateOfBirth: Date;
  public canSignContracts: boolean = false;
  public category: string = '';
  constructor(name: string, dateOfBirth: Date) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
  getAge() : number {
    return moment().diff(moment(this.dateOfBirth), 'years');
  }
  toString() : string {
    return `${this.name} is ${this.category} aged ${this.getAge()}. ` +
           `This person ${this.canSignContracts ? 'is' : 'is not'} old enough to sign contracts`;
  }
}

class Adult extends PersonBase {
  constructor(name: string, dateOfBirth: Date) {
    super(name, dateOfBirth);
    this.canSignContracts = true;
    this.category = 'an adult';
  }
}

class Child extends PersonBase {
  constructor(name: string, dateOfBirth: Date) {
    super(name, dateOfBirth);
    this.canSignContracts = false;
    this.category = 'a child';
  }
}

class Infant extends PersonBase {
  constructor(name: string, dateOfBirth: Date) {
    super(name, dateOfBirth);
    this.canSignContracts = false;
    this.category = 'an infant';
  }
}

class PersonFactory {
  static new(name: string, dateOfBirth: Date) {
    const age = moment().diff(moment(dateOfBirth), 'years');
    if (age < 2)
      return new Infant(name, dateOfBirth);
    if (age < 18)
      return new Child(name, dateOfBirth);
    return new Adult(name, dateOfBirth);
  }
}

const alice: IPerson = PersonFactory.new('Alice', moment('2018-08-03').toDate());
console.log(alice.toString());
const bob: IPerson = PersonFactory.new('Bob', moment('2015-07-22').toDate());
console.log(bob.toString());
const charlie: IPerson = PersonFactory.new('Charlie', moment('1972-03-02').toDate());
console.log(charlie.toString());