
function trial(arr){
    if(arr.length==0){
        return "There nothing";
    }else if(arr.length==1){
        return arr[0]
    }else{
        let sortedArr=arr.sort();
        let first=sortedArr[0];
        let last=sortedArr[sortedArr.length-1];
        let pref="";
        for(let i=0; i<first.length; i++){
            if(first[i]===last[i]){
                pref= pref+ first[i];
            }else{
                break;
            }
        }
        console.log(pref)
        return pref;
    }
}
trial(["flower","flow","flight"])
