const swap = (array, firstIndex, secondIndex) => {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}; 

const indexOfMinimum = (array, startIndex) => {
    let minIndex = startIndex;
    for(let i = minIndex + 1; i < array.length; i++) {
        if(array[i] < array[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
};

const selectionSort = (array) => {
    for(let i = 0; i < array.length; i++){
        const minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
};
 
const array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log(`Sorted array: ${array}`);
