//let x = 0;

//let arr = ['string']
//let arr = [[1,2,3], ['phanyia', 'duke', 'tshance'], [true, false, true] ]

//arr [0] - grab first index

//for (let i = 0; i < arr.length; i++) {
//    for (y of arr[i]) {
//        console.log(y)
//    }
//}

//for (let i = 0; i < arr.length; i++) {
//    for (element of arr [i]) {
//        if (typeof element == "string") {
//            for (char of element) {
//                console.log(char);
//            }
//        }
//    }
//}

//let x = 0;

//for (let i = 0; i < arr.length; i++) { // for each array in the main array
//    for (let j = 0; j < arr[i].length; j++) { // for each element in the array in the main array
//        if (typeof arr[i][j] == "string" && j == 0) { // if that element is a string AND is at the first position
//            for (char of arr [i][j]) { // log each character in that element to the console
//                console.log(char);
//            }
//        }
//    }
//}


//let arr = [1, 0, 7, 3, 65, 23] ;
//for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > arr[i + 1]) {
//        let temp = arr[i];
//        arr[i] = arr[i + 1];
//        arr[i + 1] = temp;
//    }
//}
//console.log(arr)


//let arr = [34, 1, 0, 7, 3, 65, 26, 23, 3, 7829];

//for (let i = 0; i < arr.length; i ++) {// iterating through the array (iterates 10x)
//    for (let j = 0; j < arr.length; j++) {// iterating through the array each time the above loop iterates (iterates 100x)
//        if (arr[j] > arr[j + 1]) { // if the element at position j is more than the element directly ahead of it
//            let temp = arr[j]; // temp equals arr[j]
//            arr[j] = arr[j + 1];// arr[j] now equals the element ahead of j
//            arr[j + 1] = temp; // and the next element equals temp (which was the first arr[j] before it was changed)
//        }
//    }
//}
//console.log(arr)



//Make a function that takes in an array and a target number that returns two numbers from the array that equal the
//target, else, return "no number equals the target"




// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) { // if this condition is true, it'll break
//                 return [nums[i], nums[j]]; 
//             }
//         }
//     }
// }

// console.log(twoSum([1, 2, 3], 5))
// answer should be (2) [3, 2]



