var join = function(arr1, arr2) {
    const result = {};

    const callback = (element) => {
        const item = result[element.id];
        result[element.id] = item ? {...item, ...element} : element; 
    }

   arr1.forEach(callback);

   arr2.forEach(callback);

   return Object.values(result);
 };

const res = join([{ "id": 1, "x": 36, "d": 26, "f": 35 }, { "id": 3, "c": 20, "z": 75 }]
    , [{ "id": 2, "o": 48, "z": 84, "y": 61 }]
);

console.log('res:', res);