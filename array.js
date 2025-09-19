// ✅ 1. Reverse an array manually
function reverseArray(arr) {
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}

// ✅ 2. Find second largest
function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}

// ✅ 3. Check palindrome
function isPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
}

// ✅ 4. Unique elements
function uniqueElements(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return Object.keys(freq).filter(k => freq[k] === 1).map(Number);
}

// ✅ 5. Frequency count
function frequencyCount(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

// ✅ 6. Rotate array right by k
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// ✅ 7. Square using map
function squareArray(arr) {
  return arr.map(n => n * n);
}

// ✅ 8. Filter even
function filterEven(arr) {
  return arr.filter(n => n % 2 === 0);
}

// ✅ 9. Sum using reduce
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// ✅ 10. Count elements > x
function countGreater(arr, x) {
  return arr.filter(n => n > x).length;
}

// ✅ 11. Uppercase strings
function toUppercase(arr) {
  return arr.map(str => str.toUpperCase());
}

// ✅ 12. Count elements using reduce
function elementCount(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

// ✅ 13. Remove duplicates using filter
function removeDuplicates(arr) {
  return arr.filter((val, i) => arr.indexOf(val) === i);
}

// ✅ 14. Flatten array recursively
function flatten(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

// ✅ 15. Chunk into subarrays
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// ✅ 16. Pair sum
function pairSum(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) res.push([arr[i], arr[j]]);
    }
  }
  return res;
}

// ✅ 17. Move zeros to end
function moveZeros(arr) {
  let nonZero = arr.filter(n => n !== 0);
  let zeros = Array(arr.length - nonZero.length).fill(0);
  return nonZero.concat(zeros);
}

// ✅ 18. Intersection of arrays
function intersection(arr1, arr2) {
  return arr1.filter(val => arr2.includes(val));
}

// ✅ 19. Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// ✅ 20. Longest increasing subarray
function longestIncreasingSubarray(arr) {
  let maxLen = 1, currLen = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currLen++;
      maxLen = Math.max(maxLen, currLen);
    } else {
      currLen = 1;
    }
  }
  return maxLen;
}


