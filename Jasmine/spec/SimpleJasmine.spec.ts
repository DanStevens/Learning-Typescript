import using from './helpers/dataProvider'

describe('spec/SimpleJasmine.spec.ts', () => { 
  it('should fail', function () {
      var undefinedValue = "test";
      expect(undefinedValue).toBeDefined('should be defined');
  });

  it("expect value toBe(2)", () => { 
      let twoValue = 2; 
      expect(twoValue).toBe(2); 
  })

  it("expect string toContain value ", () => { 
      let testString = "12345a"; 
      expect(testString).toContain("a"); 
  });

  it("expect true to be truthy", () => { 
      let trueValue = true; 
      expect(trueValue).toBeTruthy(); 
  });

  it("expect false not to be truthy", () => { 
      let falseValue = false; 
      expect(falseValue).not.toBeTruthy(); 
  }); 

  it("expect value not to be null", () => { 
      let definedValue = 2; 
      expect(definedValue).not.toBeNull(); 
  });

  it("expect objects to be equal", () => { 
      let obj1 = {a : 1, b : 2}; 
      let obj2 = {b : 2, a : 1}; 
  
      expect(obj1).toEqual(obj2); 
  });
}); 

describe("beforeEach and afterEach tests", () => { 
  let myString : string | undefined; 

  beforeEach(() => { 
      myString = "this is a string"; 
  }); 
  afterEach(() => { 
      expect(myString).toBeUndefined(); 
  }); 

  it("should find then clear the myString variable", () => { 
      expect(myString).toEqual("this is a string"); 
      myString = undefined; 
  }); 

}); 

xdescribe("This is a skipped suite", () => { 
  it("This is not a forced test", () => { 
      expect(true).toBeFalsy('true should be false'); 
  }); 
  fit("This is a forced test", () => { 
      expect(false).toBeFalsy(); 
  }) 
}); 

describe("data driven tests", () => { 
  using("valid values", [ 
      "first string", 
      "second_string", 
      "!!string!!" 
  ], (value: string) => { 
      it(`${value} should contain 'string'`, () => { 
          expect(value).toContain("string"); 
      }); 
  }); 
}); 