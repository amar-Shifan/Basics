function heapSort(arr){
    let n = arr.length 

    for(let i = Math.floor(n/2) - 1; i>=0 ; i--){
        heapify(arr , n , i)
    }

    for(let i = n -1 ; i>0 ; i--){
        [arr[0] , arr[i]] = [arr[i] , arr[0]]

        heapify(arr , i , 0)
    }

    return arr 
}

function heapify(arr , n , i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2

    if(left < n && arr[largest] < arr[left]){
        largest = left
    }

    if(right < n && arr[largest] < arr[right]){
        largest = right
    }

    if(largest !== i ){
        [arr[i] , arr[largest]] = [arr[largest] , arr[i]]
        heapify(arr , n , largest)
    }

}

console.log(heapSort([1,5,1,8,9,3,2,1]))