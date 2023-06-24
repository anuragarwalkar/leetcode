class Calculator {
  
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value += value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value -= value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value *= value;
        return this;
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
       if(!value) throw new Error("Division by zero is not allowed");
        this.value /= value;
        this.this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value)
        this.this;
    }
      
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}

const data = new Calculator(10).multiply(5).getResult();

console.log('data:', data);