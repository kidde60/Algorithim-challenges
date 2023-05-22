
function trial(arr){
   
    // for(let i =0; i < arr.length; i++){
    //     let firstElement = arr[0]
       
    //     for (let j = i+1; j<arr.length; j++){
    //         let count = 0
    //         if(firstElement.charAt(count) == arr[j].charAt(count)){
    //             prefix = 
    //             console.log()
    //         }
    //         console.log(arr[j]);
    //     }

    // }
    if(arr.length==0){
        return "There nothing";
    }else if(arr.length==1){
        return arr[0]
    }else{
        let sortedArr=arr.sort();
        let first=sortedArr[0];
        let last=sortedArr[sortedArr.length-1];
        let len;
        if(first.length>=last.length){
             len=first.length;
        }else{
             len=last.length;
        }
        let pref="";
        for(let i=0; i<len; i++){
            if(first[i]===last[i]){
                pref= pref+ first[i];
            }else{
                break;
            }
        }
        // console.log(pref)
        return pref;
    }
}
trial(["flower","flow","flight"])
