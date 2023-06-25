
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let prev = 0;
    let current = 1;
    while (true) {
      let next = current;
      current = prev + current;
      yield prev;
      prev = next;
    }
  };
  
  const generator = fibGenerator();
  
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  