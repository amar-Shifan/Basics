let arr = [1,3,4,5,5,6,7,8,9];

function binary(arr , target = 5){
    let left = 0
    let right =  arr.length - 1

    while(left <= right ){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] == target) {
            return mid 
        } else  if (arr[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return - 1
}

console.log(binary(arr))