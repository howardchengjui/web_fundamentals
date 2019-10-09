//q1//
Print1To255(){
    for(i=0,i<256,i++){
        console.log(i);
    }
}

//q2//
function sumeven1000(){
    var total=0
    for(i=0;i<1001;i++){
      if(i%2===0){
        total=total+i
      }
    }
    return total;
  }
  console.log(sumeven1000());

  //q3//
function sumOdd(){    
    var total=0;
      for(i=0; i<5001; i++){
      if(i%2==1){
        total = total + i;
        }
    }
   return total;
  }
console.log(sumOdd());

//q4//
function iteratearr(arr){
    var total=0;
    for(i=0;i<arr.length;i++){
        total=total+arr[i];
    }
}
return total;
}
console.log(iteratearr([0,1,2,3,4]));

//q5//
function printmaxofarray(arr){
    max=arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i]>arr[0]){
            max=arr[i];
        }
    }
    return max;
}
console.log(printmaxofarray([0,1,2,3,4]));

//q6//
function printaverage(arr){
    var total=0;
    var avg=total/arr.length;
    for(i=0;i<arr.length;i++){
        total=total+arr[i];
    }
    
    return avg;
}
console.log(printaverage([0,1,2,3,4]);

//q7//
function returnoddsarray1to50 (){
    var arr=[];
    for(i=0;i<51;i++){
        if(i%2 == 1){
            arr.push(i);
        }
    }
   return arr;
}
console.log(returnoddsarray1to50 ()); 

//q8//
function greaterthany(arr,y){
    var count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>y){
            count=count+1;
        }
    }
    return count;
}
console.log(greaterthany([0,1,2,3,4],2));


//q9//
function squarearrayvals(arr){
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i] * arr[i];
    }
return arr;
}
console.log(squarearrayvals([0,1,2,3,4]));

//q10//
function negative(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
return arr;
}
console.log(negative([0,1,2,3,-4]));


//q11//
function maxminavg(arr){
    var max=arr[0];
    var min=arr[0];
    var total=0;

    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        total=total+arr[i];
    } 
    return [max,min,total/arr.length]
}
console.log(maxminavg([0,1,2,3,4]));

//q12//
function swap(arr){
    var temp=arr[arr.length-1];
    arr[arr.length-1]=arr[0];
    arr[0]=temp;
    return arr;
    
}
console.log(swap([0,1,2,3,4]));

//q13//
function negativetodojo(arr){
    for(i=1;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr;
}
console.log(negativetodojo([0,-1,2,-3,4]));











