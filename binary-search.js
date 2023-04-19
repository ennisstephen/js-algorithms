function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function isPrime(num) {
    return binarySearch(primes, num) !== -1;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
