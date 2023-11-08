// var checkIfInstanceOf = function(obj, classFunction) {
//     try {
//         if(obj instanceof classFunction) {
//             return true;
//         }
//     } catch (error) {
//         return false;
//     }

//      if(typeof obj === classFunction.name.toLowerCase() && obj !== null) {
//         return true;
//     }

//     if(['string', 'number', 'boolean', 'Date', 'function', 'bigint', 'symbol'].includes(typeof obj) && classFunction.name === 'Object') {
//         return true;
//     }

//     return false;
// };

var checkIfInstanceOf = function(obj, classFunction) {
    while(obj != null) {
     if(obj.constructor === classFunction) {
         return true;   
     }
 
     obj = Object.getPrototypeOf(obj);
    }
 
    return false;
 };
 
 
 const employeeOld = Object.create({ lastName: 'arwalkar' }, { name: { value: 'asda', enumerable: false } });
 
 const orgObject = { company: 'ABC Corp' }
 const carObject = { carName: { name: 'Ford' } }
 const employee = Object.assign({ name: 'anurag' }, orgObject, carObject);
 
 // console.log('Object Create:', employeeOld);
 