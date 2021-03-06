
declare global {
  interface Number {  
    thousandsSeperator(): String;  
  }
}

Number.prototype.thousandsSeperator = function(): string {  
  return Number(this).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');  
}

export {}

// let myNum = 123456789;  
// console.log(myNum.thousandsSeperator()); 