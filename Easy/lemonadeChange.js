/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const moneyStore = {}

    const currency = [2000, 500, 200, 100, 10, 5, 2, 1];

    for (const bill of bills) {
        moneyStore[bill] =  moneyStore[bill] + 1 || 1

        if(bill !== 5) {
          let remaning = bill - 5;
          const availableCurrency = currency.filter(e => moneyStore[e]);
         
          availableCurrency.forEach(c => {
            const note = Math.floor(remaning / c);
            if(note && (moneyStore[c] >= note)) {
                remaning -= note * c;
                moneyStore[c] = moneyStore[c] - note;
                if(moneyStore[c] === 0) {
                    delete moneyStore[c];
                }
            }
          });

          if(remaning !== 0) {
            return false;
          }
        }
        
    }

    return true;
};

const result = lemonadeChange([5,5,5,10,5,5,10,20,20,20]);
// 5 1
// 20 2
console.log('result:', result);