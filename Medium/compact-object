const obj = {"r":[{"n":null,"g":2,"s":[65,29,3,true,"",[null,false,30,29,true,66,91,null,93,null]]}]}

/**
 * 
 * 
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    let output = {};

    if(!obj) {
        return null;
    }

    if(Array.isArray(obj)) {
        let array = [];
        for (const item of obj) {
            const subObj = compactObject(item)

            if (subObj) {
                array.push(subObj);
            }
        }

        return array;
    
    }else if(typeof obj === 'object') {
        for (const key in obj) {
            const data = compactObject(obj[key]);
            if(data) {
                output[key] = data;
            }
        }
        return output;
    }

    if(obj) {
        return obj;
    }

};

console.log(JSON.stringify(compactObject(obj)))
