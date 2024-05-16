const removeFromArray = function(arr) {
    let newArr = arr;
    for(let i = 0; i < arguments.length; i++){
        if (arr.includes(arguments[i])){
            let index = newArr.indexOf(arguments[i])
            newArr = newArr.toSpliced(index,1).filter((num) => num !== arguments[i] ); 
        }
    }
    return newArr;
};
// Do not edit below this line
module.exports = removeFromArray;
