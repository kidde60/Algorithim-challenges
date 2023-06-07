var removeDuplicates = function(nums) {
    let noDup= new Set(nums);
    let newArr=[];
    newArr.push(...noDup);
    
    return newArr;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
